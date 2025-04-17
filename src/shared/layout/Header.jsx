// import reactLogo from '../assets/react.svg';
import { BsCartFill } from "react-icons/bs";
import ctdLogo from '../assets/icons/mono-blue-logo.svg';
import shoppingCartLogo from '../assets/icons/shoppingCart.svg';
import { useEffect } from "react";

export default function Header({ cart, handleCart }) {
    // console.log(handleCart);
    useEffect(() => {
        cart.forEach(item => {
            console.log(item.baseName, item.cartItemId);
        });
        if(cart.length > 0){
            console.log('--end of cart --');
        }
    })

    function getItemCount(){
        return cart.reduce((acc, item) => acc + item.itemCount, 0)
    }
    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <img src={ctdLogo} alt="CTD logo" />
                    <span className="nav-logo-text">CTD Swag</span>
                </div>
                <div className="cart" onClick={() => handleCart()}>
                    <div className="cart-item-number">{getItemCount()}</div>
                    <img className="cart-logo" src={shoppingCartLogo} alt="shopping cart" />
                </div>
            </nav>
        </header>
    );
}