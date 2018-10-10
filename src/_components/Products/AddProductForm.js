import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createProduct, createProductImages } from '../../actions/productActions';
import { getSubCategory } from '../../actions/subcategoryActions';
import { load as loadCategories } from '../../reducers/categoryReducer';
import {Link} from 'react-router-dom';

class AddProductForm extends Component{

    renderField(field){
        const { meta: { touched, error } } = field;
        const productform = `form-group className="form-group col-lg-12 col-md-12 form-group w-75" ${touched && error ? 'has-danger' : ''}`

        return(
            <div className={productform}>
                <label>{field.label}</label>
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
        this.props.createProduct(props, () => {
            this.props.history.goBack();
        });
    }

    categoryClick(event){
        if(event.target.value){
            this.props.getSubCategory(event.target.value);
        }
    }

    renderSubcategories(){
        if(Object.getOwnPropertyNames(this.props.subCategories).length !== 0){
            return( 
                <Field name="subCategoryId" component="select">        
                    <option>Sub-Category</option>
                        {this.props.subCategories.map(subCategoryOption => (
                            <option value={subCategoryOption.subId} key={subCategoryOption.subId}>
                                {subCategoryOption.name}
                            </option>
                        ))}
                </Field>
            )
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
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
                     <div className="col-lg-12 col-md-12 form-group w-50">
                            <select className="form-control" onChange={this.categoryClick.bind(this)}>
                                <option value="" defaultValue="">Select a Category</option>
                            {this.props.initialValues.map(categoryOption => (
                             <option value={categoryOption.name} key={categoryOption.id}>
                                 {categoryOption.name}
                             </option>
                         ))}
                            </select>
                    </div>
                
                        {this.renderSubcategories()}
                    
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
                     
                </div>
                <button type="submit" className="btn btn-success cog-radius float-right">Submit</button>
                <Link className="btn btn-light cog-radius float-right mr-3" to="/products">Cancel</Link>
            </form>
        
            )};
}

function validate(data){
    const errors = {};
}

AddProductForm = connect(
    state => ({
        initialValues: state.categoryData.allCategories,
        subCategories: state.subCategoryData.subCategory
    }),
    { getSubCategory, createProduct },
)(AddProductForm);

AddProductForm = reduxForm({
    form: 'AddProductForm',
})(AddProductForm);

export default AddProductForm;