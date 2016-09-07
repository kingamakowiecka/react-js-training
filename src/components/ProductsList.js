import React from "react";
import Product from "./Product";

export default function ProductsList({products}) {
    return (
        <div className="products">
            {products.map((product, idx) => (
                    <Product product={product} idx={idx}/>
                )
            )}
        </div>
    );
}

