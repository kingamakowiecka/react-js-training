import React from 'react';

export default function Product ({product, addToBasket}) {
    return (
        <div className={product.product_class}>
            <img className="product__img" alt="dell" src={product.img}/>
            <h3 className="product__name">{product.name}</h3>
            <h4 className="product__category">{product.category}</h4>
            <p className="product__description">{product.description}</p>
            <h1 className="product__price">{product.price} EUR</h1>
            <button className="product_add" onClick={e => addToBasket(product)}>Dodaj do koszyka!</button>
            <div className="clear-fix"></div>
        </div>
    );
}