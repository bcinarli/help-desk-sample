/**
 * @author Bilal Cinarli
 */

import React from 'react';

class Error extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status:     404,
            statusText: ''
        }
    }

    componentDidMount() {
        this.setError(this.props.error);
    }

    setError(error) {
        if(error.status !== 404) {
            this.setState({
                status:           error.status,
                statusText:       error.statusText,
                originalResponse: error.originalResponse
            });
        }
    }

    render() {
        return (
            <div className="page-404">
                <h1 className="page-title">
                    {
                        this.state.status === 404
                            ? <span>Page Not Found <br />But Never Stop Trying</span>
                            : this.state.statusText
                    }
                </h1>
            </div>
        )
    }
}

export default Error;