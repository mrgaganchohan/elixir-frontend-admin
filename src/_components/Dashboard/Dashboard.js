import React, { Component } from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import GrizzLogo from '../../assets/images/grizz-logo.png';
import '../../assets/css/custom.css';

import Navbar from "../Navbar/Navbar";
import UserProfile from '../UserProfile/UserProfile';
import DashOptions from '../DashOptions/DashOptions';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div className="container-fluid padding-0 h-100">
            <Navbar />

            <div className="row">
                <UserProfile />
            </div>
     </div>
    );
  }
}

export default Dashboard;
