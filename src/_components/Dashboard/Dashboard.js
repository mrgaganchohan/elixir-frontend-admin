import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAdminInfo } from '../../actions/adminActions';
import '../../assets/bootstrap/css/bootstrap.min.css';
import '../../assets/css/custom.css';

import Navbar from "../Navbar/Navbar";
import UserProfile from '../UserProfile/UserProfile';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAdminInfo("andysek@test.com");
    }

  render() {
    console.log("ADMIN data will mount: ", this.props.adminDetails);
    console.log("IsAuthed ", this.props.isAuthenticated)
    let adminName = "";
    let sideBarData = {};

    if(this.props.adminDetails) {
        adminName = this.props.adminDetails.name;
        sideBarData = this.props.adminDetails;
    }

    return (
        <div className="container-fluid padding-0 h-100">
            <Navbar adminName={adminName}/>
            <div className="row">
                <UserProfile sbData={sideBarData}/>
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
