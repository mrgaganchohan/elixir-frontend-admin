import React, { Component } from 'react';
import Content from '../Dashboard/Content';
import ProductForm from './ProductForm';
import Dashboard from '../Dashboard/Dashboard';
import '../../assets/css/custom.css';

import { getAllProducts } from '../../actions/productActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Products extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAllProducts();
    }
    
    componentDidMount() {
        this.props.getAllProducts();
    }

    render() {

        if(this.props.products !== undefined) {
            //console.log("here i am logging all products array", this.props.products)
        }
        
        return(
            <div>
                <Dashboard />
                <Content page="PRODUCTS"/>
                <ProductForm />
            </div>
        )
    }
}

Products.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    products: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.productData.allProducts
})

export default connect(mapStateToProps, {getAllProducts})(Products);