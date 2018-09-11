import React, { Component } from 'react';
import '../../assets/css/custom.css';

import {Link} from 'react-router-dom';


class DashOptions extends Component {
    render() {
        return(
            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
              <div class="container">
              <ul className="nav nav-pills nav-fill mb-4">
                    <li className="nav-item">
                        <Link className="nav-link active radius-item" href="#" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link radius-item" href="#" to="/">Vendors</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link radius-item" href="#" to="/">Category</Link>
                    </li>
                </ul>
              </div>
          </main>
        )
    }
}

export default DashOptions;