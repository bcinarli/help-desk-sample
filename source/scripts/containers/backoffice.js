/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {addChatScripts} from '../modules/live-chat/backoffice';

import Header from '../views/layout/header';

class Backoffice extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        addChatScripts();
    }

    render() {
        return (
            <div id="wrapper" className="page-wrapper page-backoffice">
                <Header />

                <div id="content" className="page-content">
                    <div id="main" className="page-main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const MapStatesToProps = (store) => ({});

export default connect(MapStatesToProps)(Backoffice);