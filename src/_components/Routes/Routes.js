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

class Routes extends Component {
    componentWillMount() {
        this.props.getAdminInfo("andysek@test.com");
        console.log('routes here...')
    }
    render() {
        console.log('routes - is authenticated: ', this.props.isAuthenticated);
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/products" component={Products} isAuthed={this.props.isAuthenticated}/>
                    <PrivateRoute path="/product/view" component={ViewProduct} isAuthed={this.props.isAuthenticated}/>
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
    getAdminInfo: PropTypes.func.isRequired,
    adminDetails: PropTypes.object,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    adminDetails: state.adminData.adminDetails,
    isAuthenticated: state.adminData.isAuthenticated
})

export default connect(mapStateToProps, {getAdminInfo})(Routes);