import React, { Component } from 'react';
import Content from '../Dashboard/Content';
import SettingsButton from '../Settings/SettingsButton';
import "../../assets/css/custom.css";
import Dashboard from '../Dashboard/Dashboard';
import { getProduct, deleteProduct, getAllProducts } from '../../actions/productActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewProductInfo from './ViewProductInfo';
import LoadingProduct from './LoadingProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ViewProduct extends Component {
    
    constructor(props) {
        super(props);
        this.data;
        this.state ={
            visible: false,
            disabledBack: false
        }
        this.productID = this.props.match.params.id
        console.log(this.props);
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getProduct(id);
    }

    handleDeleteConfirmation = () => {
        this.setState({
            disabledBack: true
        })
        this.props.deleteProduct(this.productID);
        this.closeModal();

        setTimeout(() => {
           if(this.props.isError) {
            toast.error(this.props.message);
            this.setState({
                disabledBack: false
            })
           }
           else {
            toast(this.props.message, {
                position: toast.POSITION.TOP_RIGHT,
                className: 'toast-success-griz'
               });
               this.props.getAllProducts();
               setTimeout(() => {
                console.log('trying to redirect...')
                this.props.history.goBack();
            }, 3000)
           }
        }, 1000)
    }

    openModal = () => {
      console.log("hit modal open")
     this.setState({
         visible: true
     })
     console.log("this visibe = ", this.visible)
    }

    closeModal = () => {
        console.log("HITTING HERE")
        this.setState({
            visible: false
        })
    }

    render() {
        //console.log("PRODUCT ID CONSTRUCTOR", this.productID)
        let page = <LoadingProduct />;

        if(Object.getOwnPropertyNames(this.props.product).length !== 0) {
            console.log("we have data => ", this.props.product);
            page =  <ViewProductInfo data={this.props.product} 
                                     modalVisiblity ={this.state.visible} 
                                     closeModal={this.closeModal.bind(this)}
                                     openModal={this.openModal}
                                     modalConfirmation={this.handleDeleteConfirmation}
                                     disabledBack={this.state.disabledBack}/>
        }

        return(
            <div>
                <Dashboard />
                <Content page="PRODUCTS"/>
                <SettingsButton />
                {page}
                <ToastContainer hideProgressBar={true} autoClose={3000} />
            </div>
        );
    }
}

ViewProduct.propTypes = {
    deleteProduct: PropTypes.func.isRequired,
    getAllProducts: PropTypes.func.isRequired,
    getProduct: PropTypes.func.isRequired,
    allProducts: PropTypes.array,
    product: PropTypes.object,
    message: PropTypes.string,
    isError: PropTypes.bool
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    product: state.productData.product,
    message: state.productData.productDeleteMessage,
    isError: state.productData.isError
})

export default connect(mapStateToProps, {getProduct, deleteProduct, getAllProducts})(ViewProduct);