import React, { Component } from 'react';
import { getAllProducts } from '../../actions/productActions';
import {getAllCategories} from '../../actions/categoryActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryTableRow from './CategoryTableRow';


class CategoryTable extends Component {

    constructor(props) {
        super(props);
        this.categoryData = [];
    }

    componentWillMount() {
        this.props.getAllCategories();
    }

    render() {

      if(this.props.catgoryRowData.length > 0) {
        this.categoryData = this.props.catgoryRowData.map((data) => {
          console.log("data data data", data)
          return <CategoryTableRow catData={data} />
        })  
      }

        return (
            <table className="table table-striped mt-3">
                <thead>
                    <tr className="d-flex">
                        <th className="p-2 text-left col-lg-4">Category Name</th>
                        <th className="p-2 text-left col-lg-2 text-center">Number of Products</th>
                        <th className="p-2 text-left col-lg-3">Status</th>
                        <th className="p-2 col-lg-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.categoryData}
                </tbody>
            </table>
        );
        
    }
}

CategoryTable.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    getAllCategories: PropTypes.func.isRequired,
    products: PropTypes.array,
    catgoryRowData: PropTypes.array,
    loaded: PropTypes.bool,
    subCategory: PropTypes.string,
    allCategories: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    subCategory: state.subCategoryData.subCategory,
    allCategories: state.categoryData.allCategories
})

export default connect(mapStateToProps, {getAllProducts, getAllCategories})(CategoryTable);