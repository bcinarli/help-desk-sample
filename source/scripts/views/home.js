/**
 * @author Bilal Cinarli
 */

import React from 'react';

import ThePage from '../modules/page';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThePage slug="home" />
        )
    }
}

export default Home;