import React, {Component} from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';

import NavLogo from '../../assets/images/grizz-nav.png';
import '../../assets/css/custom.css';

class Navbar extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light nav-bg-custom">
                <div class="navbar-brand" href="">
                    <img src={NavLogo} width="30" height="30" class="d-inline-block align-top" alt="" />
                    <span className="nav-logo-text"><strong>Grizzly</strong> Store | <strong>Admin</strong> Portal</span>
                </div>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item active pr-4">
                            <p className="nav-link mb-0">Hello, <span className="pl-1">Helen</span></p>
                        </li>
                        <li class="nav-item">
                            <button className="btn btn-outline-primary login-form-radius">Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
      }
}


export default Navbar;