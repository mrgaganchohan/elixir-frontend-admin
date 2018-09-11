import React, { Component } from 'react';
import '../../assets/css/custom.css';


class DashOptions extends Component {
    render() {
        return(
            <div className="container">
                <ul className="nav nav-pills nav-fill mb-4">
                    <li className="nav-item">
                        <a className="nav-link active radius-item" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link radius-item" href="#">Vendors</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link radius-item" href="#">Category</a>
                    </li>
                </ul>
          </div>
        )
    }
}

export default DashOptions;