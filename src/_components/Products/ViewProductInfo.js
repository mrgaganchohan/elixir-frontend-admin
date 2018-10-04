import React from 'react';
import Content from '../Dashboard/Content';
import SettingsButton from '../Settings/SettingsButton';
import "../../assets/css/custom.css";
import {Link} from 'react-router-dom';
import ProductCarousel from './ProductCarousel';
import StarRatingComponent from 'react-star-rating-component';


const ViewProductInfo = (data) => { 

    let image = data.data.list.length === 1 ? 
    <img width="100%" height="400" alt="" src={data.data.list[0]}/> 
    : <ProductCarousel key={data.data.product.id} productImage={data.data.list}/>;

    console.log("DTA VIEW PRODUCT", data)

    return (
      <div>
      <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <div>
            <h1 className="text-left">{data.data.product.name}<span className="p-view-header-brand"> by {data.data.product.brand}</span></h1>
            <h4 className="text-left"><StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={data.data.product.rating}
                    editing={false}
                    starColor={"#f1c40f"}
                    renderStarIcon={() => <span className="fa fa-star"></span>}
                    emptyStarColor={"#7f8c8d"}/></h4>
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

                    <div className="col-12 mt-3 pl-0 pr-0 pb-0 pull-bottom">
                      <h5 className="text-left"><span className="rrp-text">RRP</span> ${data.data.product.price}</h5>
                    </div>
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