import React, { Component } from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import GrizzLogo from '../../assets/images/grizz-logo.png';
import '../../assets/css/custom.css';

import Navbar from "../Navbar/Navbar";

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
     <div className="container-fluid padding-0">
       <Navbar />
     </div>
    );
  }
}

export default Dashboard;
