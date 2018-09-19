import React, { Component } from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAdminInfo } from '../../actions/adminActions';

import Navbar from "../Navbar/Navbar";
import UserProfile from '../UserProfile/UserProfile';

class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.adminName = "";
        this.sideBarData = {};
    }

    componentDidMount() {
        this.props.getAdminInfo("andysek@test.com");
        //console.log("will Mount dash", this.props.adminDetails);
        if(this.props.adminDetails) {
            this.adminName = this.props.adminDetails.name;
            //this.sideBarData = this.props.adminDetails;
        }
    }

  render() {

    if(this.props.adminDetails) {
        // console.log(store.getState())
        // console.log("details",this.props.adminDetails);
        this.sideBarData = this.props.adminDetails;
        this.adminName = this.props.adminDetails.name;
    }

    return (
        <div className="container-fluid padding-0 h-100">
                <Navbar adminName={this.adminName}/>
            <div className="row">
                <UserProfile sbData={this.sideBarData}/>
            </div>
     </div>
    );
  }
}

Dashboard.propTypes = {
    getAdminInfo: PropTypes.func.isRequired,
    adminDetails: PropTypes.object,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    adminDetails: state.adminData.adminDetails,
    isAuthenticated: state.adminData.isAuthenticated
})

export default connect(mapStateToProps, {getAdminInfo})(Dashboard);
