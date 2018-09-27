import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Content from '../Dashboard/Content';
import SettingsButton from '../Settings/SettingsButton';
import "../../assets/css/custom.css";
import Dashboard from '../Dashboard/Dashboard';
import { getProduct } from '../../actions/productActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewProductInfo from './ViewProductInfo';
import LoadingProduct from './LoadingProduct';

class ViewProduct extends Component {
    
    constructor(props) {
        super(props);
        this.data;
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getProduct(id);
    }

    render() {
        let page = <LoadingProduct />;

        if(Object.getOwnPropertyNames(this.props.product).length !== 0) {
            console.log("we have data => ", this.props.product);
            page =  <ViewProductInfo data={this.props.product}/>
        }

        return(
            <div>
                <Dashboard />
                <Content page="PRODUCTS"/>
                <SettingsButton />
                {page}
            </div>
        );
    }
}

ViewProduct.propTypes = {
    getProduct: PropTypes.func.isRequired,
    allProducts: PropTypes.array,
    product: PropTypes.object
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    product: state.productData.product
})

export default connect(mapStateToProps, {getProduct})(ViewProduct);