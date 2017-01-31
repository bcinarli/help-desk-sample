/**
 * @author Bilal Cinarli
 */

import React from 'react';

import Logo from '../../components/logo';

class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="page-header">
                <div className="container">
                    <span className="page-logo">
                        <Logo width="100%" height="100%" />
                    </span>
                </div>
            </header>
        )
    }
}

export default Header;