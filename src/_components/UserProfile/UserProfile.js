import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/custom.css';

class UserProfile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let initials = ""; 

        if(this.props.sbData.name) {
            initials = this.props.sbData.name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
        }

        return (
            <nav className="col-sm-4 col-md-3 col-lg-2 hidden-xs-down sidebar">
            <div className="row userside-container">
                <div className="col-12 text-center">
                    <div className="user-profile-avatar">
                        <span className="initials">{initials}</span>
                    </div>
                    <div className="mt-3">
                        <h4><strong>{this.props.sbData.name}</strong></h4>
                    </div>
                    <div className="mt-5">
                        <h6><strong>ID</strong></h6>
                        <h6>GRIZADMIN-{this.props.sbData.id}</h6>
                    </div>
                    <div className="mt-4">
                        <h6><strong>Designation</strong></h6>
                        <h6>{this.props.sbData.designation}</h6>
                    </div>
                    <div className="mt-4">
                        <h6><strong>Office</strong></h6>
                        <h6>{this.props.sbData.office}</h6>
                    </div>
                </div>
            </div>
            
          </nav>
        )
    }

}

export default UserProfile;