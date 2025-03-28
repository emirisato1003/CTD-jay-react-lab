import ProductCard from "./ProductCard";

function ProductList({ inventory, children }) {
    // const inventory = props.inventory
    return (
        <ul>
            {children}
            {inventory.map(item => {
                return (
                    <ProductCard
                        key={item.id}
                        name={item.baseName}
                        description={item.baseDescription}
                    />
                );
            })}
        </ul>
    );
}

export default ProductList;