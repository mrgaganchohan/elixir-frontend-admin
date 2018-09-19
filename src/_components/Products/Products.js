import React, { Component } from 'react';
import Content from '../Dashboard/Content';
import ProductForm from './ProductForm';
import Dashboard from '../Dashboard/Dashboard';
import '../../assets/css/custom.css';

class Products extends Component {
    render() {
        return(
            <div>
                <Dashboard />
                <Content page="PRODUCTS"/>
                <ProductForm />
            </div>
        )
    }
}

export default Products;