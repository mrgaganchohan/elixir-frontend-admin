import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createProduct } from '../../actions/productActions';
import {getAllCategories, getCategory } from '../../actions/categoryActions';
import {getAllSubCategories, getSubCategory } from '../../actions/subcategoryActions';
import { load as loadCategories } from '../../reducers/categoryReducer';
import {Link} from 'react-router-dom';


console.log("THIS IS LAODCATEGORIES",loadCategories);

class AddProductForm extends Component{
    renderField(field){
        const { meta: { touched, error } } = field;
        const productform = `form-group className="form-group col-lg-12 col-md-12 form-group w-75" ${touched && error ? 'has-danger' : ''}`
        // console.log(field)
        return(
            <div className={productform}>
                <label>{field.label}</label>
                {/* <name>{field.name}</name> */}
                <input 
                    className="form-control"
                    type={field.type}
                    {...field.input}
                    
                    />
                    <div className="text-help">
                        {touched ? error : ''}
                    </div>

            </div>
        );
    }


    onSubmit(props){
        this.props.createProduct(props);
        console.log(props);
    }

    render(){
        const { field: { name, productId, brand, subCategoryId, rating, status, description, price, discount }, handleSubmit } = this.props;

        // field: { name, productId, brand, subCategoryId, rating, status, description, price, discount },
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="col-lg-5 col-md-6">
                    <Field
                        label="Product Name"
                        name="name"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Product ID"
                        name="productId"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Brand Name"
                        name="brand"
                        type="text"
                        component={this.renderField}
                    />
                    {/* <Field
                        label="Category"
                        name="category"
                        type="radio"
                        component={this.renderField}
                    />
                        
                    <Field
                        label="Subcategory"
                        name="subcategory"
                        component={this.renderField}
                    /> */}
                    <div>
                        <label>Category</label>
                        <div>
                        <Field name="category" component="select">
                            <option value="">Select a category...</option>
                            {getAllCategories(data => (
                            <option value={data.name} key={data.id}>
                                {data.name}
                            </option>
                            ))}
                        </Field>
                        </div>
                    </div>
                    <Field
                        label="Subcategory"
                        name="subCategoryId"
                        component={this.renderField}
                    />
                    <Field
                        label="Rating"
                        name="rating"
                        type="text"
                        component={this.renderField}
                    />
                        <div>
                            <label>Status</label>
                            <div>
                            <label>
                                <Field
                                name="status"
                                component="input"
                                type="radio"
                                value="Active"
                                />{' '}
                                Active
                            </label>
                            <label>
                                <Field
                                name="status"
                                component="input"
                                type="radio"
                                value="Inactive"
                                />{' '}
                                Inactive
                            </label>
                            </div>
                        </div>
                    <Field
                        label="Product Description"
                        name="description"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Price"
                        name="price"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Discount"
                        name="discount"
                        type="text"
                        component={this.renderField}
                    />
                    {/* <Field
                        label="Upload Images"
                        name="file"
                        type="file"
                        component={this.renderField}
                    /> */}
                     
                </div>
                <button type="submit" className="btn btn-success cog-radius float-right">Submit</button>
                <Link className="btn btn-light cog-radius float-right mr-3" to="/products">Cancel</Link>
            </form>
        
            )};
}

function validate(data){
    const errors = {};
}


// connect:  1st arg: mapStateToProps, 2nd arg: mapDispatchToProps
//reduxForm: 1st arg: form config, 2nd arg: mapStateToProps, 3rd arg: mapDispatchToProps
export default reduxForm({
    validate, 
    form: 'AddProductForm',
    field: [ 'name', 'productId', 'brand', 'subCategoryId', 'rating', 'status', 'description', 'price', 'discount', 'file'  ]
    // list: ['list']
}) (connect(null, { createProduct })(AddProductForm));
// get the initial state
// map subcategory state
// radio btn
// validation
// 
AddProductForm = connect(
    state => ({
        initialValues: state.allCategories
    }),
    { load: loadCategories }, 
)(AddProductForm);