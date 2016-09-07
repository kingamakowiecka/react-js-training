import React from 'react';

export default function Product (props) {
    const { idx, product } = props;

    return (
        <div className="basket_product">
            <h3>{idx}</h3>
            <h3 className="product__name">{product.name}</h3>
        </div>
    );
}