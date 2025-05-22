
import { useState } from 'react';
import CartItem from './CartItem';
export default function Cart({ cart, handleCloseCart, setCart }) {
    const [workingCart, setWorkingCart] = useState(cart);
    const [isFormDirty, setIsFormDirty] = useState(false);

    function getCartTotal() {
        return workingCart
            .reduce((acc, item) => acc + item.price * item.itemCount, 0)
            .toFixed(2);
    }

    function handleUpdateField({ event, id }) {
        event.preventDefault();
        if (!isFormDirty) {
            setIsFormDirty(true);
        }

        const targetItem = cart.find(item => item.id === id);
        const targetIndex = cart.findIndex(item => item.id === id);
        if (!targetItem) {
            console.error('cart error: item not found');
            return;
        }

        if (event.target.value < 0 || event.target.value === '') {
            return;
        }
        // create new obj instead updating old
        const updatedItem = {
            ...targetItem,
            itemCount: parseInt(event.target.value, 10),
        };

        // avoid re-ordering array when updating cart item
        setWorkingCart([
            ...workingCart.slice(0, targetIndex),
            updatedItem,
            ...workingCart.slice(targetIndex + 1)
        ]);

    }
    function handleCancel(e) {
        e.preventDefault();
        setIsFormDirty(false);
        setWorkingCart([...cart]);
    }

    function removeEmptyItems(cart) {
        return cart.filter(item => item.itemCount !== 0);
    }

    function handleConfirm(e) {
        e.preventDefault();
        setIsFormDirty(false);
    }

    return (
        <>
            <div className="cartScreen"></div>
            <div className="cartListWrapper">
                {workingCart.length === 0 ? <h2>Cart is empty</h2> :
                    <ul className='cartList'>
                        {workingCart.map(item => {
                            return (
                                <CartItem key={item.id} item={item} onHandleItemUpdate={handleUpdateField} />
                            );
                        })}
                        <h2>Cart Total: ${getCartTotal()}</h2>
                        {isFormDirty &&
                            <div className='cartUpdateBtn'>
                                <button onClick={handleConfirm} className='cartConfirmBtn'>Confirm Update</button>
                                <button onClick={handleCancel} className='cartCancelBtn'>Cancel Update</button>
                            </div>
                        }
                    </ul>
                }
                <button onClick={handleCloseCart} className='cartCloseBtn'>Close Cart</button>
            </div>
        </>
    );
}