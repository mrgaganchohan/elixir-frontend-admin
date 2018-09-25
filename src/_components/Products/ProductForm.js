import React, { Component } from 'react';
import "../../assets/css/custom.css";
import {Link} from 'react-router-dom';
import ProductsTable from './ProductsTable';
import SettingsButton from '../Settings/SettingsButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getAllProducts} from '../../actions/productActions';

import store from '../../store/store';

class ProductForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: "",
            displayedItems: this.props.products
        }

        this.handleSearch = this.handleSearch.bind(this);
        //console.log("Store status", store.getState())
    }

    componentWillMount() {
        //this.props.getAllProducts();
    }

    handleSearch(e) {
        /[A-Z]/g
        // let newlyDisplayed = this.props.products.filter(products => products.product.name.includes(e.target.value));
        let newlyDisplayed = this.props.products.filter(products => products.product.name.toLowerCase().indexOf(e.target.value) !== -1);
        
        this.setState({
            displayedItems: newlyDisplayed
        })
    }

    render() {
        return(
            <div>
                <SettingsButton />
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                <h3 className="text-left"><span className="fa fa-search pr-2 big-icon-color"></span>Find a Product</h3>
                <div className="row">
                    <div className="col-lg-3">
                        <input type="text" className="form-control" id="inputPassword2" onChange={this.handleSearch} placeholder="Search by Product Name" />
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
                <ProductsTable tableRows={this.state.displayedItems}/>
                </main>
            </div>
        )
    }
}

ProductForm.propTypes = {
    getProduct: PropTypes.func.isRequired,
    products: PropTypes.array,
    product: PropTypes.object
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    product: state.productData.product
})

export default connect(mapStateToProps, {getAllProducts})(ProductForm);