import React, { Component } from 'react';
import ProductTableRow from './ProductTableRow';
import { getAllProducts } from '../../actions/productActions';
import {getAllCategories} from '../../actions/categoryActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class ProductsTable extends Component {

    constructor(props) {
        super(props);

        this.loaded = false;
        this.productRows = null;

        this.categoriesArray = [];
    }

    componentWillMount() {
        this.props.getAllCategories()
        //console.log("did load new table rows ", this.props.tableRows)
    }

    shouldComponentUpdate() {
        this.loaded = true;
        return true;
    }

    render() {
        if(this.props.allCategories) {
            //console.log("all cats mate", this.props.allCategories)
            //console.log("table rows ", this.props.tableRows)
            //console.log("loaded =", this.loaded)
        }

        if(this.props.loaded) {
            this.productRows = this.props.tableRows.map(data => {
                return <ProductTableRow key={data.id} productInfo={data} category={data.category[0].name}/>;
            })
        }
        
        return (
            <table className="table table-striped mt-3 products-table">
                <thead>
                    <tr className="d-flex">
                        <th className="p-2 text-left col-lg-5">Name</th>
                        <th className="p-2 text-left col-lg-2">Brand</th>
                        <th className="p-2 text-left col-lg-2">Category</th>
                        <th className="p-2 col-lg-1">Rating</th>
                        <th className="p-2 col-lg-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.productRows}
                </tbody>
            </table>
        );   
    }
}

ProductsTable.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    getAllCategories: PropTypes.func.isRequired,
    products: PropTypes.array,
    tableRows: PropTypes.array,
    loaded: PropTypes.bool,
    subCategory: PropTypes.object,
    allCategories: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    subCategory: state.subCategoryData.subCategory,
    allCategories: state.categoryData.allSubCategories
})

export default connect(mapStateToProps, {getAllProducts, getAllCategories})(ProductsTable);