import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ inventory, children, handleAddItemToCart }) {
    // const inventory = props.inventory
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const workingProducts = [];
        inventory.forEach(item => {
            if(!item.inStock){
                return
            }
            if(!workingProducts.find(productItem => productItem.baseName === item.baseName)){
                workingProducts.push({
                    baseName: item.baseName,
                    price: item.price,
                    baseDescription: item.baseDescription,
                    variants: [{...item}]
                })
            }else{
                const index = workingProducts.findIndex(productItem => productItem.baseName === item.baseName)
                workingProducts[index].variants.push({...item})
            }
        });
        setProducts([...workingProducts])
    }, [inventory]);
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
                        products={products}
                    />
                );
            })}
        </ul>
    );
}

export default ProductList;