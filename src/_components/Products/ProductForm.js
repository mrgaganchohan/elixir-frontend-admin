import React, { Component } from 'react';
import "../../assets/css/custom.css";
import {Link} from 'react-router-dom';
import ProductsTable from './ProductsTable';
import SettingsButton from '../Settings/SettingsButton';

class ProductForm extends Component {
    render() {
        return(
            <div>
                <SettingsButton />
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                <h3 className="text-left"><span className="fa fa-search pr-2 big-icon-color"></span>Find a Product</h3>
                <div className="row">
                    <div className="col-lg-3">
                        <input type="text" className="form-control" id="inputPassword2" placeholder="Search by Product Name" />
                    </div>
                    <div className="col-lg-2">
                         <select className="form-control">
                            <option value="" defaultValue="">Filter by Category</option>
                            <option>Latops</option>
                            <option>Latops</option>
                            <option>Latops</option>
                            <option>Latops</option>
                         </select>
                    </div>
                    <div className="col-lg-2">
                         <select className="form-control">
                            <option value="" defaultValue="">Sort By</option>
                            <option>Name</option>
                            <option>Brand</option>
                            <option>Category</option>
                            <option>Rating</option>
                         </select>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <Link className="btn btn-primary cog-radius btn-block" to="/product/add">
                            <span className="fa fa-plus pr-2"></span>
                        Add Product</Link>
                    </div>
                   
                </div>
                <ProductsTable />
                </main>
            </div>
        )
    }
}

export default ProductForm;