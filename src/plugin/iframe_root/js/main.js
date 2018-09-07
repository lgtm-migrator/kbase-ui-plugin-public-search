require([
], function (
) {
    'use strict';

    function boot(rootWindow) {
        // function getParamsFromIFrame() {
        //     if (!this.rootWindow.frameElement.hasAttribute('data-params')) {
        //         throw new Error('No params found in window!!');
        //     }
        //     return JSON.parse(decodeURIComponent(this.rootWindow.frameElement.getAttribute('data-params')));
        // }

        function getRootPath() {
            const pathname = rootWindow.location.pathname;
            const path = pathname.split('/');
            return path.slice(0, -1).join('/');
        }

        const rootPath = getRootPath();

        require.config({
            baseUrl: rootPath + '/' + 'js',
            catchError: true,
            waitSeconds: 60,
            paths: {
                bluebird: 'vendor/bluebird/bluebird',
                bootstrap_css: 'vendor/bootstrap/css/bootstrap',
                bootstrap: 'vendor/bootstrap/bootstrap',
                css: 'vendor/require-css/css',
                'font-awesome_css': 'vendor/font-awesome/css/font-awesome',
                jquery: 'vendor/jquery/jquery',
                'js-yaml': 'vendor/js-yaml/js-yaml',
                kb_common_ts: 'vendor/kbase-common-ts',
                kb_lib: 'vendor/kbase-common-es6',
                kb_knockout: 'vendor/kbase-knockout-extensions-es6',
                'knockout-arraytransforms': 'vendor/knockout-arraytransforms/knockout-arraytransforms',
                'knockout-mapping': 'vendor/bower-knockout-mapping/knockout.mapping',
                'knockout-projections': 'vendor/knockout-projections/knockout-projections',
                'knockout-switch-case': 'vendor/knockout-switch-case/knockout-switch-case',
                'knockout-validation': 'vendor/knockout-validation/knockout.validation',
                knockout: 'vendor/kbase-knockout/knockout',
                marked: 'vendor/marked/marked',
                moment: 'vendor/moment/moment',
                normalize_css: 'vendor/normalize-css/normalize',
                numeral: 'vendor/numeral/numeral',
                uuid: 'vendor/pure-uuid/uuid',
                require: 'vendor/requirejs/require',
                select2: 'vendor/select2/select2',
                text: 'vendor/requirejs-text/text',
                vega: 'vendor/vega/vega',
                yaml: 'vendor/requirejs-yaml/yaml'
            },
            shim: {
                bootstrap: {
                    deps: ['jquery', 'css!bootstrap_css']
                }
            }
        });
    }

    boot(window);

    require([
        'kb_knockout/load',
        'kb_knockout/registry',
        'kb_lib/html',
        'kb_lib/httpUtils',
        'kb_lib/windowChannel',
        './lib/runtime',
        './components/main',
        './rootViewModel',

        // for effect
        'bootstrap',
        'css!font-awesome_css',
        'css!normalize_css'
    ], function (
        knockoutLoader,
        reg,
        html,
        httpUtils,
        WindowChannel,
        runtime,
        MainComponent,
        RootViewModel
    ) {
        const t = html.tag,
            div = t('div');

        class Main {
            constructor({rootWindow}) {
                this.rootWindow = rootWindow;
                this.container = rootWindow.document.body;
                // channelId, frameId, hostId, parentHost
                this.hostParams = this.getParamsFromIFrame();

                // this is the channel for this window.
                this.channel = new WindowChannel.Channel({
                    window: this.rootWindow,
                    host: document.location.origin
                    // recieveFor: [this.id],
                    // clientId: this.iframe.id,
                    // hostId: this.id
                });

                // This is the channel for the window containing this iframe.
                this.hostChannel = new WindowChannel.Channel({
                    window: this.rootWindow.parent,
                    host: this.hostParams.parentHost,
                    channelId: this.hostParams.channelId
                });
            }

            getParamsFromIFrame() {
                if (!this.rootWindow.frameElement.hasAttribute('data-params')) {
                    throw new Error('No params found in window!!');
                }
                return JSON.parse(decodeURIComponent(this.rootWindow.frameElement.getAttribute('data-params')));
            }

            render(ko) {
                this.rootViewModel = new RootViewModel({
                    runtime: this.runtime,
                    hostChannel: this.hostChannel
                });
                this.container.innerHTML = div({
                    style: {
                        flex: '1 1 0px',
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    dataBind: {
                        component: {
                            name: MainComponent.quotedName(),
                            params: {
                                runtime: 'runtime',
                                bus: 'bus'
                            }
                        }
                    }
                });
                ko.applyBindings(this.rootViewModel, this.container);
            }

            showHelp() {
                this.rootViewModel.bus.send('help');
            }

            googleFormLink(arg) {
                const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScfZEQlO2Zq1ZgYQkn0pEIlXJapEOxrdeZmHY4PqvIyy7sugw/viewform';
                const query = {
                    usp: 'pp_url',
                    'entry.45112532': arg.username,
                    'entry.1257375807': arg.realname,
                    'entry.1670959681': arg.email,
                    'entry.250050267': arg.subject
                };
                return baseUrl + '?' + httpUtils.encodeQuery(query);
            }

            getFeedbackLink() {
                const fields = {
                    username: this.runtime.service('session').getUsername() || '',
                    realname: this.runtime.service('session').getRealname() || '',
                    email: this.runtime.service('session').getEmail() || '',
                    subject: 'Public Search'
                };
                return this.googleFormLink(fields);
                // window.open(this.googleFormLink(fields), '_blank');
            }

            start() {
                return knockoutLoader.load()
                    .then((ko) => {
                        ko.options.deferUpdates = true;
                        ko.options.createChildContextWithAs = true;

                        this.channel.start();
                        this.hostChannel.start();

                        this.channel.on('start', (payload) => {
                            const {token, username, config, realname, email} = payload;
                            this.token = token;
                            this.username = username;
                            this.config = config;

                            this.runtime = new runtime.Runtime({config, token, username, realname, email});
                            this.render(ko);

                            this.channel.on('show-feedback', () => {
                                // this.showFeedback();
                                this.hostChannel.send('open-window', {
                                    url: this.getFeedbackLink(),
                                    name: '_blank'
                                });
                            });

                            this.channel.on('show-help', () => {
                                this.showHelp();
                            });

                            // this.hostChannel.send('add-button', {
                            //     button: {
                            //         name: 'feedback',
                            //         label: 'Feedback',
                            //         style: 'default',
                            //         icon: 'bullhorn',
                            //         toggle: false,
                            //         params: {
                            //         },
                            //         callbackMessage: ['show-feedback', null]
                            //     }
                            // });

                            // this.hostChannel.send('add-button', {
                            //     button: {
                            //         name: 'help',
                            //         label: 'Help',
                            //         style: 'default',
                            //         icon: 'question-circle',
                            //         toggle: false,
                            //         params: {
                            //         },
                            //         callbackMessage: ['show-help', null]
                            //     }
                            // });
                        });

                        // Sending 'ready' with our channel id and host name allows the
                        // enclosing app (window) to send us messages on our very own channel.
                        // We could just use the host's channel, have all sends and receives
                        // on the same channel, with control via the channel id. However, there is a risk
                        // the the channels will listen on for the same message ... unlikely though.
                        // Still, it would be odd for one window to listen for messages on another...
                        this.hostChannel.send('ready', {
                            channelId: this.channel.id,
                            channelHost: this.channel.host
                        });
                    });
            }

            stop() {

            }
        }

        const main = new Main({
            rootWindow: window
        });
        try {
            main.start();
        } catch (ex) {
            console.error('Error starting main: ', ex.message);
        }
    });
});