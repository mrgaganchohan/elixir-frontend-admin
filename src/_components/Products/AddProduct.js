import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Content from '../Dashboard/Content';
import SettingsButton from '../Settings/SettingsButton';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getAllCategories, getCategory } from '../../actions/categoryActions';
import {getAllSubCategories, getSubCategory } from '../../actions/subcategoryActions';

import Dashboard from '../Dashboard/Dashboard';

class AddProduct extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let data = this.props.getAllCategories();
        console.log("logging categroy data", data);
        let test = this.props.getAllSubCategories();
        console.log("SUBCAT HITHITHITHIT",test);
    }

    handleSubCategories() {
        
    }



    render() {

        let allCategoriesData;

        if(this.props.allCategories.length !== 0) {
            console.log("our category has data...", this.props.allCategories);

            allCategoriesData = this.props.allCategories.map((catData) => {
                return <option>{catData.name}</option>
            })
        }

        return(
            <div>
                <Dashboard />
                <Content page="PRODUCTS" />
                <SettingsButton />
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                <div>
                    <h1 className="text-left">Add Product</h1>
                    <hr />
                </div>
               <div className="row marg-top-25">
                    <div className="col-lg-4 col-md-12">
                        <div className="w-100 h-100 cog-radius">
                           <img width="100%" height="400" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="col-lg-12 col-md-12 form-group w-75">
                            <input type="text" className="form-control" placeholder="Enter Product Name"/>
                        </div>
                        <div className="col-lg-12 col-md-12 form-group w-50">
                            <select className="form-control">
                                <option value="" defaultValue="">Select a Category</option>
                                {allCategoriesData}
                            </select>
                        </div>
                        <div className="col-lg-12 col-md-12 form-group w-50">
                            <select className="form-control">
                                <option value="" defaultValue="">Select a Subcategory</option>
                                <option>Latops</option>
                                <option>Latops</option>
                                <option>Latops</option>
                                <option>Latops</option>
                            </select>
                        </div>
                        <div className="col-lg-12 col-md-12 form-group w-75">
                            <input type="text" className="form-control" placeholder="Product Description"/>
                        </div>
                        <div className="col-lg-12 col-md-12 form-group w-75 input-group">
                        <div className="input-group-prepend">
                           <div className="input-group-text">$</div>
                        </div>
                            <input type="text" className="form-control" placeholder="Price"/>
                        </div>

                        <div>
                            <label>Upload images</label>
                            <input type="file" className="form-control-file btn-warning cog-radius" id="uploadImage"></input>
                            <small id="fileHelp" className="form-text text-muted">Upload images from your computer.</small>
                        </div>
                    </div>
               </div>
               <div className="row">
                    <div className="col-11">
                        <button className="btn btn-success cog-radius float-right">Done<span className="fa fa-check pl-2"></span></button>
                        <Link className="btn btn-light cog-radius float-right mr-3" to="/products">Cancel</Link>
                    </div>
               </div>

                </main>
            </div>
        )
    }

}
// TO DO:
// must implement subcategory, axios post to add product to DB
AddProduct.propTypes = {
    getAllCategories: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
    getAllSubCategories: PropTypes.func.isRequired,
    allCategories: PropTypes.array,
    category: PropTypes.object,
    allSubCategories: PropTypes.array,
    subCategory: PropTypes.object
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    allCategories: state.categoryData.allCategories,
    category: state.categoryData.category,
    allSubCategories: state.subCategoryData.allSubCategories,
    subCategory: state.subCategoryData.subCategory
    
})

export default connect(mapStateToProps, {getAllCategories, getCategory, getAllSubCategories})(AddProduct);