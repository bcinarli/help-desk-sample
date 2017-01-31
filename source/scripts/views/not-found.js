/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';

import Header from '../views/layout/header';
import Error from '../modules/page/error';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrapper" className="page-wrapper page-404">
                <Header />

                <div id="content" className="page-content">
                    <div className="container">
                        <div id="main" className="page-main">
                            <Error />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;