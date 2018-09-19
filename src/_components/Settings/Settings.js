import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAdminInfo, updateAdminInfo } from '../../actions/adminActions';

import '../../assets/css/custom.css';
import Dashboard from '../Dashboard/Dashboard';


class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabledModify: true
        }
        
        //binding methods
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDesignation = this.handleChangeDesignation.bind(this);
        this.handleChangeOffice = this.handleChangeOffice.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.submitChangeDetails = this.submitChangeDetails.bind(this);
        this.modifyDetails = this.modifyDetails.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentWillMount() {
        if(this.props.adminDetails) {
            this.setState({ adminData: this.props.adminDetails})
        }
    }

    handleChangeName(e){
        //implement handle change
       this.setState({
            adminData: {
                ...this.state.adminData,
                name: e.target.value
            }
       })
    }

    handleChangeNumber(e){
        //implement handle change
       this.setState({
            adminData: {
                ...this.state.adminData,
                contactNum: e.target.value
            }
       })
    }

    handleChangeDesignation(e) {
        //implement handle change
        this.setState({
            adminData: {
                ...this.state.adminData,
                designation: e.target.value
            }
       })
    }
    
    handleChangeOffice(e) {
        //implement handle change
        this.setState({
            adminData: {
                ...this.state.adminData,
                office: e.target.value
            }
       })
    }

    submitChangeDetails() {
        //implement submit details change 
        console.log(this.props.adminDetails.email);
        let updatedData = {
            name: this.state.adminData.name,
            contactNum: this.state.adminData.contactNum,
            designation: this.state.adminData.designation,
            office: this.state.adminData.office
        }
        this.props.updateAdminInfo(this.props.adminDetails.email, updatedData);
        this.setState({
            disabledModify: true
        })  
    }

    modifyDetails() {
        if(this.state.disabledModify) {
            this.setState({ disabledModify: false })
        }
    }

    onCancel() {
        this.setState({
             disabledModify: true,
             adminData : this.props.adminDetails 
        })
    }

    render() {

        let nonEditable =   <div>
                                <button className="btn btn-warning cog-radius float-right ml-3" onClick={this.modifyDetails}>Modify Details</button>
                                <Link className="btn btn-light cog-radius float-right" to="/">Back to Dashboard</Link>
                            </div>

        let editable =  <div>
                            <button className="btn btn-success cog-radius float-right ml-3" onClick={this.submitChangeDetails}>Confirm Changes</button>
                            <button className="btn btn-light cog-radius float-right" onClick={this.onCancel}>Cancel</button>
                        </div>

        let emailText = <small id="emailHelp" className="mb-2 form-text text-muted float-left">You can't change your email</small>;
                            
        let userActionButtons = this.state.disabledModify ? nonEditable : editable;

        let emailLabelText = this.state.disabledModify ? null : emailText;

        

        return (
            <div>
                <Dashboard />
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
               <h1 className="text-left mt-2"><span className="fa fa-cog pr-2 big-icon-color"></span>Profile Settings</h1>
               <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-group">
                               <label className="float-left mb-0">Name</label>
                               <input type="text" className="form-control" disabled={this.state.disabledModify} 
                               value={this.state.adminData.name} onChange={this.handleChangeName}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Email</label>
                                    <input type="text" className="form-control" disabled={true} value={this.state.adminData.email}/>
                                    {emailLabelText}
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Designation</label>
                                    <input type="text" className="form-control" disabled={this.state.disabledModify}
                                    value={this.state.adminData.designation} onChange={this.handleChangeDesignation}/>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Mobile</label>
                                    <input type="text" className="form-control" disabled={this.state.disabledModify}
                                    value={this.state.adminData.contactNum} onChange={this.handleChangeNumber}/>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Office</label>
                                    <input type="text" className="form-control" id="inputPassword2" disabled={this.state.disabledModify}
                                    value={this.state.adminData.office} onChange={this.handleChangeOffice}/>
                                </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            {userActionButtons}
                        </div>
                    </div>
                </div>
            </main>
            </div>
        );
    }
}

Settings.propTypes = {
    getAdminInfo: PropTypes.func.isRequired,
    updateAdminInfo: PropTypes.func.isRequired,
    adminDetails: PropTypes.object,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    adminDetails: state.adminData.adminDetails,
    isAuthenticated: state.adminData.isAuthenticated
})

export default connect(mapStateToProps, {getAdminInfo, updateAdminInfo})(Settings);