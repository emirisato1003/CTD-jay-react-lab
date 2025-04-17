
import { useState } from 'react';
import placeholder from '../assets/placeholder.png';

export default function Cart({ cart, handleCart, setCart }) {
    const [workingCart, setWorkingCart] = useState(cart);
    const [isFormDirty, setIsFormDirty] = useState(false);
    function getCartTotal() {
        return workingCart
            .reduce((acc, item) => acc + item.price * item.itemCount, 0)
            .toFixed(2);
    }

    function handleUpdateField({ event, id }) {
        event.preventDefault()
        if(!isFormDirty){
            setIsFormDirty(true)
        }

        const targetItem = cart.find(item => item.id === id)
        const targetIndex = cart.findIndex(item => item.id === id)
        if(!targetItem){
            console.error('cart error: item not found')
            return;
        }

        if(event.target.value < 0 || event.target.value === ''){
            return;
        }
        // create new obj instead updating old
        const updatedItem ={
            ...targetItem,
            itemCount: parseInt(event.target.value, 10),
        }
        
        // avoid re-ordering array when updating cart item
        setWorkingCart([
            ...workingCart.slice(0, targetIndex),
            updatedItem,
            ...workingCart.slice(targetIndex + 1)
        ])
        
    }
    function handleCancel() { }

    return (
        <div className="cartScreen">
            {workingCart.length === 0 ? <p>Cart is empty</p> :
                <ul>
                    {workingCart.map(item => {
                        return (
                            <li key={item.cartItemId} className='cartListItem'>
                                <img src={placeholder} alt="" />
                                <h2>{item.baseName}</h2>
                                {item.variantName !== 'Default' ? <p>{item.variantName}</p> : null}
                                <div className="cartListItemSubtotal">
                                    <form>
                                        <label htmlFor="itemCount">
                                            Count:
                                            <input type='number' value={item.itemCount} onChange={(event) => handleUpdateField({event, id: item.id})} />
                                        </label>
                                    </form>
                                    <p>SubTotal: ${(item.price * item.itemCount).toFixed(2)}</p>
                                </div>
                            </li>
                        );
                    })}
                    <h2>Cart Total: ${getCartTotal()}</h2>
                </ul>
            }
            <button disabled={isFormDirty} onClick={handleCart}>Close Cart</button>
        </div>
    );
}