/**
 * @author Bilal Cinarli
 */

'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import RedBox from 'redbox-react';

import {store} from './system/store';
import RootContainer from './containers/root';

import '../styles/styles.scss';

const ROOT_NODE = document.getElementById('help-desk');

let render = () => {
    ReactDOM.render(
        <AppContainer errorReporter={RedBox}>
            <RootContainer store={store} />
        </AppContainer>,
        ROOT_NODE
    );
};

if(__DEV__) {
    if(module.hot) {
        module.hot.accept('./containers/app', () =>
            setImmediate(() => {
                ReactDOM.unmountComponentAtNode(ROOT_NODE);
                render();
            })
        )
    }
}

render();