/**
 * @author Bilal Cinarli
 */

import React from 'react';
import {connect} from 'react-redux';

import {setTitle} from '../system/common/utils';

import {addChatScripts} from '../modules/live-chat/client';

import Breadcrumb from '../views/layout/breadcrumb';
import Header from '../views/layout/header';
import Aside from '../views/layout/aside';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggled: false
        }
    }

    componentDidMount() {
        setTitle('Customer Service');
        addChatScripts();
    }

    componentWillReceiveProps(newProps) {
        if(newProps.pageTitle !== this.props.pageTitle) {
            setTitle(newProps.pageTitle);
        }

        if(newProps.toggleMenu !== this.props.toggleMenu) {
            this.setState({
                isToggled: newProps.toggleMenu
            });
        }
    }

    render() {
        let isToggled = this.state.isToggled ? 'is-toggled' : '';

        return (
            <div id="wrapper" className="page-wrapper">
                <Header />

                <Breadcrumb />

                <div id="content" className="page-content">
                    <div className="container">
                        <Aside className={isToggled} />

                        <div id="main" className="page-main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStatesToProps = (store) => ({
    isLoading:  store.ui.isLoading,
    pageTitle:  store.ui.pageTitle,
    toggleMenu: store.ui.toggleMenu
});

export default connect(MapStatesToProps)(App);