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
        this.productRows = "";

        this.categoriesArray = [];
    }

    componentWillMount() {
        // let data = this.props.getAllProducts();
        // console.log("getting all products data ", data);
        //console.log("mounted prod table", this.props.products)
        this.props.getAllCategories()
    }

    render() {
        if(this.props.allCategories) {
            console.log("all cats mate", this.props.allCategories)
        }

        if(this.props.products.length > 0 && !this.loaded && this.props.allCategories.length > 0) {
            console.log("WE ARE HITTING THE RENDER LOOP!")
            console.log('props for categories', this.props.allCategories)
            
            this.productRows = this.props.products.map((data, index) => {
                if(index === this.props.products.length-1) {
                    this.loaded = true;
                }

                let subCategoryNumber = data.product.subCategoryId;
                console.log("Sub category ID:", subCategoryNumber)
            
                let found = this.props.allCategories.filter(category => {
                  if(category.catId === subCategoryNumber) {
                      return category.name;
                  }
                })

                if(found[0] === undefined) {
                    return <ProductTableRow key={data.product.id} productInfo={data.product} category={"-"}/>;
                } else {
                    return <ProductTableRow key={data.product.id} productInfo={data.product} category={found[0].name} />;
                }
            })

            console.log("product rows data now is ", this.productRows);
        }
        
        return (
            <table className="table mt-3">
                <thead>
                    <tr className="d-flex">
                        <th className="p-2 text-left col-lg-4">Name</th>
                        <th className="p-2 text-left col-lg-2">Brand</th>
                        <th className="p-2 text-left col-lg-2">Category</th>
                        <th className="p-2 col-lg-1">Rating</th>
                        <th className="p-2 col-lg-3"></th>
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
    subCategory: PropTypes.string,
    allCategories: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    subCategory: state.subCategoryData.subCategory,
    allCategories: state.categoryData.allCategories,
})

export default connect(mapStateToProps, {getAllProducts, getAllCategories})(ProductsTable);