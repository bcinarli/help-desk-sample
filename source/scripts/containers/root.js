/**
 * @author Bilal Cinarli
 */

'use strict';

import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {routes, backOffice, notFoundRoute} from '../system/routes'

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
            {backOffice}
            {notFoundRoute}
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;