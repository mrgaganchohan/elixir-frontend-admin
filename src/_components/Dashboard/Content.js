import React, { Component } from 'react';

import DashOptions from '../DashOptions/DashOptions';

//TODO: 
//Add props to change active tab relative to component rendered.

class Content extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <DashOptions activeTab={this.props.page}/>
        )
    }
}

export default Content;