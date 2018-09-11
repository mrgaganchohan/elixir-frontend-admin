import React, {Component} from 'react';
import '../../assets/css/custom.css';

class UserProfile extends Component {

    render() {
        return (
            <nav className="col-sm-4 col-md-3 col-lg-2 hidden-xs-down sidebar">
            <div className="row userside-container">
                <div className="col-12 text-center">
                    <div className="user-profile-avatar">
                        <span className="initials">HC</span>
                    </div>
                    <div className="mt-3">
                        <h4><strong>Helen Cho</strong></h4>
                    </div>
                    <div className="mt-5">
                        <h6><strong>ID</strong></h6>
                        <h6>GRIZADMIN-1</h6>
                    </div>
                    <div className="mt-4">
                        <h6><strong>Designation</strong></h6>
                        <h6>Senior Administrator</h6>
                    </div>
                    <div className="mt-4">
                        <h6><strong>Office</strong></h6>
                        <h6>Melbourne, Australia</h6>
                    </div>
                </div>
            </div>
          </nav>
        )
    }

}

export default UserProfile;