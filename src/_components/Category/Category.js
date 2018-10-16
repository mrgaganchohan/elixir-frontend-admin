import React, { Component } from 'react';
import Content from '../Dashboard/Content';
import Dashboard from '../Dashboard/Dashboard';
import '../../assets/css/custom.css';
import {getAllCategories} from '../../actions/categoryActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';


class Category extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAllCategories();
    }
    
    componentDidMount() {
        this.props.getAllCategories();
    }

    render() {

        if(this.props.allCategories !== undefined) {
            //console.log("here i am logging all products array", this.props.products)
        }
        
        return(
            <div>
                <Dashboard />
                <Content page="CATEGORY"/>
                <CategoryForm />
            </div>
        )
    }
}

Category.propTypes = {
    getAllCategories: PropTypes.func.isRequired,
    allCategories: PropTypes.array
}

const mapStateToProps = state => ({
    allCategories: state.categoryData.allCategories
})

export default connect(mapStateToProps, {getAllCategories})(Category);