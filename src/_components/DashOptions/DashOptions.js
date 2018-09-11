import React, { Component } from 'react';
import '../../assets/css/custom.css';


class DashOptions extends Component {
    render() {
        return(
            <div className="container">
                <ul class="nav nav-pills nav-fill mb-4">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Vendors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Category</a>
                    </li>
                </ul>
          </div>
        )
    }
}

export default DashOptions;