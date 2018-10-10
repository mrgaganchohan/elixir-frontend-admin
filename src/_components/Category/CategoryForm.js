import React, {Component} from 'react';
import SettingsButton from '../Settings/SettingsButton';
import {Link} from 'react-router-dom';
import {getAllCategories} from '../../actions/categoryActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryTable from './CategoryTable';



class CategoryForm extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  addNewCategoryModal = () => {
    //implement opening of the modal 
  }

  onSubmitNewCategory = () => {
    //push to the api on submit
  }

  render() {

    console.log("all cats in category ", this.props.allCategories)

    return (
      <div>
        <SettingsButton />
        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
          <h3 className="float-left d-inline mb-3"><span className="fa fa-list-alt pr-2 big-icon-color"></span>Category</h3>
          <button className="btn btn-primary cog-radius float-right mr-3"> <span className="fa fa-plus pr-2"></span>Add Category</button>
          <CategoryTable catgoryRowData={this.props.allCategories}/>
        </main>
      </div>
    )
  }
}

CategoryForm.propTypes = {
  getAllCategories: PropTypes.func.isRequired,
  products: PropTypes.array,
  product: PropTypes.object,
  allCategories: PropTypes.array
}

const mapStateToProps = state => ({
  products: state.productData.allProducts,
  product: state.productData.product,
  allCategories: state.categoryData.allCategories
})

export default connect(mapStateToProps, {getAllCategories})(CategoryForm);