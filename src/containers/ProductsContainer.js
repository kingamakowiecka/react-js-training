import React from "react";
import ProductsList from "../components/ProductsList";
import products from "../../data/products.json";

export default class ProductsContainer extends React.Component {

    state = {
        products: products,
        basketProducts: [],
        allProducts: [],
        serach: '',
        sortBy: 'name'
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                allProducts: products
            });

            const {sortBy, search} = this.state;

            this.handleSortingAndSearching(products, sortBy, search);
        }, 500);
    }

    onSortingChange = (newSorting) => {
        this.setState({
            sortBy: newSorting
        });

        const {allProducts, search} = this.state;
        this.handleSortingAndSearching(allProducts, newSorting, search);
    };

    onSearchingChange = (newSearching) => {
        const search = newSearching.toLowerCase();
        this.setState({search});

        const {allProducts, sortBy} = this.state;
        this.handleSortingAndSearching(allProducts, sortBy, search);
    };

    addToBasket = (basketProduct) => {
        var newArray = this.state.basketProducts.slice();
        newArray.push(basketProduct);
        this.setState({basketProducts: newArray})
    };

    handleSortingAndSearching(products, sortBy, search) {
        products = products.filter(product => {
            if (!search) {
                return true;
            }
            return product.name.toLowerCase().indexOf(search) !== -1;
        });
        products.sort((a, b) => a[sortBy] < b[sortBy]);

        this.setState({products: products});
    }

    render() {
        return (
            <ProductsList {...this.state}
                onSortingChange={this.onSortingChange}
                onSearchingChange={this.onSearchingChange}
                addToBasket={this.addToBasket}/>
        );
    }
}