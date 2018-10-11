import React, { Component } from 'react';
import Content from '../Dashboard/Content';
import SettingsButton from '../Settings/SettingsButton';

import Dashboard from '../Dashboard/Dashboard';

import AddProductForm from './AddProductForm';

class AddProduct extends Component {
    render() {
        return(
            <div>
                <Dashboard />
                <Content page="PRODUCTS" />
                <SettingsButton />
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                <div>
                    <h1 className="text-left">Add Product</h1>
                    <hr />
                </div>
               <div className="row marg-top-25">
                    <div className="col-lg-5 col-md-6">
                        
                    </div>
               </div>
               
               <AddProductForm history={this.props.history}/>
                </main>
            </div>
        )
    }
}
export default AddProduct;