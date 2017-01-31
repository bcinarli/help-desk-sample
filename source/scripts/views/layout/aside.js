/**
 * @author Bilal Cinarli
 */

import React from 'react';

import Topics from '../../modules/topics';

class Aside extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className={"page-sidebar " + this.props.className}>
                <Topics />
            </aside>
        )
    }
}

export default Aside;