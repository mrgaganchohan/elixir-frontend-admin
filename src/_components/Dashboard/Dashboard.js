import React, { Component } from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAdminInfo } from '../../actions/adminActions';
import {getAllProducts} from '../../actions/productActions';

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
        this.props.getAllProducts();
        //console.log("will Mount dash", this.props.adminDetails);
        console.log("DASHBOARD authenticatd = ", this.props.isAuthenticated)
        if(this.props.adminDetails) {
            this.adminName = this.props.adminDetails.name;
            //this.sideBarData = this.props.adminDetails;
        }

        console.log("HEREHERHE", this.props.products);
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
    getAllProducts: PropTypes.func.isRequired,
    getAdminInfo: PropTypes.func.isRequired,
    adminDetails: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    products: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    adminDetails: state.adminData.adminDetails,
    isAuthenticated: state.adminData.isAuthenticated
})

export default connect(mapStateToProps, {getAdminInfo, getAllProducts})(Dashboard);
