import React, { Component } from 'react';
import Products from '../Products/Products';
import ViewProduct from '../Products/ViewProduct';
import AddProduct from '../Products/AddProduct';
import PathNotFound from '../Error/PathNotFound';
import Settings from '../Settings/Settings';
import Login from '../Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAdminInfo } from '../../actions/adminActions';
import { getAllProducts } from '../../actions/productActions';
import store from '../../store/store';
import Category from '../Category/Category';

class Routes extends Component {
    componentWillMount() {
        // this.props.getAdminInfo("andysek@test.com");
        this.props.getAllProducts();
        // console.log('routes here...')
        // console.log("Authenticated == ", this.props.isAuthenticated)
        // console.log(store.getState())
    }

    render() {
        console.log('routes - is authenticated: ', this.props.isAuthenticated);
        console.log(store.getState())
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/products" component={Products} isAuthed={this.props.isAuthenticated}/>
                    <PrivateRoute path="/category" component={Category} isAuthed={this.props.isAuthenticated}/>
                    <PrivateRoute path="/product/view/:id" component={ViewProduct} isAuthed={this.props.isAuthenticated}/>
                    <PrivateRoute path="/product/add" component={AddProduct} isAuthed={this.props.isAuthenticated}/>
                    <PrivateRoute path="/settings" component={Settings} isAuthed={this.props.isAuthenticated}/>
                    <PrivateRoute exact path="/" component={Products} isAuthed={this.props.isAuthenticated}/>
                    <Route component={PathNotFound} />
                </Switch>
          </BrowserRouter>
        )
    }
}

Routes.propTypes = {
    getAllProducts: PropTypes.func.isRequired,
    getAdminInfo: PropTypes.func.isRequired,
    adminDetails: PropTypes.object,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    adminDetails: state.adminData.adminDetails,
    isAuthenticated: state.adminData.isAuthenticated,

})

export default connect(mapStateToProps, {getAdminInfo, getAllProducts})(Routes);