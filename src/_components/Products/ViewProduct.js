import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Content from '../Dashboard/Content';

import "../../assets/css/custom.css";



class ViewProduct extends Component {

    render() {
        return(
            <div>
                <Content page="PRODUCTS"/>

                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                <div>
                    <h1 className="text-left">iPhone X <span className="p-view-header-brand">by Apple</span></h1>
                    <h5 className="text-left"><span className="fa fa-star pl-1 pr-1 p-view-star"></span> 4.7</h5>
                    <hr />
                </div>
               <div className="row marg-top-25">
                    <div className="col-lg-4 col-md-12">
                        <div className="w-100 h-100 cog-radius">
                           <img width="100%" height="400" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <h5 className="text-left">Product Description</h5>
                        <p className="text-left mt-4 p-view-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className="col-12 pl-0">
                            <Link className="btn btn-primary cog-radius middle" to="/products"><span className="fa fa-chevron-left pr-2"></span> Back to Products</Link>
                        </div>
                    </div>
               </div>

                </main>


            </div>



        );
    }

}

export default ViewProduct;