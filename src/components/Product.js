import React from 'react';

export default function Product (props) {
    const { product, idx } = props;

    return (
        <div className={product.product_class}>
            <img className="product__img" alt="dell" src={product.img}/>
            <h3 className="product__name">{product.name}</h3>
            <h4 className="product__category">{product.category}</h4>
            <p className="product__description">{product.description} {idx}</p>
            <h1 className="product__price">{product.price}</h1>
            <div className="clear-fix"></div>
        </div>
    );
}