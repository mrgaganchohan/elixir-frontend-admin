import React from 'react';
import Content from '../Dashboard/Content';
import SettingsButton from '../Settings/SettingsButton';
import "../../assets/css/custom.css";
import {Link} from 'react-router-dom';
import ProductCarousel from './ProductCarousel';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-awesome-modal';

const ViewProductInfo = (props) => { 

    console.log("props that hve been passed down", props)

    let image = props.data.list.length === 1 ? 
    <img width="100%" height="400" width="350" alt="" src={props.data.list[0]}/> 
    : <ProductCarousel key={props.data.product.id} productImage={props.data.list}/>;

    console.log("DTA VIEW PRODUCT", props)

    return (
      <div>
         <Modal visible={props.modalVisiblity} width="400" height="250" effect="fadeInDown" onClickAway={props.closeModal}>
             <div className="container">
                <div className="row">
                     <div className="col text-left" >
                         <h2 className="text-left mb-0 modalHeader"><span className="fa fa-exclamation-circle modalIcon pr-2"></span>Warning!</h2>
                         <hr className="mt-2 mb-3" />
                         <p className="mb-2">Are you sure you want to delete: </p>
                         <h6><strong>{props.data.product.name}</strong></h6>
                     </div>
                </div>
                <div className="modalOptions">
                     <button onClick={props.closeModal} className="btn btn-danger mr-2 cog-radius">No thanks</button>
                     <button onClick={props.modalConfirmation} className="btn btn-success cog-radius">Yes, I'm sure</button>
                </div>
             </div>
         </Modal>
      <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <div>
            <h1 className="text-left">{props.data.product.name}<span className="p-view-header-brand"> by {props.data.product.brand}</span></h1>
            <h4 className="text-left"><StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={props.data.product.rating}
                    editing={false}
                    starColor={"#f1c40f"}
                    renderStarIcon={() => <span className="fa fa-star"></span>}
                    emptyStarColor={"#7f8c8d"}/></h4>
            <hr />
          
        </div>
        <div className="row marg-top-25">
              <div className="col-lg-4 col-md-12">
                  <div className="w-100 h-100 cog-radius vp-image-container">
                    {image}
                  </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <h5 className="text-left">Product Description</h5>
                <p className="text-left mt-3 p-view-description">{props.data.product.description}</p>

                    <div className="col-12 mt-3 pl-0 pr-0 pb-0 pull-bottom">
                      <h5 className="text-left"><span className="rrp-text">RRP</span> ${props.data.product.price}</h5>
                    </div>
              </div>
        </div>
        <div className="row">
          <div className="col-11">
          <button className="btn btn-danger float-right cog-radius ml-2" onClick={props.openModal}>
            <span className="fa fa-trash pr-2"></span>Delete
          </button>
          <button className="btn btn-outline-primary cog-radius pv-back-btn float-right" disabled={props.disabledBack}>
          <Link className="btn btn-outline-primary cog-radius" to="/products">
            <span className="fa fa-chevron-left pr-2"></span> 
          Back to Products</Link></button>
         </div>
        </div>
      </main>
  </div>
    )
}

export default ViewProductInfo;