import React, {Component} from 'react';

import NavLogo from '../../assets/images/grizz-nav.png';

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
                            <p className="nav-link mb-0">Hello, Andy</p>
                        </li>
                        <li class="nav-item">
                            <button className="btn btn-outline-primary">Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
      }
}


export default Navbar;