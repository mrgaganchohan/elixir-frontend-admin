import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createProduct, getAllProducts } from '../../actions/productActions';
import { getSubCategory } from '../../actions/subcategoryActions';
import { load as loadCategories } from '../../reducers/categoryReducer';
import {Link} from 'react-router-dom';
import ImageUploader from 'react-images-upload';

class AddProductForm extends Component{
    constructor(props) {
        super(props);
        this.state = { images: [] };
        this.onDrop = this.onDrop.bind(this);
    }

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
        this.props.createProduct( formData, () => {
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
            <div>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']}
                maxFileSize={5242880}
                withPreview={true}
                className="image-uploader"
                fileSizeError='File size is too big'
                fileTypeError="is not supported file extension"
                label='Max file size: 5mb, accepted: jpg, png, gif'
            />
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} enctype='multipart/form-data' >
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
            </div>
        
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
    { getSubCategory, createProduct, getAllProducts },
)(AddProductForm);

AddProductForm = reduxForm({
    form: 'AddProductForm',
})(AddProductForm);

export default AddProductForm;