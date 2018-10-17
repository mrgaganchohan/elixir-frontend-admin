import React, {Component} from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {logoutUser} from '../../actions/adminActions';
import NavLogo from '../../assets/images/grizz-nav.png';
import {Link} from 'react-router-dom';
import Modal from 'react-awesome-modal';


class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisibility: false
        }
    }

    openLogoutModal = () => {
        this.setState({ modalVisibility: true })
    }

    closeLogoutModal = () => {
        this.setState({ modalVisibility: false })
    }

    handleLogout = () => {
        this.closeLogoutModal();

        setTimeout(() => {
            this.props.logoutUser();
        }, 300)
    }

    render() {
        return (
           <div>
               <Modal visible={this.state.modalVisibility} width="450" height="180" effect="fadeInDown">
                <div className="container">
                    <div className="row">
                        <div className="col text-left" >
                            <h2 className="text-left mb-0 modalHeader">
                            <span className="fa fa-power-off big-icon-color pr-2"></span>
                            Logout</h2>
                            <hr className="mt-2 mb-3" />
                        </div>
                        <div className="container-fluid">
                          <h5>Are you sure you want to logout?</h5>
                        </div>
                    </div>
                    <div className="modalOptions">
                        <button onClick={this.closeLogoutModal} className="btn btn-danger mr-2 cog-radius">No thanks</button>
                        <button onClick={this.handleLogout} 
                        className="btn btn-success cog-radius">
                          Yes, I'm sure
                        </button>
                    </div>
                </div>
              </Modal>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-bg-custom">
                <Link className="navbar-brand" href="" to="/">
                    <img src={NavLogo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    <span className="nav-logo-text"><strong>Grizzly</strong> Store | <strong>Admin</strong> Portal</span>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item active pr-4">
                            <p className="nav-link mb-0">Hello, <span className="pl-1">{this.props.adminName}</span></p>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-primary login-form-radius" onClick={this.openLogoutModal}>
                                <span className="fa fa-power-off pr-2"></span>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
           </div>
        );
      }
}


Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    adminDetails: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    authError: PropTypes.bool
}

const mapStateToProps = state => ({
    adminDetails: state.adminData.adminDetails,
    isAuthenticated: state.adminData.isAuthenticated,
    authError: state.adminData.authError
})

export default connect(mapStateToProps, {logoutUser})(Navbar);
