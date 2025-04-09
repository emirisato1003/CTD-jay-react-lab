import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ inventory, children, handleAddItemToCart }) {
    // const inventory = props.inventory
    const [products, setProducts] = useState([]);
    return (
        <ul>
            {children}
            {inventory.map(item => {
                return (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.baseName}
                        description={item.baseDescription}
                        handleAddItemToCart={handleAddItemToCart}
                    />
                );
            })}
        </ul>
    );
}

export default ProductList;