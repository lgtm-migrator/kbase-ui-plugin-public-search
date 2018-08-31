define([
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_lib/html'
], function (
    reg,
    gen,
    html
) {
    'use strict';

    const t = html.tag,
        div = t('div');

    class ViewModel {
        constructor(params) {
            const {node, leaves, first, last, originRef, componentName} = params;
            this.node = node;
            this.leaves = leaves;
            this.first = first;
            this.last = last;
            this.originRef = originRef;

            this.componentName = componentName;

            this.showLength = false;

            if (node.nodes) {
                this.leaf = false;
                this.tree = true;
            } else {
                this.leaf = this.leaves[this.node.label];
                this.tree = false;
            }
        }
    }

    function buildTree() {
        return div({
            style: {
                display: 'flex',
                flexDirection: 'row'
            },
            dataBind: {
                style: {
                    'border-color': 'tree ? "gray" : "green"'
                }
            }
        }, [
            // the main display for this node
            gen.if('tree',
                div({
                    style: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        // width: '20px'
                    }
                }, [
                    div({
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'stretch'
                        }
                    }, [
                        div({
                            style: {
                                flex: '1 1 0px'
                            },
                            dataBind: {
                                style: {
                                    'border-left': 'last ? "1px gray solid" : null'
                                }
                            }
                        }),
                        div({
                            style: {
                                flex: '1 1 0px'
                            },
                            dataBind: {
                                style: {
                                    'border-left': 'first ? "1px gray solid" : null'
                                }
                            }
                        })
                    ]),
                    div({
                        style: {
                            flex: '1 1 0px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyItem: 'center',
                            justifyContent: 'center'
                        },
                        dataBind: {
                            style: {
                                width: 'String(1000 * node.length) + "px"'
                            }
                        }
                    }, div({
                        style: {
                            backgroundColor: 'gray',
                            height: '1px'
                        }
                    }))
                ]),
                div({
                    style: {
                        flex: '1 1 0px',
                        display: 'flex',
                        flexDirection: 'row'
                    }
                }, [
                    // a row for the original label and length
                    div({
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'stretch'
                        }
                    }, [
                        div({
                            style: {
                                flex: '1 1 0px'
                            },
                            dataBind: {
                                style: {
                                    'border-left': 'last ? "1px gray solid" : null'
                                }
                            }
                        }),
                        div({
                            style: {
                                flex: '1 1 0px'
                            },
                            dataBind: {
                                style: {
                                    'border-left': 'first ? "1px gray solid" : null'
                                }
                            }
                        })
                    ]),
                    div({
                        // class: 'fa fa-circle'
                        style: {
                            width: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyItem: 'center',
                            justifyContent: 'center',
                            borderRight: '3px green solid',
                            margin: '3px 0'
                        },
                        dataBind: {
                            style: {
                                width: 'String(1000 * node.length) + "px"'
                            }
                        }
                    }, div({
                        style: {
                            backgroundColor: 'gray',
                            height: '1px'
                        }
                    })),
                    // this element stretches to the right
                    // so that the scientific names form a column
                    // to the right.
                    div({
                        style: {
                            flex: '1 1 0px',
                            borderBottom: '1px silver dashed'
                        }
                    }),
                    // and a row for the nice label.
                    div({
                        style: {
                            width: '20em',
                            overflowX: 'auto',
                            whiteSpace: 'nowrap',
                            marginTop: '4px'
                        },
                        dataBind: {
                            text: 'leaf.scientificName',
                            style: {
                                'font-weight': 'leaf.nodeID === "user1" ? "bold" : "normal"'
                            }
                        }
                    })
                ])),
            // children, if this is a tree.
            gen.if('tree',
                div({
                    style: {
                        flex: '1 1 0px'
                    },
                    dataBind: {
                        foreach: 'node.nodes'
                    }
                }, div({
                    dataBind: {
                        component: {
                            name: '$component.componentName',
                            params: {
                                componentName: '$component.componentName',
                                node: '$data',
                                leaves: '$component.leaves',
                                first: '$index() === 0',
                                last: '$index() === $parent.node.nodes.length - 1',
                                originRef: '$component.originRef'
                            }
                        }
                    }
                })))
        ]);
    }

    function template() {
        return div({
            style: {
                flex: '1 1 0px'
            }
        }, [
            buildTree()
        ]);
    }

    function component() {
        return {
            viewModel: ViewModel,
            template: template()
        };
    }

    return reg.registerComponent(component);
});