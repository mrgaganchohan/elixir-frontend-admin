import React, { Component } from 'react';
import '../../assets/css/custom.css';
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

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



    render() {
        return(
            <tr className="d-flex">
                <td className="text-left col-lg-5 pt-2 pb-1">{this.props.productInfo.name}</td>
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
                <td className="col-lg-2 text-center pt-2 pb-1">
                    <Link className="btn btn-outline-info cog-radius pl-4 pr-4 mr-2 pt-1 pb-1" to={`/product/view/${this.props.productInfo.id}`}>
                    <span className="fa fa-eye pr-2"></span> View
                    </Link>
                    {/* <button onClick={this.openModal} className="btn btn-outline-danger cog-radius pl-4 pr-4 pt-1 pb-1"><span className="fa fa-trash pr-2"></span> Delete</button> */}
                </td>
            </tr>
        //  </div>
        );
    }
}

export default ProductTableRow;