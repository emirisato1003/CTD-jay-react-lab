import placeholder from '../../assets/placeholder.png';

export default function CartItem({ item, onHandleItemUpdate }) {
    return (
        <li className='cartListItem'>
            <img src={placeholder} alt="" className='cartListItemImage' />
            <div className="cartListItemDetail">
                <h2>{item.baseName}</h2>
                {item.variantName !== 'Default' ? <p>{item.variantName}</p> : null}
                <form>
                    <label htmlFor="itemCount">
                        Count:
                        <input type='number' value={item.itemCount} onChange={(event) => onHandleItemUpdate({ event, id: item.id })} />
                    </label>
                </form>
                <p>SubTotal: ${(item.price * item.itemCount).toFixed(2) || '0.00'}</p>
            </div>
        </li>
    );
}