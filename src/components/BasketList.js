import React from "react";
import Basket from "./Basket";
import Product from "./Product";

export default function BasketList({basketProducts}) {
    console.log("BasketList")
    console.table(basketProducts)
    return (
        <div className="basket-element">
            {basketProducts.map((basketProduct, idx) => (
                    <Product product={basketProduct} idx={idx}/>
                )
            )}
        </div>
    );
}
