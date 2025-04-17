import { useState } from 'react';
import placeholderImg from '../assets/placeholder.png';
import ProductCardVariants from './ProductCardVariants';


export default function ProductCard({ product, handleAddItemToCart }) {
    // console.log(product.variants);
    const [isVariantShown, setIsVariantShown] = useState(false);

    return (
        <li>
            <div className="itemCard">
                <div className="itemCard-img">
                    <img src={placeholderImg} alt="No preview" className='itemCard-img' />
                </div>
                <div className="itemCard-content">
                    <h2>{product.baseName}</h2>
                    <p>{product.baseDescription}</p>
                </div>
                <div className="itemCard-footer">
                    {product.variants.length > 1 ?
                        <button onClick={() => setIsVariantShown(prev => !prev)}>Show Options</button> :
                        <button onClick={() => handleAddItemToCart(product.variants[0].id)}>Add to Cart</button>}
                </div>
                {isVariantShown &&
                    <ProductCardVariants
                        handleAddItemToCart={handleAddItemToCart}
                        variants={product.variants}
                        closeVariants={() => setIsVariantShown(false)}
                    />
                }
            </div>
        </li>
    );
}