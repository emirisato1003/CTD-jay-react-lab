// import reactLogo from '../assets/react.svg';
// import { BsCartFill } from "react-icons/bs";
import ctdLogo from '../assets/icons/mono-blue-logo.svg';
import shoppingCartLogo from '../assets/icons/shoppingCart.svg';
import { useEffect } from "react";

export default function Header({ cart, handleOpenCart, setIsAuthDialogOpen }) {
    // console.log(handleOpenCart);
    useEffect(() => {
        cart.forEach(item => {
            console.log(item.baseName, item.cartItemId);
        });
        if (cart.length > 0) {
            console.log('--end of cart --');
        }
    });

    function getItemCount() {
        return cart.reduce((acc, item) => acc + item.itemCount, 0);
    }
    return (
        <header>
            <div className="header-logo">
                <img src={ctdLogo} alt="CTD logo" />
                <h1 className="header-logo-text">CTD Swag</h1>
            </div>
            <div className="userAction">
                <button onClick={() => setIsAuthDialogOpen(true)}>Log in</button>
                <div className="cart" onClick={handleOpenCart}>
                    <div className="cart-item-number">{getItemCount()}</div>
                    <img className="cart-logo" src={shoppingCartLogo} alt="shopping cart" />
                </div>
            </div>
        </header>
    );
}