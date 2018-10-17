import React, { Component } from 'react';
import Content from '../Dashboard/Content';
import ProductForm from './ProductForm';
import Dashboard from '../Dashboard/Dashboard';
import '../../assets/css/custom.css';

import { getAllProducts } from '../../actions/productActions';
import {getAllSubCategories} from '../../actions/subcategoryActions'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Products extends Component {

    constructor(props) {
        super(props);
        console.log("all subcats from products component 123123123123123123123",this.props.allSubCategories)
    }

    componentWillMount() {
        this.props.getAllProducts();
        this.props.getAllSubCategories();
    }
    
    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {

        let productForm = null;
        if(this.props.allSubCategories.length > 0) {
            productForm = <ProductForm categoriesData={this.props.allSubCategories}/>;
        }
        
        return(
            <div>
                <Dashboard />
                <Content page="PRODUCTS"/>
               {productForm}
            </div>
        )
    }
}

Products.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    getAllSubCategories: PropTypes.func.isRequired,
    products: PropTypes.array,
    allSubCategories: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    allSubCategories: state.subCategoryData.allSubCategories
})

export default connect(mapStateToProps, {getAllProducts, getAllSubCategories})(Products);