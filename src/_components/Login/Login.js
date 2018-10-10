import React, { Component } from 'react';
import '../../assets/css/custom.css';
import '../../assets/bootstrap/css/bootstrap.min.css';
import GrizzLogo from '../../assets/images/grizz-logo.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAdminInfo, authenticateUser } from '../../actions/adminActions';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillMount() {
        //auto login user for development
        //this.props.authenticateUser();
    }

    handleLogin() {
        this.props.authenticateUser();
        //test
    }

  render() {

    if(this.props.isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
     <div className="container-fluid">
        <div className="container">
            <div className="col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1">
                <img className="img-fluid" src={GrizzLogo} alt=""/>
            </div>
            <div className="admin-login-text">
                <h3 className="admin-header-text"><span className="admin-bold">Admin</span> Portal</h3>
                <hr/>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center container">
            <form>
                <div className="form-group">
                    <label className="float-left">Email address</label>
                    <input type="email" className="form-control login-form-radius" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="user@example.com" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label className="float-left">Password</label>
                    <input type="password" className="form-control login-form-radius" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button className="btn btn-primary login-form-radius login-btn" onClick={this.handleLogin}>Login</button>
            </form>
      </div>
     </div>
    );
  }
}

Login.propTypes = {
    getAdminInfo: PropTypes.func.isRequired,
    authenticateUser: PropTypes.func.isRequired,
    adminDetails: PropTypes.object,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    adminDetails: state.adminData.adminDetails,
    isAuthenticated: state.adminData.isAuthenticated
})

export default connect(mapStateToProps, {getAdminInfo, authenticateUser})(Login);
