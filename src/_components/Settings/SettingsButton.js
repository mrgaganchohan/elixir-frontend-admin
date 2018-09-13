import React from 'react';
import {Link} from 'react-router-dom';

const SettingsButton = () => {
    return (
        <div className="fixed-bottom mb-3 ml-3">
            <Link className="float-left btn btn-outline-light cog-radius" to="/settings"><span className="fa fa-cog pr-2"></span> Settings</Link>
        </div>
    )
}

export default SettingsButton;