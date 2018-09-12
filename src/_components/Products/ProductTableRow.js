import React, { Component } from 'react';
import '../../assets/css/custom.css';

class ProductTableRow extends Component {

    render() {
        return(

            <tr className="d-flex">
                <td className="text-left col-lg-3">Product1</td>
                <td className="col-lg-2">Phillips</td>
                <td className="col-lg-2">Laptop</td>
                <td className="col-lg-2">4.5</td>
                <td className="col-lg-3 text-center">
                    <button className="btn btn-outline-info cog-radius pl-4 pr-4 mr-2">View</button>
                    <button className="btn btn-outline-danger cog-radius pl-4 pr-4">Delete</button>
                </td>
            </tr>

        );
    }

}

export default ProductTableRow;