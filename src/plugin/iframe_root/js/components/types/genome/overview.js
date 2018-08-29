define([
    'knockout',
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_lib/html',
    'kb_lib/htmlBuilders'
], function (
    ko,
    reg,
    gen,
    html,
    build
) {
    'use strict';

    const t = html.tag,
        div = t('div'),
        table = t('table'),
        tr = t('tr'),
        th = t('th'),
        td = t('td');

    class ViewModel {
        // constructor({domain, scientificName, dnaLength, contigCount, gcContent, featureCount}, context) {
        //     this.domain = domain;
        //     this.scientificName = scientificName;
        //     this.dnaLength = dnaLength;
        //     this.contigCount = contigCount;
        //     this.gcContent = gcContent;
        //     this.featureCount = featureCount;

        //     this.runtime = context.$root.runtime;
        // }
        constructor(params, context) {
            const {ref} = params;
            this.ref = ref;

            this.runtime = context.$root.runtime;

            this.loading = ko.observable(true);

            this.scientificName = ko.observable();
            this.domain = ko.observable();
            this.dnaSize = ko.observable();
            this.contigCount = ko.observable();
            this.featureCount = ko.observable();
            this.gcContent = ko.observable();

            this.getOverviewInfo();
        }

        getOverviewInfo() {
            const workspace = this.runtime.service('rpc').makeClient({
                module: 'Workspace',
                timeout: 10000,
                authorization: false
            });
            // https://github.com/kbase/workspace_deluxe/blob/8a52097748ef31b94cdf1105766e2c35108f4c41/workspace.spec#L1111
            // https://github.com/kbase/workspace_deluxe/blob/8a52097748ef31b94cdf1105766e2c35108f4c41/workspace.spec#L265
            workspace.callFunc('get_object_subset', [[{
                ref: this.ref,
                included: [
                    'scientific_name',
                    'domain',
                    'dna_size',
                    'num_contigs',
                    'gc_content'
                ]
            }]])
                .spread(([objectData]) => {
                    this.scientificName(objectData.data.scientific_name);
                    this.domain(objectData.data.domain);
                    this.dnaSize(objectData.data.dna_size);
                    this.contigCount(objectData.data.num_contigs);

                    let gcContent;
                    // comment below from genome landing page widget kbaseGenomeOverview
                    /* Assume two cases for GC content.
                    * 1. GC > 1 --> it's a raw percentage, so just render
                    * 2. GC < 1 --> it's a decimal and should be x100
                    * 3. (maybe?) GC > 100 --> it's an actual count of GCs and should be divided by dna length
                    */
                    if (typeof objectData.data.gc_content === 'number') {
                        gcContent = objectData.data.gc_content;
                        if (gcContent > 100) {
                            if (objectData.data.dna_size && objectData.data.dna_size !== 0) {
                                gcContent = gcContent / objectData.data.dna_size;
                            } else {
                                gcContent = 100;
                            }
                        } else if (gcContent > 1.0) {
                            gcContent = gcContent / 100;
                        }
                    } else {
                        gcContent = null;
                    }

                    console.log('gc content?', gcContent);

                    this.gcContent(gcContent);
                    this.featureCount(objectData.info[10]['Number features'] || objectData.info[10]['Number of CDS']);
                    this.loading(false);
                    // this.scientificName(objectData.data.scientific_name);
                    // const tax = objectData.data.taxonomy;
                    // if (tax) {
                    //     let taxList;
                    //     if (tax.indexOf(';') !== -1) {
                    //         taxList = tax.split(';');
                    //     } else {
                    //         taxList = tax.split(',');
                    //     }
                    // }
                });
        }
    }

    const styles = html.makeStyles({
        component: {
            css: {
                flex: '1 1 0px',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '10px'
            }
        },
        table: {
            css: {

            },
            inner: {
                td: {
                    padding: '4px'
                },
                th: {
                    fontWeight: 'bold',
                    color: 'rgba(200,200,200,1)',
                    textAlign: 'left',
                    padding: '4px'
                },
                'td:nth-child(1)': {
                    width: '10em'
                },
                'th:nth-child(1)': {
                    width: '10em'
                }

            }
        },
        sectionHeader: {
            css: {
                fontWeight: 'bold',
                fontSize: '110%',
                color: 'rgba(100,100,100,1)',
                marginTop: '8px'
            }
        }
    });

    function buildOverview() {
        return table({
            class: styles.classes.table
        }, [
            tr([
                th('Domain'),
                td({
                    dataBind: {
                        text: 'domain'
                    }
                })
            ]),
            tr([
                th('Scientific name'),
                td({
                    dataBind: {
                        text: 'scientificName'
                    }
                })
            ]),
            tr([
                th('DNA Length'),
                td({
                    dataBind: {
                        typedText: {
                            value: 'dnaSize',
                            type: '"number"',
                            format: '"0,0"'
                        }
                    }
                })
            ]),
            tr([
                th('# Contigs'),
                td({
                    dataBind: {
                        typedText: {
                            value: 'contigCount',
                            type: '"number"',
                            format: '"0,0"'
                        }
                    }
                })
            ]),
            tr([
                th('GC Content'),
                td({
                    dataBind: {
                        typedText: {
                            value: 'gcContent',
                            type: '"number"',
                            format: '"0.0%"'
                        }
                    }
                })
            ]),
            tr([
                th('# Features'),
                td({
                    dataBind: {
                        typedText: {
                            value: 'featureCount',
                            type: '"number"',
                            format: '"0,0"'
                        }
                    }
                })
            ])
        ]);
    }

    function template() {
        return div({
            class: styles.classes.component
        },
        gen.if('loading',
            build.loading('Loading overview data'),
            buildOverview()));
    }

    function component() {
        return {
            viewModelWithContext: ViewModel,
            template: template(),
            stylesheet: styles.sheet
        };
    }

    return reg.registerComponent(component);
});