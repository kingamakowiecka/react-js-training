import React from 'react';
import ProductsList from '../components/ProductsList';
import products from '../../data/products.json';

export default class ProductsContainer extends React.Component {

    state = {
        products: products
    };

    render () {
        return (
            <ProductsList {...this.state} />
        );
    }
}