import React, { Component } from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import GrizzLogo from '../../assets/images/grizz-logo.png';
import '../../assets/css/custom.css';

class Login extends Component {

    constructor(props) {
        super(props);
    }

  render() {
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
                <label for="exampleInputEmail1" className="float-left">Email address</label>
                <input type="email" className="form-control login-form-radius" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="user@example.com" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1" className="float-left">Password</label>
                <input type="password" className="form-control login-form-radius" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary login-form-radius login-btn">Login</button>
            </form>
      </div>
     </div>
    );
  }
}

export default Login;
