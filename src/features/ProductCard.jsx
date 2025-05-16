import { useState } from 'react';
import placeholderImg from '../assets/placeholder.png';
import ProductCardVariants from './ProductCardVariants';
import styled from 'styled-components';


export default function ProductCard({ product, handleAddItemToCart }) {
    // console.log(product);
    const [isVariantShown, setIsVariantShown] = useState(false);
    const Details = styled.p`
    padding: .5rem`;
    
    return (
        <li>
            <div className="itemCard">
                <div className="itemCard-img">
                    <img src={placeholderImg} alt="No preview" className='itemCard-img' />
                </div>
                <div className="itemCard-content">
                    <h2>{product.baseName}</h2>
                    <Details>{product.baseDescription}</Details>
                </div>
                <div className="itemCard-footer">
                    {product.variants?.length > 1 ?
                        <button onClick={() => setIsVariantShown(prev => !prev)}>Show Options</button> :
                        <button onClick={() => handleAddItemToCart(product?.variants[0].id)}>Add to Cart</button>}
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
};;