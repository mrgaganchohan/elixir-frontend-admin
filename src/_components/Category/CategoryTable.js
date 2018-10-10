import React, { Component } from 'react';
import { getAllProducts } from '../../actions/productActions';
import {getAllCategories} from '../../actions/categoryActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryTableRow from './CategoryTableRow';
import Modal from 'react-awesome-modal';


class CategoryTable extends Component {

    constructor(props) {
        super(props);
        this.categoryData = [];
        this.state = {
          modalVisibility: false
        }
    }

    componentWillMount() {
        this.props.getAllCategories();
    }

    openModal = (values) => {
      console.log("hitting open modal from category table row")
      console.log("values", values)
    }

    closeModal = () => {
      
    }
    

    render() {

      if(this.props.allCategories.length > 0) {
        this.categoryData = this.props.allCategories.map((data) => {
          console.log("data data data", data)
          return <CategoryTableRow key={data.catId} catData={data} openModal={this.openModal}/>
        }) 

      }

        return (
            <div>
               <Modal visible={this.state.modalVisibility} width="400" height="250" effect="fadeInDown" onClickAway={this.closeModal}>
             <div className="container">
                <div className="row">
                     <div className="col text-left" >
                         <h2 className="text-left mb-0 modalHeader"><span className="fa fa-exclamation-circle modalIcon pr-2"></span>Warning!</h2>
                         <hr className="mt-2 mb-3" />
                         <p className="mb-2">Are you sure you want to delete: </p>
                         <h6><strong></strong></h6>
                     </div>
                </div>
                <div className="modalOptions">
                     <button onClick={this.closeModal} className="btn btn-danger mr-2 cog-radius">No thanks</button>
                     {/* <button onClick={props.modalConfirmation} className="btn btn-success cog-radius">Yes, I'm sure</button> */}
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