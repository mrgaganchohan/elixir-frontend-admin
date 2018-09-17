import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAdminInfo } from '../../actions/adminActions';

import '../../assets/css/custom.css';


class Settings extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props.adminDetails);
    }

    handleChangeName(e){
        //implement handle change
    }

    handleChangeDesignation(e) {
        //implement handle change
    }
    
    handleChangeOffice(e) {
        //implement handle change
    }

    submitChangeDetails() {
        //implement submit details change 
    }


    render() {
        let adminData = {};

        if(this.props.adminDetails) {
            adminData = this.props.adminDetails;
        }

        return (
            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
               <h1 className="text-left mt-2"><span className="fa fa-cog pr-2 big-icon-color"></span>Profile Settings</h1>
               <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-group">
                               <label className="float-left mb-0">Name</label>
                               <input type="text" className="form-control" id="inputPassword2" disabled={true} value={adminData.name}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Email</label>
                                    <input type="text" className="form-control" id="inputPassword2" value={adminData.email}/>
                                    <small id="emailHelp" className="mb-2 form-text text-muted float-left">You can't change your email</small>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Designation</label>
                                    <input type="text" className="form-control" id="inputPassword2" value={adminData.designation}/>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Office</label>
                                    <input type="text" className="form-control" id="inputPassword2" value={adminData.office}/>
                                </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <button className="btn btn-primary cog-radius float-right ml-3">Modify Details</button>
                            <button className="btn btn-light cog-radius float-right">Back to Dashboard</button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

Settings.propTypes = {
    getAdminInfo: PropTypes.func.isRequired,
    adminDetails: PropTypes.object,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    adminDetails: state.adminData.adminDetails,
    isAuthenticated: state.adminData.isAuthenticated
})

export default connect(mapStateToProps, {getAdminInfo})(Settings);