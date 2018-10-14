import React from 'react';

const CategoryTableRow = (props) => {
    console.log("props for category table row", props)

    this.openParentModal = (catData) => {
        console.log('cat table row parent func');
        props.openModal(catData) ;
    }
    
    return (
      <tr className="d-flex">
          <td className="text-left col-lg-4 pt-2 pb-1">{props.catData.name}</td>
          <td className="col-lg-4 text-left pt-2 pb-1 text-left">{props.catData.status}</td>
          <td className="col-lg-4 text-left pt-2 pb-1 text-center">
            <button className="btn btn-outline-warning cog-radius pl-4 pr-4"
                    onClick={() => {this.openParentModal(props.catData)}}>
            <span className="fa fa-pencil pr-2"></span>
            Edit</button>
          </td>
      </tr>
    );
}

export default CategoryTableRow;