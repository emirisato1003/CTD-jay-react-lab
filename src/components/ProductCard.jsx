import placeholderImg from '../assets/placeholder.png';

export default function ProductCard({ name, description, handleAddItemToCart, id, products}) {
    console.log(products.variants);
    return (
        <li>
            <div className="itemCard">
                <div className="itemCard-img">
                    <img src={placeholderImg} alt="No preview" className='itemCard-img' />
                </div>
                <div className="itemCard-content">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className="itemCard-footer">
                    {<button onClick={() => handleAddItemToCart(id)}>Add to Cart</button>}
                </div>
            </div>
        </li>
    );
}