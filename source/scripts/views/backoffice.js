/**
 * @author Bilal Cinarli
 */

import React from 'react';

class BackOffice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="backoffice-info">
                <p>There are no active clients in help desk. When a client send you a message, it will automatically appear on this page.</p>
            </div>
        );
    }
}

export default BackOffice;
