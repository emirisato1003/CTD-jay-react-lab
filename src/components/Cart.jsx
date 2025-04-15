
import placeholder from '../assets/placeholder.png';

export default function Cart({ cart, handleCart }) {
    function getCartTotal(){
        return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)
    }
    console.log(getCartTotal());    
    return (
        <div className="cartScreen">
            {cart.length === 0 ? <p>Cart is empty</p> :
                <>
                <ul>
                    {cart.map(item => {
                        return (
                            <li key={item.cartItemId}>
                                <img src={placeholder} alt="" />
                                <h2>{item.baseName}</h2>
                                <p>{item.price}</p>
                            </li>
                        );
                    })}
                </ul>
            <h2>Cart Total: ${getCartTotal()}</h2>
                </>
            }
            <button onClick={handleCart}>Close Cart</button>
        </div>
    );
}