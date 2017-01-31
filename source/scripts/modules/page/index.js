/**
 * @author Bilal Cinarli
 */

import React from 'react';

import {updatePageTitle} from '../../system/actions/ui';

import {getPage} from './fetch';

import Section from '../section';
import Error from './error';

class ThePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page:  [],
            error: false
        }
    }

    componentDidMount() {
        this.pageContent();
    }

    componentWillReceiveProps(newProps) {
        if(newProps.slug !== this.props.slug) {
            this.pageContent(newProps.slug);
        }
    }

    pageContent(slug) {
        getPage(slug || this.props.slug).then(page => {
            updatePageTitle(page[0].title);
            this.setState({page})
        }).catch(response => {
            this.setState({
                error: {
                    status:     response.status,
                    statusText: response.statusText,
                    original:   response.originalResponse
                }
            });
        });
    }

    render() {
        return (
            <div className="page-main-content">
                {
                    this.state.page.map(_page => {
                        return (
                            <div key={Math.random()} className="page-content-part">
                                <h1 className="page-title">{_page.title}</h1>

                                {
                                    _page.sections.map(section => {
                                        let title   = section.title || '',
                                            content = section.content || '';

                                        return (
                                            <Section key={Math.random()} title={title} content={content} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                {
                    this.state.error
                        ? <Error error={this.state.error} />
                        : ''
                }
            </div>
        )
    }
}

export default ThePage;