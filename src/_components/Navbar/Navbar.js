import React, {Component} from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';

import NavLogo from '../../assets/images/grizz-nav.png';
import '../../assets/css/custom.css';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light nav-bg-custom">
                <div className="navbar-brand" href="">
                    <img src={NavLogo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    <span className="nav-logo-text"><strong>Grizzly</strong> Store | <strong>Admin</strong> Portal</span>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item active pr-4">
                            <p className="nav-link mb-0">Hello, <span className="pl-1">{this.props.adminName}</span></p>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-primary login-form-radius"><span className="fa fa-power-off pr-2"></span>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
      }
}


export default Navbar;