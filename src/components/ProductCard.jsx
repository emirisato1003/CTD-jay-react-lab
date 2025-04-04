export default function ProductCard({ name, description, handleAddItemToCart, id }) {
    return (
        <li>
            <div className="itemCard">
                <h2>{name}</h2>
                <p>{description}</p>
                <button onClick={() => handleAddItemToCart(id)}>Add to Cart</button>
            </div>
        </li>
    );
}