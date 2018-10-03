import React, { Component } from 'react';
import '../../assets/css/custom.css';
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-awesome-modal';
import { Thumbs } from 'react-responsive-carousel';

class ProductTableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    componentWillMount() {
        
    }

    openModal = () => {
        this.setState({
            visible: true
        })
    }

    closeModal = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return(
            // <div className="table-striped">
            //     <Modal visible={this.state.visible} width="400" height="250" effect="fadeInDown" onClickAway={() => this.closeModal()}>
            //         <div className="container">
            //            <div className="row">
            //                 <div className="col text-left" >
            //                     <h2 className="text-left mb-0 modalHeader"><span className="fa fa-exclamation-circle modalIcon pr-2"></span>Warning!</h2>
            //                     <hr className="mt-2 mb-3" />
            //                     <p className="mb-2">Are you sure you want to delete: </p>
            //                     <h6><strong>{this.props.productInfo.name}</strong></h6>
            //                 </div>
            //            </div>
            //            <div className="modalOptions">
            //                 <button onClick={this.closeModal} className="btn btn-danger mr-2 cog-radius">No thanks</button>
            //                 <button onClick={this.closeModal} className="btn btn-success cog-radius">Yes, I'm sure</button>
            //            </div>
            //         </div>
            //     </Modal>
            <tr className="d-flex">
                <td className="text-left col-lg-4 pt-2 pb-1">{this.props.productInfo.name}</td>
                <td className="col-lg-2 text-left pt-2 pb-1">{this.props.productInfo.brand}</td>
                <td className="col-lg-2 text-left pt-2 pb-1">{this.props.category}</td>
                <td className="col-lg-1 pt-2 pb-1">
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.props.productInfo.rating}
                    editing={false}
                    starColor={"#f1c40f"}
                    renderStarIcon={() => <span className="fa fa-star"></span>}
                    emptyStarColor={"#7f8c8d"}
                    />
                
                </td>
                <td className="col-lg-3 text-center pt-2 pb-1">
                    <Link className="btn btn-outline-info cog-radius pl-4 pr-4 mr-2 pt-1 pb-1" to={`/product/view/${this.props.productInfo.id}`}>
                    <span className="fa fa-eye pr-2"></span> View
                    </Link>
                    <button onClick={this.openModal} className="btn btn-outline-danger cog-radius pl-4 pr-4 pt-1 pb-1"><span className="fa fa-trash pr-2"></span> Delete</button>
                </td>
            </tr>
        //  </div>
        );
    }
}

export default ProductTableRow;