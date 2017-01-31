/**
 * @author Bilal Cinarli
 */

import React from 'react';
import {Link} from 'react-router';

import {getTopics} from './fetch';

import {toggleMenu} from '../../system/actions/ui';

class Topics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topics: []
        }
    }

    componentDidMount() {
        this.listTopics();
    }

    listTopics() {
        getTopics().then(topics => {
            this.setState({topics});
        });
    }

    toggle() {
        toggleMenu();
    }

    render() {
        return (
            <nav className="topic-list">
                <h2 className="topic-list-title" onClick={this.toggle}>Help Topics</h2>
                {
                    this.state.topics.map(topic => {
                        return (
                            <Link key={topic.slug} to={topic.slug} className="navigation-item topic-list-item" activeClassName="is-current">
                                {topic.name}
                            </Link>
                        )
                    })
                }
            </nav>
        )
    }
}

export default Topics;