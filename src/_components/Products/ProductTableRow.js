import React, { Component } from 'react';
import '../../assets/css/custom.css';
import {Link} from 'react-router-dom';


class ProductTableRow extends Component {

    render() {
        return(

            <tr className="d-flex">
                <td className="text-left col-lg-3">Product1</td>
                <td className="col-lg-2">Phillips</td>
                <td className="col-lg-2">Laptop</td>
                <td className="col-lg-2">4.5</td>
                <td className="col-lg-3 text-center">
                    <Link className="btn btn-outline-info cog-radius pl-4 pr-4 mr-2" to="/product/view"><span className="fa fa-eye pr-2"></span> View</Link>
                    <button className="btn btn-outline-danger cog-radius pl-4 pr-4"><span className="fa fa-trash pr-2"></span> Delete</button>
                </td>
            </tr>

        );
    }

}

export default ProductTableRow;