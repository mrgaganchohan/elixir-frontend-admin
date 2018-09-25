import React, { Component } from 'react';
import ProductTableRow from './ProductTableRow';
import { getAllProducts } from '../../actions/productActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ProductsTable extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // let data = this.props.getAllProducts();
        // console.log("getting all products data ", data);
        console.log("mounted prod table", this.props.allProducts)
    }

    render() {
        let productRows;

        if(this.props.allProducts) {
            console.log("77777777 getting here")
            console.log(this.props.allProducts);
            productRows = this.props.allProducts.map((data) => {
                return <ProductTableRow key={data.product.id} productInfo={data.product}/>
            })
        }

        return(
            <table className="table table-striped mt-3">
                <thead>
                    <tr className="d-flex">
                        <th className="p-2 text-left col-lg-3">Name</th>
                        <th className="p-2 col-lg-2">Brand</th>
                        <th className="p-2 col-lg-2">Category</th>
                        <th className="p-2 col-lg-2">Rating</th>
                        <th className="p-2 col-lg-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
            </table>

        );
    }
}


ProductsTable.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    allProducts: PropTypes.array
}

const mapStateToProps = state => ({
    allProducts: state.productData.allProducts
})

export default connect(mapStateToProps, {getAllProducts})(ProductsTable);