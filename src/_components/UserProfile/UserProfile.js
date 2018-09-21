import React, {Component} from 'react';

class UserProfile extends Component {

    constructor(props) {
        super(props);

    }

    createInitials(name) {
        let finalName;
        let intitials;
        let inputName = this.props.sbData.name.trim().split(" ");
        let finalArray = inputName.filter(x => x !== "");

        finalName = finalArray.length > 1 ? 
                finalArray[0] + " " + finalArray[finalArray.length - 1] :  
                finalName = finalArray[0];

        intitials = finalName.split(/\s/).reduce((response,word)=> response+=word.slice(0,1).toUpperCase(),'')

        return intitials;
    }


    render() {
        let initials = ""; 

        if(this.props.sbData.name) {
            initials = this.createInitials(this.props.sbData.name);
        }

        return (
            <nav className="col-sm-4 col-md-3 col-lg-2 hidden-xs-down sidebar">
                <div className="row userside-container test1111">
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