/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';

import ThePage from '../modules/page';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThePage slug={this.props.params.page} />
        )
    }
}

export default Page;