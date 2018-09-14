import React, { Component } from 'react';

import '../../assets/css/custom.css';


class Settings extends Component {
    render() {
        return (
            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
               <h1 className="text-left mt-2"><span className="fa fa-cog pr-2 big-icon-color"></span>Profile Settings</h1>
               <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="form-group">
                                <label className="float-left mb-0">Name</label>
                                <input type="text" className="form-control" id="inputPassword2" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Email</label>
                                    <input type="text" className="form-control" id="inputPassword2" />
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Designation</label>
                                    <input type="text" className="form-control" id="inputPassword2" />
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="float-left mb-0">Office</label>
                                    <input type="text" className="form-control" id="inputPassword2" />
                                </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <button className="btn btn-primary cog-radius float-right ml-3">Modify Details</button>
                            <button className="btn btn-light cog-radius float-right">Back to Dashboard</button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Settings;