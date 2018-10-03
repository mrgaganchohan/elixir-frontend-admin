import React, { Component } from 'react';
import "../../assets/css/custom.css";
import {Link} from 'react-router-dom';
import ProductsTable from './ProductsTable';
import SettingsButton from '../Settings/SettingsButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getAllProducts} from '../../actions/productActions';
import {getAllCategories} from '../../actions/categoryActions';

class ProductForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: "",
            sortByValue: "",
            displayedItems: this.props.products
        }

        this.originalItems = this.props.products;

        this.handleSearch = this.handleSearch.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.sortProducts = this.sortProducts.bind(this);
    }

    componentWillMount() {
        this.props.getAllCategories();
    }

    handleSearch = (e) => {

        let newlyDisplayed = this.props.products.filter(products => products.product.name.toLowerCase().indexOf(e.target.value) !== -1 
                                                                    || products.product.name.indexOf(e.target.value) !== -1);
    
        this.setState({
            searchInput: e.target.value
        })
        this.sortInputChange(newlyDisplayed);
    }

    resetForm = () => {
        let searchInputValue= document.getElementById("searchInput").value;
        let resetSortByValue = document.getElementById("sortByDropdown").value = "";
        searchInputValue = "";

        let newlyDisplayed = this.props.products.filter(products => products.product.name.toLowerCase().indexOf(searchInputValue) !== -1 
                                                                    || products.product.name.indexOf(searchInputValue) !== -1);

        this.setState({
            searchInput: searchInputValue,
            sortByValue: resetSortByValue,
            displayedItems: newlyDisplayed
        })
    }

    sortProducts = (e) => {
       switch(e.target.value) {
            case "name":
                let sortedByName = this.state.displayedItems.sort((a,b) => this.sortProperty(a,b, "name"));

                this.setState({
                    sortByValue: e.target.value,
                    displayedItems: []
                })

                setTimeout(() => {
                    this.setState({
                        displayedItems: sortedByName
                    })
                }, 100)
                return;
            case "brand":
                let sortedByBrand = this.state.displayedItems.sort((a,b) => this.sortProperty(a,b, "brand"));
                
                console.log("sorted by brand ", sortedByBrand)
                this.setState({
                    sortByValue: e.target.value,
                    displayedItems: []
                })

                setTimeout(() => {
                    this.setState({
                        displayedItems: sortedByBrand
                    })
                }, 100)
                return;
            case "category":
                console.log("name has been hit!");
                return;
            case "ratingHighLow":
                let sortedByRatingHighToLow = this.state.displayedItems.sort((a,b) => this.sortProperty(b,a, "rating"));
                    
                this.setState({
                    sortByValue: e.target.value,
                    displayedItems: []
                })

                setTimeout(() => {
                    this.setState({
                        displayedItems: sortedByRatingHighToLow
                    })
                }, 100)
                return;
            case "ratingLowHigh":
                let sortedByRatingLowToHigh = this.state.displayedItems.sort((a,b) => this.sortProperty(a,b, "rating"));
                        
                this.setState({
                    sortByValue: e.target.value,
                    displayedItems: []
                })

                setTimeout(() => {
                    this.setState({
                        displayedItems: sortedByRatingLowToHigh
                    })
                }, 100)
                return;
            default:
            this.setState({
                displayedItems: this.originalItems
            })
                return;
       }
    }

    sortInputChange = (currentList) => {
        console.log("THIS STATE VALUE === ", this.state.sortByValue)
        switch(this.state.sortByValue) {
             case "name":
                 let sortedByName = currentList.sort((a,b) => this.sortProperty(a,b, "name"));
 
                 this.setState({
                     displayedItems: []
                 })
 
                 setTimeout(() => {
                     this.setState({
                         displayedItems: sortedByName
                     })
                 }, 100)
                 return;
             case "brand":
                 let sortedByBrand = currentList.sort((a,b) => this.sortProperty(a,b, "brand"));
                 
                 this.setState({
                     displayedItems: []
                 })
 
                 setTimeout(() => {
                     this.setState({
                         displayedItems: sortedByBrand
                     })
                 }, 100)
                 return;
             case "category":
                 console.log("name has been hit!");
                 return;
             case "ratingHighLow":
                 let sortedByRatingHighToLow = currentList.sort((a,b) => this.sortProperty(b,a, "rating"));
                     
                 this.setState({
                     displayedItems: []
                 })
 
                 setTimeout(() => {
                     this.setState({
                         displayedItems: sortedByRatingHighToLow
                     })
                 }, 100)
                 return;
             case "ratingLowHigh":
                 let sortedByRatingLowToHigh = currentList.sort((a,b) => this.sortProperty(a,b, "rating"));
                         
                 this.setState({
                     displayedItems: []
                 })
 
                 setTimeout(() => {
                     this.setState({
                         displayedItems: sortedByRatingLowToHigh
                     })
                     console.log("Displayed items array ", this.state.displayedItems)
                 }, 100)
                 return;
             default:
                this.setState({
                    displayedItems: currentList
                })
                return;
        }
     }

   sortProperty = (a, b, type) => {
        if (a.product[type] < b.product[type]) //sort string ascending
            return -1 
        if (a.product[type] > b.product[type])
            return 1
        return 0
   }

    render() {
        
        let categories;

        if(this.props.allCategories.length !== 0){
            categories = this.props.allCategories.map((categoryType, index) => {
                return <option key={index}>{categoryType.name}</option>;
            });
        }

        return(
            <div>
                <SettingsButton />
                <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                <h3 className="text-left"><span className="fa fa-search pr-2 big-icon-color"></span>Find a Product</h3>
                <div className="row">
                    <div className="col-lg-3">
                        <input type="text" className="form-control" id="searchInput" onChange={this.handleSearch} placeholder="Search by Product Name" value={this.state.searchInput}/>
                    </div>
                    <div className="col-lg-2">
                         <select className="form-control">
                            <option value="" defaultValue="">Filter by Category</option>
                            {categories}
                         </select>
                    </div>
                    <div className="col-lg-2">
                         <select id="sortByDropdown" className="form-control" onChange={this.sortProducts}>
                            <option value="" defaultValue="">Sort By</option>
                            <option value="name">Name</option>
                            <option value="brand">Brand</option>
                            <option value="category">Category</option>
                            <option value="ratingHighLow">Rating (highest to lowest)</option>
                            <option value="ratingLowHigh">Rating (lowest to highest)</option>
                         </select>
                    </div>
                    <div className="col-lg-5 col-md-2 pl-0">
                    <button className="btn btn-danger cog-radius float-left" onClick={this.resetForm}>Reset</button>
                        <Link className="btn btn-primary cog-radius ml-3 float-left" to="/product/add">
                            <span className="fa fa-plus pr-2"></span>
                        Add Product</Link>
                    </div>
                </div>
                <ProductsTable tableRows={this.state.displayedItems}/>
                </main>
            </div>
        )
    }
}

ProductForm.propTypes = {
    //getProduct: PropTypes.func.isRequired, 
    getAllCategories: PropTypes.func.isRequired,
    products: PropTypes.array,
    product: PropTypes.object,
    allCategories: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    product: state.productData.product,
    allCategories: state.categoryData.allCategories
})

export default connect(mapStateToProps, {getAllProducts, getAllCategories})(ProductForm);