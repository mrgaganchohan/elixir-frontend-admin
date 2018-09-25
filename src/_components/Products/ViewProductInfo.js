import React from 'react';
import Content from '../Dashboard/Content';
import SettingsButton from '../Settings/SettingsButton';
import "../../assets/css/custom.css";
import Dashboard from '../Dashboard/Dashboard';
import {Link} from 'react-router-dom';
import ProductCarousel from './ProductCarousel';

const ViewProductInfo = (data) => { 

    let image = data > 1 ? 
    <img width="100%" height="400" alt="" src={data.data.list[0]}/> 
    : <ProductCarousel productImage={data.data.list}/>;

    return (
      <div>
      <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <div>
            <h1 className="text-left">{data.data.product.name}<span className="p-view-header-brand"> by {data.data.product.brand}</span></h1>
            <h5 className="text-left"><span className="fa fa-star pl-1 pr-1 p-view-star"></span>{data.data.product.rating}</h5>
            <hr />
        </div>
        <div className="row marg-top-25">
              <div className="col-lg-4 col-md-12">
                  <div className="w-100 h-100 cog-radius">
                    {image}
                  </div>
              </div>
              <div className="col-lg-5 col-md-6">
                  <h5 className="text-left">Product Description</h5>
                  <p className="text-left mt-3 p-view-description">{data.data.product.description}</p>
              </div>
        </div>
        <div className="row">
          <div className="col-11">
          <Link className="btn btn-outline-primary cog-radius float-right" to="/products"><span className="fa fa-chevron-left pr-2"></span> Back to Products</Link>
          </div>
        </div>
      </main>
  </div>
    )
}

export default ViewProductInfo;