/**
 * @author Bilal Cinarli
 */

import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title:   '',
            content: ''
        }
    }

    componentDidMount() {
        this.sectionContent();
    }

    sectionContent() {
        this.setState({
            title:   this.props.title,
            content: this.props.content
        });
    }

    render() {
        return (
            <div className="page-section">
                <h2 className="page-section-title">{this.state.title}</h2>
                <div className="page-section-content" dangerouslySetInnerHTML={{__html: this.state.content}} />
            </div>
        )
    }
}

export default Section;