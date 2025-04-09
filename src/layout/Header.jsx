// import reactLogo from '../assets/react.svg';
import { BsCartFill } from "react-icons/bs";
import ctdLogo from '../assets/icons/mono-blue-logo.svg';
import shoppingCartLogo from '../assets/icons/shoppingCart.svg';

export default function Header({ cart }) {

    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <img src={ctdLogo} alt="CTD logo" />
                    <span className="nav-logo-text">CTD Swag</span>
                </div>
                <div className="cart">
                    <div className="cart-item-number">{1}</div>
                    <img className="cart-logo" src={shoppingCartLogo} alt="shopping cart" />
                </div>
            </nav>
        </header>
    );
}