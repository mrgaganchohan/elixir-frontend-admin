import React, {Component} from 'react';
import SettingsButton from '../Settings/SettingsButton';
import {Link} from 'react-router-dom';
import {getAllCategories, addCategory} from '../../actions/categoryActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryTable from './CategoryTable';
import Modal from 'react-awesome-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CategoryForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
        modalVisibility: false,
        formValid: null,
        initialDisabled: true,
        nameErrorBorder: "",
        originalCategoryName: "",
        categoryData: {
          name: "",
          status: ""
        }
    }
  }

  componentWillMount() {
    this.props.getAllCategories();
  }

  openAddNewCategoryModal = () => {
    //implement opening of the modal 
    this.setState({modalVisibility:true})
  }

  closeModal = () => {
    this.setState({
      modalVisibility: false,
      originalCategoryName: "",
      formValid: null,
      nameErrorBorder: "", 
      categoryData: {
        ...this.state.categoryData,
        name: "",
        status: ""
      }
    })
  }

  handleNameChange = (e) => {
    //implement on change handler here
    this.setState({
      categoryData: {
        ...this.state.categoryData,
        name: e.target.value
      }
    }, () => {
     this.checkValidity();
    })
  }

  handleStatusChange = (e) => {
    console.log("clicked ==", e.target.value)
    let type = e.target.value;

    this.setState({
      categoryData: {
        ...this.state.categoryData,
        status: type
      }
    }, () => this.checkValidity())
  }

  checkValidity = () => {
    let nameInput = this.state.categoryData.name.trim();

        if(nameInput.length < 1 && this.state.categoryData.status === "") {
          this.setState({
            formValid: false,
            nameErrorBorder: "input-error-border"
          })
        }
        else if(nameInput.length > 0){
          if(this.state.categoryData.status === "") {
            this.setState({
              formValid: null,
              nameErrorBorder: ""
            })
          }
          else {
            this.setState({
              formValid: true,
              nameErrorBorder: ""
            })
          }
        }
  }

  onSubmitNewCategory = () => {
    //push to the api on submit
    let categoryData = this.state.categoryData;
    console.log("cat data to be passed ", categoryData);

    this.props.addCategory(categoryData);
    
    setTimeout(() => {
      toast(`Successfully added ${categoryData.name}`, {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-success-griz'
       });
     this.closeModal();
    }, 200)

    setTimeout(() => {
      this.props.getAllCategories();
    }, 600)
  }

  render() {

    console.log("all cats in category ", this.props.allCategories)

    let nameError = !this.state.formValid && this.state.formValid !== null? 
    <div>
      <small id="emailHelp" className="mb-0 mt-0 form-text input-error-text float-left">
        Cannot be empty
      </small>
      <br />
    </div> 
    : null;

     return (
      <div>
        <ToastContainer hideProgressBar={true} autoClose={3000} />
        <SettingsButton />
        <Modal visible={this.state.modalVisibility} width="450" height="350" effect="fadeInDown">
          <div className="container">
              <div className="row">
                  <div className="col text-left" >
                      <h2 className="text-left mb-0 modalHeader">
                      <span className="fa fa-list-alt big-icon-color pr-2"></span>
                      Add New Category</h2>
                      <hr className="mt-2 mb-3" />
                  </div>
                  <div className="container-fluid">
                    <div className="form-group">
                      <label className="float-left mb-0">Name</label>
                      <input type="text" className={`form-control ${this.state.nameErrorBorder}`} 
                      id="formGroupExampleInput" placeholder="Enter a category name" 
                      value={this.state.categoryData.name} onChange={this.handleNameChange} />
                      {nameError}
                    </div>
                    <div>
                      <label className="float-left mb-0">Status</label>
                      <br />
                        <div className="form-check float-left">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" 
                          value="Active" checked={this.state.categoryData.status === "Active"}
                          onChange={this.handleStatusChange} />
                          <label className="form-check-label">
                            Active
                          </label>
                        </div>
                        <br />
                        <div className="form-check float-left">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" 
                          value="Block" checked={this.state.categoryData.status === "Block"}
                          onChange={this.handleStatusChange} />
                          <label className="form-check-label">
                            Blocked
                          </label>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="modalOptions">
                  <button onClick={this.closeModal} className="btn btn-danger mr-2 cog-radius">No thanks</button>
                  <button onClick={this.onSubmitNewCategory} disabled={!this.state.formValid} 
                  className="btn btn-success cog-radius">
                    Yes, I'm sure
                  </button>
              </div>
          </div>
        </Modal>
        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
          <h3 className="float-left d-inline mb-3">
            <span className="fa fa-list-alt pr-2 big-icon-color"></span>
            Category
          </h3>
          <button className="btn btn-primary cog-radius float-right mr-3"
                  onClick={this.openAddNewCategoryModal}>
            <span className="fa fa-plus pr-2"></span>
            Add Category
          </button>
          <CategoryTable />
        </main>
      </div>
    )
  }
}

CategoryForm.propTypes = {
  getAllCategories: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  products: PropTypes.array,
  product: PropTypes.object,
  allCategories: PropTypes.array
}

const mapStateToProps = state => ({
  products: state.productData.allProducts,
  product: state.productData.product,
  allCategories: state.categoryData.allCategories
})

export default connect(mapStateToProps, {getAllCategories, addCategory})(CategoryForm);