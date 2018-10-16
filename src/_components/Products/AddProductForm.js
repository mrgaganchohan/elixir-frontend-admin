import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createProduct, getAllProducts } from '../../actions/productActions';
import { getSubCategory } from '../../actions/subcategoryActions';
import { load as loadCategories } from '../../reducers/categoryReducer';
import {Link} from 'react-router-dom';
import ImageUploader from 'react-images-upload';

const required = value => value ? undefined : 'Required'


class AddProductForm extends Component{
    constructor(props) {
        super(props);
        this.state = { images: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    renderField(field){
        const { meta: { touched, error } } = field;
        const productform = `form-group ${touched && error ? 'has-danger' : ''}`
        //className="form-group col-lg-12 col-md-12 form-group w-75"
        return(
            <div className={productform}>
                <label className="float-left mb-0">{field.label}</label>
                <input 
                    className="form-control"
                    type={field.type}
                    {...field.input}
                    
                    />
                    <div className="text-danger">
                        {touched ? error : ''}
                    </div>

            </div>
        );
    }

    renderRadio(field) {

        const { input, meta, options } = field;
        const hasError = meta.touched && meta.error;

        return (
            <div>
                <label className="float-left mb-0">Status</label>
                <br />
                {options.map(o => 
                    <div className="float-left mr-2" >
                    <label key={o.value}>
                            <input type="radio" {...input} 
                            value={o.value}
                            checked={o.value === input.value} /> {o.title}</label>
                        <br />
                    </div>)}
                
                <div className="text-danger" >
                    <br />
                    {hasError && <span className="text-danger" style={{float: "left"}}>{meta.error}</span>}
                </div>
                <br />
            </div>
        );
    }

    onDrop(images){
        if (images.length <= 5) {
            this.setState({
                images: images
            });
        }
        else {
            console.log(images[images.length - 1])
            this.notify('errorpic', images[images.length - 1]);
        }
    }

    onSubmit(props){
        const formData = new FormData()

        console.log("Start");
        console.log(props);
        console.log("End");

        formData.append("name", props.name);
        formData.append("productId", props.productId); // number 123456 is immediately converted to a string "123456"
        formData.append("brand", props.brand);
        formData.append("subCategoryId", props.subCategoryId);
        formData.append("rating", props.rating);
        formData.append("status", props.status);
        formData.append("description", props.description);
        formData.append("price", props.price);
        formData.append("discount", props.discount);
        
        formData.append('file', this.state.images[0]);
        formData.append('file', this.state.images[1]);
        formData.append('file', this.state.images[2]);
        // formData.append('file', this.state.images[3]);
        // formData.append('file', this.state.images[4]);
        this.props.createProduct( formData,  () => {
            this.props.getAllProducts()
        
            setTimeout(() => {
                this.props.history.goBack();
            }, 1000)         
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
                <Field name="subCategoryId" component="select" className="form-control"> 
                    <option value="" defaultValue=""> Sub-Category </option>
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
            <div className="justify-content-center align-items-center">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} enctype='multipart/form-data' >
                            <div className="col-md-12">
                                <div>
                                    <Field
                                        label="Product Name"
                                        name="name"
                                        type="text"
                                        component={this.renderField} 
                                    />
                                </div>
                                <div>
                                    <Field
                                        label="Product ID"
                                        name="productId"
                                        type="text"
                                        component={this.renderField}
                                    />
                                </div>
                                <div>    
                                    <Field
                                        label="Brand Name"
                                        name="brand"
                                        type="text"
                                        component={this.renderField}
                                    />
                                </div>
                                <div className=" ">
                                    <label className="float-left mb-0">Category</label>
                                    <select className="form-control" onChange={this.categoryClick.bind(this)}>
                                        <option value="" defaultValue="">Select a Category</option>
                                            {this.props.initialValues.map(categoryOption => (
                                                <option value={categoryOption.name} key={categoryOption.id}>
                                                    {categoryOption.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <div className="mt-3">
                                    {this.renderSubcategories()}
                                </div>

                                <div className="mt-3">
                                    <Field
                                        label="Rating"
                                        name="rating"
                                        type="text"
                                        component={this.renderField}
                                    />
                                </div>
                                <div>
                                    <Field component={this.renderRadio}
                                        label="Status"
                                        name="status" required={true} 
                                        options={[
                                            { title: 'Active', value: 'active' },
                                            { title: 'Inactive', value: 'inactive' }
                                            ]} 
                                    />
                                </div>

                                <div>
                                    <Field
                                        label="Product Description"
                                        name="description"
                                        type="text"
                                        component={this.renderField}
                                    />
                                </div>
                                <div>
                                    <Field
                                        label="Price"
                                        name="price"
                                        type="text"
                                        component={this.renderField}
                                    />
                                </div>
                                <div>
                                    <Field
                                        label="Discount"
                                        name="discount"
                                        type="text"
                                        component={this.renderField}
                                    />
                                </div>
                                    
                                <div>
                                    <button type="submit" className="btn btn-success cog-radius float-right">Submit</button>
                                    <Link className="btn btn-light cog-radius float-right mr-3" to="/products">Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6">
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']}
                            maxFileSize={5242880}
                            withPreview={true}
                            fileSizeError='File size is too big'
                            fileTypeError="is not supported file extension"
                            label='Max file size: 5mb, accepted: jpg, png'
                        />
                    </div>
                </div>
              
            </div>
        )};
}

function validate(values){
    const errors = {};
    console.log(values.subCategoryId)

    //validate no numbers
    if (!values.name) {
        errors.name = "Enter a product name";
    }
    
    //validate no spaces
    if (!values.productId) {
        errors.productId = "Enter the product ID";
    }

    //validate no numbers
    if (!values.brand) {
        errors.brand = "Enter the brand name";
    }

    if (!values.status) {
        errors.status = "Choose a status";
    }

    //validate only numbers
    if (!values.price) {
        errors.price = "Please enter a price";
    } else if (isNaN(Number(values.price))){
        errors.price= "Must be a number!";
    }

    // validate only numbers   
    if (!values.discount) {
        errors.discount = "Please enter a discount";
    } else if (isNaN(Number(values.discount))){
        errors.discount= "Must be a number!";
    }

    if (!values.description) {
        errors.description = "Please enter the product description";
    }
    
    //validating that rating is not a string. Only accepts numbers between 0-5 
    if (!values.rating) {
        errors.rating = "Please choose a rating";
    } else if (values.rating > 5 || values.rating < 0) {
            errors.rating = "Rating must be between 0 and 5";
    } else if (isNaN(Number(values.rating))){
            errors.rating= "Must be a number between 0 and 5";
    }

    //validate category

    //validate subcat
    if (!values.subCategoryId) {
        errors.subCategoryId = "Please choose a subcategory";
    }

    return errors;
}

AddProductForm = connect(
    state => ({
        initialValues: state.categoryData.allCategories,
        subCategories: state.subCategoryData.subCategory
    }),
    { getSubCategory, createProduct, getAllProducts },
)(AddProductForm);

AddProductForm = reduxForm({
    validate,
    form: 'AddProductForm',
})(AddProductForm);

export default AddProductForm;