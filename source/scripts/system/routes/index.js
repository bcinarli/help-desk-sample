/**
 * @author Bilal Cinarli
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../../containers/app';
import BackOffice from '../../containers/backoffice';

import * as Views from '../../views';

const routes = (
    <Route component={App}>
        <IndexRoute component={Views.Home} />
        <Route path="/" component={Views.Home} />
        <Route path="/topic/:page" component={Views.Page} />
    </Route>
);

const backOffice = (
    <Route path="/backoffice" component={BackOffice}>
        <IndexRoute component={Views.BackOffice} />
        <Route path="/" component={Views.BackOffice} />
    </Route>
);

const notFoundRoute = (
    <Route path="*" component={Views.NotFound} status="404" />
);

export {
    routes,
    backOffice,
    notFoundRoute
}