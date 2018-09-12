import React, { Component } from 'react';

import Content from '../Dashboard/Content';
import ProductForm from './ProductForm';

class Products extends Component {
    render() {
        return(
            <div>
                <Content page="PRODUCTS"/>
                <ProductForm />
            </div>
        )
    }
}

export default Products;