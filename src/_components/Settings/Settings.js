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
            disabledModify: true,
            formValidity: {
                nameValid: true,
                desValid: true,
                mobValid: true,
                officeValid: true
            },
            formValid: false,
            formErrors: {
                nameInput: "",
                desInput: "",
                mobInput: "",
                officeInput: ""
            }
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
       e.preventDefault();
       console.log(e.target.value)
       let pattern = new RegExp("^[a-zA-Z ]*$");
       let isValid = pattern.test(e.target.value);
       let emptyString;

       if(e.target.value === "" || e.target.value === " ") {
            emptyString = true;
       }
       else {
           emptyString = false;
       }
       console.log("emptyString = ", emptyString)

       if(isValid && !emptyString) {
           this.setState({
               formValidity: {
                   ...this.state.formValidity,
                   nameValid: true
               },
               formErrors: {
                   ...this.state.formErrors,
                   nameInput: ""
               }
           }, () => {
            this.checkValidity();
           })

       }
       else {
            this.setState({
                formValidity: {
                    ...this.state.formValidity,
                    nameValid: false
                },
                formValid: false,
                formErrors: {
                    ...this.state.formErrors,
                    nameInput: "invalid-input"
                }
            }, () => {
                this.checkValidity();
            });
       }

       this.setState({
            adminData: {
                ...this.state.adminData,
                name: e.target.value
            }
       })
      
    }

    handleChangeNumber(e){
        //implement handle change
        e.preventDefault();
        console.log(e.target.value)
        let pattern = new RegExp("^[+]?[0-9]{8,15}$");
        let isValid = pattern.test(e.target.value);
        let emptyString;
 
        if(e.target.value === "" || e.target.value === " ") {
             emptyString = true;
        }
        else {
            emptyString = false;
        }
 
        if(isValid && !emptyString) {
            this.setState({
                formValidity: {
                    ...this.state.formValidity,
                    mobValid: true
                },
                formErrors: {
                    ...this.state.formErrors,
                    mobInput: ""
                }
            }, () => {
             this.checkValidity();
            })
 
        }
        else {
             this.setState({
                formValidity: {
                    ...this.state.formValidity,
                    mobValid: false
                },
                formValid: false,
                formErrors: {
                     ...this.state.formErrors,
                     mobInput: "invalid-input"
                 }
             }, () => {
                 this.checkValidity();
             });
        }

        this.setState({
            adminData: {
                ...this.state.adminData,
                contactNum: e.target.value
            }
       })
    }

    handleChangeDesignation(e) {
        //implement handle change

        e.preventDefault();
        console.log(e.target.value)
        let pattern = new RegExp("^[a-zA-Z ]*$");
        let isValid = pattern.test(e.target.value);
        let emptyString;
 
        if(e.target.value === "" || e.target.value === " ") {
             emptyString = true;
        }
        else {
            emptyString = false;
        }
 
        if(isValid && !emptyString) {
            this.setState({
                formValidity: {
                    ...this.state.formValidity,
                    desValid: true
                },
                formErrors: {
                    ...this.state.formErrors,
                    desInput: ""
                }
            }, () => {
             this.checkValidity();
            })
        }
        else {
             this.setState({
                formValidity: {
                    ...this.state.formValidity,
                    desValid: false
                },
                formValid: false,
                formErrors: {
                     ...this.state.formErrors,
                     desInput: "invalid-input"
                 }
             }, () => {
                 this.checkValidity();
             });
        }

        this.setState({
            adminData: {
                ...this.state.adminData,
                designation: e.target.value
            }
       })
    }
    
    handleChangeOffice(e) {
        //implement handle change

        e.preventDefault();
        console.log(e.target.value)
        let pattern = new RegExp("^[a-zA-Z., ]*$");
        let isValid = pattern.test(e.target.value);
        let emptyString;
 
        if(e.target.value === "" || e.target.value === " ") {
             emptyString = true;
        }
        else {
            emptyString = false;
        }
 
        if(isValid && !emptyString) {
            this.setState({
                formValidity: {
                    ...this.state.formValidity,
                    officeValid: true
                },
                formErrors: {
                    ...this.state.formErrors,
                    officeInput: ""
                }
            }, () => {
             this.checkValidity();
            })
 
        }
        else {
             this.setState({
                formValidity: {
                    ...this.state.formValidity,
                    officeValid: false
                },
                formValid: false,
                formErrors: {
                     ...this.state.formErrors,
                     officeInput: "invalid-input"
                 }
             }, () => {
                 this.checkValidity();
             });
        }
        this.setState({
            adminData: {
                ...this.state.adminData,
                office: e.target.value
            }
       })
    }

    submitChangeDetails() {
        //implement submit details change 
        //remove whitespace at end of string
        let name = this.state.adminData.name.trim();
        let updatedData = {
            name: name,
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
            adminData : this.props.adminDetails,
            formValidity: {
                ...this.state.formValidity,
                nameValid: true,
                desValid: true,
                mobValid: true,
                officeValid: true
            },
            formErrors: {
                ...this.state.formErrors,
                nameInput: "",
                desInput: "",
                mobInput: "",
                officeInput: ""
            }
        })
    }

    checkValidity() {
        let isFormValid;
        for (let key in this.state.formValidity) {
            if (this.state.formValidity.hasOwnProperty(key)) {
                console.log(key + " -> " + this.state.formValidity[key]);
                if(this.state.formValidity[key]) {
                    isFormValid = true;
                }
                else {
                    isFormValid = false;
                    break;
                }
            }
        }

        if(isFormValid) {
            this.setState({
                formValid: true
            })
        }
        console.log("Checking validity... ", this.state.formValid);
    }

    render() {

        let nonEditable =   <div>
                                <button className="btn btn-warning cog-radius float-right ml-3" onClick={this.modifyDetails}>Modify Details</button>
                                <Link className="btn btn-light cog-radius float-right" to="/">Back to Dashboard</Link>
                            </div>

        let editable =  <div>
                            <button className="btn btn-success cog-radius float-right ml-3" disabled={!this.state.formValid} onClick={this.submitChangeDetails}>Confirm Changes</button>
                            <button className="btn btn-light cog-radius float-right" onClick={this.onCancel}>Cancel</button>
                        </div>

        let emailText = <small id="emailHelp" className="mb-2 form-text text-muted float-left">You can't change your email</small>;
                            
        let userActionButtons = this.state.disabledModify ? nonEditable : editable;

        let emailLabelText = this.state.disabledModify ? null : emailText;

        let nameError =  !this.state.formValidity.nameValid ? 
                            <small id="emailHelp" className="mb-0 mt-0 form-text input-error-text float-left">
                            Invalid input
                            </small> :
                            null;

        let desError =  !this.state.formValidity.desValid ? 
                            <small id="emailHelp" className="mb-0 mt-0 form-text input-error-text float-left">
                            Invalid input
                            </small> :
                            null;

        let mobError =  !this.state.formValidity.mobValid ? 
                            <small id="emailHelp" className="mb-0 mt-0 form-text input-error-text float-left">
                            Invalid input
                            </small> :
                            null;

        let officeError =  !this.state.formValidity.officeValid ? 
                            <small id="emailHelp" className="mb-0 mt-0 form-text input-error-text float-left">
                            Invalid input
                            </small> :
                            null;

        return (
            <div>
                <Dashboard />
                <main className="col-sm-9 offset-sm-3 col-md-9 offset-md-2 pt-3 content-margin">
               <h1 className="text-left mt-2"><span className="fa fa-cog pr-2 big-icon-color"></span>Profile Settings</h1>
               <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-10 offset-lg-0 offset-md-1">
                            <div className="form-group">
                               <label className="float-left mb-0">Name</label>
                               <input type="text" className={`form-control ${this.state.formErrors.nameInput}`} disabled={this.state.disabledModify} 
                               value={this.state.adminData.name} onChange={this.handleChangeName}/>
                               {nameError}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-10 offset-lg-0 offset-md-1">
                                <div className="form-group">
                                    <label className="float-left mb-0">Email</label>
                                    <input type="text" className="form-control" disabled={true} value={this.state.adminData.email}/>
                                    {emailLabelText}
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-10 offset-lg-0 offset-md-1">
                                <div className="form-group">
                                    <label className="float-left mb-0">Designation</label>
                                    <input type="text" className={`form-control ${this.state.formErrors.desInput}`} disabled={this.state.disabledModify}
                                    value={this.state.adminData.designation} onChange={this.handleChangeDesignation}/>
                                    {desError}
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-10 offset-lg-0 offset-md-1">
                                <div className="form-group">
                                    <label className="float-left mb-0">Mobile</label>
                                    <input type="text" className={`form-control ${this.state.formErrors.mobInput}`} disabled={this.state.disabledModify}
                                    value={this.state.adminData.contactNum} onChange={this.handleChangeNumber}/>
                                    {mobError}
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-10 offset-lg-0 offset-md-1">
                                <div className="form-group">
                                    <label className="float-left mb-0">Office</label>
                                    <input type="text" className={`form-control ${this.state.formErrors.officeInput}`} id="inputPassword2" disabled={this.state.disabledModify}
                                    value={this.state.adminData.office} onChange={this.handleChangeOffice}/>
                                    {officeError}
                                </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-10 col-md-9 col-sm-10">
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