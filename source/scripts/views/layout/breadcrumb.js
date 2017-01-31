/**
 * @author Bilal Cinarli
 */

import React from 'react';
import {Link} from 'react-router';

class Breadcrumb extends React.Component {
    render() {
        return (
            <div className="page-breadcrumb">
                <div className="container">
                    <Link onlyActiveOnIndex={true} to="/" className="navigation-item">Customer Service</Link>
                </div>
            </div>
        )
    }
}

export default Breadcrumb;