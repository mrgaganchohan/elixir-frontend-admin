import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ErrorImg from '../../assets/images/error-404.png';
import SettingsButton from '../Settings/SettingsButton';

class PathNotFound extends Component {
    render() {
        return(
            <div>
               <SettingsButton />
               <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                    <div>
                        <img src={ErrorImg} alt=""/>
                            <h2 className="text-404">Oh no!</h2>
                            <h2 className="text-404">We can't find the page you're looking for.</h2>
                    </div>
                    <div className="mt-5">
                        <Link className="btn btn-primary cog-radius" to="/products"><span className="fa fa-home pr-2"></span> Back to Dashboard</Link>
                    </div>
                </main>
            </div>
        )
    }
}

export default PathNotFound;