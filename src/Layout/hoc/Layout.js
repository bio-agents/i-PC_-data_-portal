import React, { Component } from 'react';
import Agentbar from '../../components/Navigation/Agentbar/Agentbar';

class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <Agentbar />
                <div className="site">
                    {this.props.children}
                </div>
            </ React.Fragment>
        )
    }
}

export default Layout;
