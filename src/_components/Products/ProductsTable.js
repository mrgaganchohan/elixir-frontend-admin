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
        console.log("did load new table rows ", this.props.tableRows)
    }

    shouldComponentUpdate() {
        this.loaded = false;
        return true;
    }

    render() {
        if(this.props.allCategories) {
            //console.log("all cats mate", this.props.allCategories)
            console.log("table rows ", this.props.tableRows)
            console.log("loaded =", this.loaded)
        }

        if(this.props.tableRows.length > 0 && !this.loaded && this.props.allCategories.length > 0) {
            console.log("WE ARE HITTING THE RENDER LOOP!")
            console.log('props for categories', this.props.allCategories)
            
            this.productRows = this.props.tableRows.map((data, index) => {
                if(index === this.props.tableRows.length-1) {
                    this.loaded = true;
                    console.log("loaded is true? ", this.loaded)
                }

                let subCategoryNumber = data.product.subCategoryId;
                console.log("Sub category ID:", subCategoryNumber)
            
                let found = this.props.allCategories.filter(category => {
                  if(category.catId === subCategoryNumber) {
                      return category.name;
                  }
                })

                if(found[0] === undefined) {
                    this.props.products[index].product.category = {}
                    data.product.category = {};
                    //console.log("getting all data for the product]", data.product);
                    return <ProductTableRow key={data.product.id} productInfo={data.product} category={"-"}/>;
                } else {
                    data.product.category = found;
                    this.props.products[index].product.category = found;
                    //console.log("getting all data for the product]", data.product);
                    return <ProductTableRow key={data.product.id} productInfo={data.product} category={found[0].name} />;
                }
               
            })
            //console.log("new props products ", this.props.products)
            //console.log("product rows data now is ", this.productRows);
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
    tableRows: PropTypes.array,
    subCategory: PropTypes.string,
    allCategories: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    subCategory: state.subCategoryData.subCategory,
    allCategories: state.categoryData.allCategories
})

export default connect(mapStateToProps, {getAllProducts, getAllCategories})(ProductsTable);