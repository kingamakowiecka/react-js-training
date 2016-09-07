import React from "react";
import Product from "./Product";
import BasketList from "./BasketList";

export default function ProductsList({products, basketProducts, sortBy, search, onSortingChange, onSearchingChange, addToBasket}) {
    console.log("products-list")
    console.table(basketProducts)
    return (
        <div className="allegro">
            <div className="products">
            {products.map((product, idx) => (
                    <Product product={product} addToBasket={addToBasket} idx={idx}/>
                )
            )}
            </div>
            <div className="basket">
                <BasketList basketProducts={basketProducts} />
            </div>
            <SortingButtons {...{sortBy, onSortingChange}} />
            <Filtering search={search} onSearchingChange={onSearchingChange} />
            
        </div>
    );
}

export function SortingButtons ({ sortBy, onSortingChange }) {
    return (
        <div>
            <button disabled={sortBy === 'name'} onClick={e => onSortingChange('name')}>
                Sort by Name
            </button>
            <button disabled={sortBy === 'price'} onClick={e => onSortingChange('price')}>
                Sort by price
            </button>
        </div>
    );
}

export function Filtering({ search, onSearchingChange }) {
    return (
        <div>
            <input
                type='text'
                value={search}
                placeholder="Search list..."
                onChange={ev => onSearchingChange(ev.target.value)}
            />
        </div>
    );
}

