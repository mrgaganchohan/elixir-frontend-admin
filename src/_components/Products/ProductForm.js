import React, { Component } from 'react';
import "../../assets/css/custom.css";
import {Link} from 'react-router-dom';
import ProductsTable from './ProductsTable';
import SettingsButton from '../Settings/SettingsButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getAllProducts} from '../../actions/productActions';
import {getAllCategories} from '../../actions/categoryActions';
import {getAllSubCategories} from '../../actions/subcategoryActions';

class ProductForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: "",
            sortByValue: "",
            displayedItems: []
        }

        this.initialData = [];

        this.allSubcategories = this.props.allSubcategories;

        this.populatedCats = false;
        this.updatedProductInfo = [];
        this.loadedNewData = false;

        this.handleSearch = this.handleSearch.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.sortProducts = this.sortProducts.bind(this);
    }

    componentWillMount() {
        this.props.getAllCategories();
        this.props.getAllSubCategories();
    }


    handleSearch = (e) => {
        let newlyDisplayed = this.updatedProductInfo.filter(products => products.name.toLowerCase().indexOf(e.target.value) !== -1 
                                                                     || products.name.indexOf(e.target.value) !== -1);
    
        console.log("NEWLY DISPLYED AFTER SEARCH ", newlyDisplayed)

        this.setState({
            searchInput: e.target.value,
            displayedItems: newlyDisplayed
        })
        this.sortInputChange(newlyDisplayed);
        this.loadedNewData = true;
    }

    resetForm = () => {
        this.loadedNewData = false;
        let searchInputValue= document.getElementById("searchInput").value;
        let resetSortByValue = document.getElementById("sortByDropdown").value = "";
        searchInputValue = "";

        let newlyDisplayed = this.props.products.filter(products => products.product.name.toLowerCase().indexOf(searchInputValue) !== -1 
                                                                    || products.product.name.indexOf(searchInputValue) !== -1);

        this.populatedCats = false;
        this.loadedNewData = false;

        console.log("Displayted items reset function", this.state.displayedItems)

        this.setState({
            searchInput: searchInputValue,
            sortByValue: resetSortByValue,
            displayedItems: this.updatedProductInfo
        })
    }

    sortProducts = (e) => {
        this.loadedNewData = false;

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
                this.loadedNewData = true;
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
                this.loadedNewData = true;
                return;
            case "category":
                let sortedByCategory = this.state.displayedItems.sort((a,b) => this.sortProperty(a,b, "category"));
                            
                console.log("Sorted categories", sortedByCategory)
                this.setState({
                    displayedItems: []
                })

                setTimeout(() => {
                    this.setState({
                        displayedItems: sortedByCategory
                    })
                }, 100)
                this.loadedNewData = true;
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
                this.loadedNewData = true;
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
                this.loadedNewData = true;
                return;
            default:
            this.setState({
                displayedItems: this.initialData
            })
            this.populatedCats = false;
            this.loadedNewData = false;
                return;
       }
    }

    sortInputChange = (currentList) => {
        console.log("THIS STATE VALUE === ", this.state.sortByValue)
        switch(this.state.sortByValue) {
             case "name":
                let sortedByName = currentList.sort((a,b) => this.sortProperty(a,b, "name"));

                console.log("Sorted by name values input change ", sortedByName)

                this.setState({
                    displayedItems: []
                })
                setTimeout(() => {
                    this.setState({
                        displayedItems: sortedByName
                    })
                }, 100)
                this.loadedNewData = true;
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
                let sortedByCategory = currentList.sort((a,b) => this.sortProperty(b,a, "category"));
                        
                console.log("Sorted categories", sortedByCategory)
                this.setState({
                    displayedItems: []
                })
                setTimeout(() => {
                    this.setState({
                        displayedItems: sortedByCategory
                    })
                }, 100)
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
                    console.log("Displayed items array ", this.displayedItems)
                }, 100)
                return;
             default:
            
                this.populatedCats = false;
                this.loadedNewData = false;
                return;
        }
     }

   sortProperty = (a, b, type) => {
       if(type === "category") {
          // console.log("logging product category",this.displayedItems, a.product.category[0])
        if (a[type][0].name < b[type][0].name) //sort string ascending
            return -1 
        if (a[type][0].name > b[type][0].name)
            return 1
        return 0
       }
       else {
        if (a[type] < b[type]) //sort string ascending
            return -1 
        if (a[type] > b[type])
            return 1
        return 0
       }
   }

    render() {

        if(this.allSubcategories.length > 0) {
            console.log("all sub categories here", this.allSubcategories);
        }

        if(!this.populatedCats && this.props.allCategories.length > 0 && !this.loadedNewData
            && this.allSubcategories.length > 0) {
            this.updatedProductInfo = [];

            
            this.props.products.map((data, index) => {
                if(index === this.props.products.length-1) {
                    this.populatedCats = true;
                }

                console.log("all cats data", this.props.allCategories)
               
                let subCategoryNumber = data.product.subCategoryId;
                console.log("Sub category ID:", subCategoryNumber)
            
                let found = this.props.allSubcategories.filter(category => {
                  if(category.subId === subCategoryNumber) {
                      return category.name;
                  }
                })

                console.log("FOUD ROW ", found)

                if(found[0] === undefined) {
                    let defaultNotFound = "not found"
                    this.props.products[index].product.category = defaultNotFound;
                    data.product.category = defaultNotFound;
                } else {

                    data.product.category = found;
                    this.props.products[index].product.category = found;
                }

                this.updatedProductInfo.push(data.product)
            })

            if(this.initialData.length == 0) {
                this.initialData = this.updatedProductInfo;
            }

            console.log("updated datat",this.updatedProductInfo)
            this.setState({
                displayedItems: this.updatedProductInfo
            })
            this.populatedCats = true;
            this.loadedNewData = true;
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
                    <div className="col-lg-2 pl-0">
                         <select id="sortByDropdown" className="form-control" onChange={this.sortProducts}>
                            <option value="" defaultValue="">Sort By</option>
                            <option value="name" defaultValue="name">Name</option>
                            <option value="brand">Brand</option>
                            <option value="category">Category</option>
                            <option value="ratingHighLow">Rating (highest to lowest)</option>
                            <option value="ratingLowHigh">Rating (lowest to highest)</option>
                         </select>
                    </div>
                    <div className="col-lg-5 col-md-2 pl-0">
                    <button className="btn btn-danger cog-radius float-left" onClick={this.resetForm}> <span className="fa fa-retweet pr-2"></span>Reset</button>
                        <Link className="btn btn-primary cog-radius ml-3 float-left" to="/product/add">
                            <span className="fa fa-plus pr-2"></span>
                        Add Product</Link>
                    </div>
                </div>
                <ProductsTable tableRows={this.state.displayedItems} loaded={this.loadedNewData}/>
                </main>
            </div>
        )
    }
}

ProductForm.propTypes = {
    getAllCategories: PropTypes.func.isRequired,
    getAllSubCategories: PropTypes.func.isRequired,
    products: PropTypes.array,
    product: PropTypes.object,
    allCategories: PropTypes.array,
    allSubcategories: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.productData.allProducts,
    product: state.productData.product,
    allCategories: state.categoryData.allCategories,
    allSubcategories: state.subCategoryData.allSubCategories
})

export default connect(mapStateToProps, {getAllProducts, getAllCategories, getAllSubCategories})(ProductForm);