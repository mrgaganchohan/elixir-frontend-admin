import React, { Component } from 'react';
import '../../assets/css/custom.css';
import {Link} from 'react-router-dom';


class ProductTableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr className="d-flex">
                <td className="text-left col-lg-3 pt-2 pb-1">{this.props.productInfo.name}</td>
                <td className="col-lg-2 pt-2 pb-1">{this.props.productInfo.brand}</td>
                <td className="col-lg-2 pt-2 pb-1">{this.props.productInfo.categoryName}</td>
                <td className="col-lg-2 pt-2 pb-1">{this.props.productInfo.rating}</td>
                <td className="col-lg-3 text-center pt-2 pb-1">
                    <Link className="btn btn-outline-info cog-radius pl-4 pr-4 mr-2 pt-1 pb-1" to={`/product/view/${this.props.productInfo.productId}`}><span className="fa fa-eye pr-2"></span> View</Link>
                    <button className="btn btn-outline-danger cog-radius pl-4 pr-4 pt-1 pb-1"><span className="fa fa-trash pr-2"></span> Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductTableRow;