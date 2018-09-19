import React, { Component } from 'react';
import '../../assets/css/custom.css';
import {Link} from 'react-router-dom';

class DashOptions extends Component {

    constructor(props) {
        super(props);
        console.log("props dashoptions", this.props);
    }

    render() {
        var tiles = {};
        switch(this.props.activeTab) {
            case "PRODUCTS":
                console.log("hitting here in dashoptions")
                tiles = {
                    products: "active",
                    vendors: "",
                    category: ""
                }
                break;
            case "VENDORS":
                console.log("hitting here in dashoptions")
                tiles = {
                    products: "",
                    vendors: "active",
                    category: ""
                }
                break;
            case "CATEGORY":
                tiles = {
                    products: "",
                    vendors: "",
                    category: "active"
                }
                break;
            default:
                return;
        }

        return(
            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
              <div className="container">
              <ul className="nav nav-pills nav-fill mb-2">
                    <li className="nav-item mr-1">
                        <Link className={`nav-link ${tiles.products} radius-item dash-option-bord`} href="#" to="/products">Products</Link>
                    </li>
                    <li className="nav-item mr-1">
                        <Link className={`nav-link ${tiles.vendors} radius-item dash-option-bord`} href="#" to="/">Vendors</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${tiles.category} radius-item dash-option-bord`} href="#" to="/">Category</Link>
                    </li>
                </ul>
              </div>
          </main>
        )
    }
}

export default DashOptions;