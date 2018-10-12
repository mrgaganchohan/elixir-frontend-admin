import React, { Component } from 'react';
import { getAllProducts } from '../../actions/productActions';
import {getAllCategories, updateCategory} from '../../actions/categoryActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryTableRow from './CategoryTableRow';
import Modal from 'react-awesome-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class CategoryTable extends Component {

    constructor(props) {
        super(props);
        this.categoryData = [];
        this.state = {
          modalVisibility: false,
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

    openModal = (values) => {
      console.log("hitting open modal from category table row")
      console.log("values", values)

      console.log("values name", values.name)

      this.setState({ 
        modalVisibility: true,
        originalCategoryName: values.name,
        categoryData: {
          ...this.state.categoryData,
          name: values.name,
          status: values.status
        }
       },() => {
        console.log("MODAL STATE ", this.state)
      })

      
    }

    closeModal = () => {
      this.setState({ 
        modalVisibility: false,
        originalCategoryName: "", 
        categoryData: {
          ...this.state.categoryData,
          name: "",
          status: ""
        }
      }, () => {
        console.log("state after CLOSE", this.state)
      })
    }

    handleNameChange = (e) => {
      this.setState({
        categoryData: {
          ...this.state.categoryData,
          name: e.target.value
        }
      }, () => {
        console.log(this.state.categoryData.name)
      })
    }

    handleStatusChange = (e) => {
      let type = e.target.value;
      
      this.setState({
        categoryData: {
          ...this.state.categoryData,
          status: type
        }
      }, () => {
        console.log("this state after change radio", this.state)
      })
    }

    handleSubmitUpdateCategory = () => {
      this.props.updateCategory(this.state.originalCategoryName, this.state.categoryData);

      setTimeout(() => {
        toast("Successfully updated category.", {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast-success-griz'
         });
       this.closeModal();
      }, 200)

      setTimeout(() => {
        this.props.getAllCategories();
      }, 100)
      
    }

   render() {

      if(this.props.allCategories.length > 0) {
        this.categoryData = this.props.allCategories.map((data) => {
          // console.log("data data data", data)
          return <CategoryTableRow key={data.catId} catData={data} openModal={this.openModal}/>
        })
      }

        return (
            <div>
              <ToastContainer hideProgressBar={true} autoClose={3000} />
              <Modal visible={this.state.modalVisibility} width="450" height="350" effect="fadeInDown">
                <div className="container">
                    <div className="row">
                        <div className="col text-left" >
                            <h2 className="text-left mb-0 modalHeader">
                            <span className="fa fa-list-alt big-icon-color pr-2"></span>
                            Edit Category</h2>
                            <hr className="mt-2 mb-3" />
                        </div>
                        <div className="container-fluid">
                          <div className="form-group">
                            <label className="float-left mb-0">Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter a category name" 
                            value={this.state.categoryData.name} onChange={this.handleNameChange} />
                          </div>
                          <div>
                          <label className="float-left mb-0">Status</label>
                          <br />
                            <div class="form-check float-left">
                              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" 
                              value="Active" checked={this.state.categoryData.status === "Active"} onChange={this.handleStatusChange} />
                              <label class="form-check-label" for="exampleRadios1">
                                Active
                              </label>
                            </div>
                            <br />
                            <div class="form-check float-left">
                              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" 
                              value="Block" checked={this.state.categoryData.status !== "Active"} onChange={this.handleStatusChange} />
                              <label class="form-check-label" for="exampleRadios2">
                                Blocked
                              </label>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="modalOptions">
                        <button onClick={this.closeModal} className="btn btn-danger mr-2 cog-radius">No thanks</button>
                        <button onClick={this.handleSubmitUpdateCategory} className="btn btn-success cog-radius">Yes, I'm sure</button>
                    </div>
                </div>
              </Modal>
              <table className="table table-striped mt-3">
                <thead>
                    <tr className="d-flex">
                        <th className="p-2 text-left col-lg-4">Category Name</th>
                        <th className="p-2 text-left col-lg-4">Status</th>
                        <th className="p-2 col-lg-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.categoryData}
                </tbody>
            </table>
            </div>
        );
        
    }
}

CategoryTable.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    getAllCategories: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, {getAllProducts, getAllCategories, updateCategory})(CategoryTable);