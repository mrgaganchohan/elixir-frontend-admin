import React, { Component } from 'react';
import '../../assets/css/custom.css';
import '../../assets/bootstrap/css/bootstrap.min.css';
import GrizzLogo from '../../assets/images/grizz-logo.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAdminInfo, authenticateUser } from '../../actions/adminActions';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PASS = "admin";

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            userEmail: "",
            userPass: "",
            authed: false,
            hasFinished: true
        }
    }

    componentWillMount() {
        //auto login user for development
        // this.props.getAdminInfo("test@test.com")
        // this.props.authenticateUser();
    }

    handleLogin = () => {
        if(this.state.hasFinished) {

            this.setState({ hasFinished: false })
            
            this.props.getAdminInfo(this.state.userEmail);

            setTimeout(() => {
                if(Object.keys(this.props.adminDetails).length !== 0) {
                    if(this.state.userPass !== PASS){
                        toast.error("Invalid password. Please try again.", {
                            position: toast.POSITION.TOP_RIGHT,
                            className: 'toast-failed-griz'
                        });
                    }
                    else {
                        this.props.authenticateUser();
                        console.log("hiting succesfull login....")
                    }
                }
                console.log("admin data object test", this.props.adminDetails)
                if(Object.keys(this.props.adminDetails).length === 0 
                        && this.props.adminDetails.constructor === Object){
                    if(this.props.authError){
                        if(this.state.userPass !== PASS){
                            toast.error("Invalid email and password. Try again.", {
                                position: toast.POSITION.TOP_RIGHT,
                                className: 'toast-failed-griz'
                            });
                        }
                        else {
                            toast.error("Invalid email account.", {
                                position: toast.POSITION.TOP_RIGHT,
                                className: 'toast-failed-griz'
                            });
                        }
                    }
                    if(!this.props.authError) {
                        if(this.state.userPass !== PASS){
                            toast.error("Invalid email and password. Try again.", {
                                position: toast.POSITION.TOP_RIGHT,
                                className: 'toast-failed-griz'
                            });
                        }
                    }
                }
            }, 500)
            
            setTimeout(() => {
                this.setState({ hasFinished: true })
            }, 2000)
        }

    }

    handleEmailInput = (e) => {
        let email = e.target.value;

        this.setState({ userEmail: email })
        console.log("useremail", this.state.userEmail)
    }

    handleUserPass = (e) => {
        let pass = e.target.value;

        this.setState({ userPass: pass })

        console.log("userpass",this.state.userPass)
    }

  render() {

    if(this.props.isAuthenticated) {
        return <Redirect to="/" />
    }

    

    return (
     <div className="container-fluid">
     <ToastContainer hideProgressBar={true} autoClose={4000} />
        <div className="container">
            <div className="col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1 mt-5">
                <img className="img-fluid " src={GrizzLogo} alt="" height="400" width="600"/>
            </div>
            <div className="admin-login-text">
                <h3 className="admin-header-text"><span className="admin-bold">Admin</span> Portal</h3>
                <hr/>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center container">
            <form>
                <div className="form-group">
                    <label className="float-left">Email</label>
                    <input type="email" className="form-control login-form-radius" onChange={this.handleEmailInput} value={this.state.userEmail}
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="user@example.com" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label className="float-left">Password</label>
                    <input type="password" className="form-control login-form-radius" onChange={this.handleUserPass} value={this.state.userPass}
                    id="exampleInputPassword1" placeholder="Password" />
                </div>
            </form>
            
      </div>
      <button className="btn btn-primary login-form-radius login-btn" onClick={this.handleLogin}>Login</button>
     </div>
    );
  }
}

Login.propTypes = {
    getAdminInfo: PropTypes.func.isRequired,
    authenticateUser: PropTypes.func.isRequired,
    adminDetails: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    authError: PropTypes.bool
}

const mapStateToProps = state => ({
    adminDetails: state.adminData.adminDetails,
    isAuthenticated: state.adminData.isAuthenticated,
    authError: state.adminData.authError
})

export default connect(mapStateToProps, {getAdminInfo, authenticateUser})(Login);
