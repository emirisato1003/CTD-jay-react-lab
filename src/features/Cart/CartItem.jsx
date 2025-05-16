import placeholder from '../../assets/placeholder.png';
import styles from './CartItem.module.css';

export default function CartItem({ item, onHandleItemUpdate }) {
    console.log(item.price);
    return (
        <li className={styles.item}>
            <img src={placeholder} alt="" className='cartListItemImage' />
            <div>
                <h3>{item.baseName}</h3>
                {item.variantName !== 'Default' ? <p>{item.variantName}</p> : null}
            </div>
            <div className={styles.subtotal}>
                <form>
                    <label htmlFor="itemCount">
                        Count:
                        <input type='number' value={item.itemCount} onChange={(event) => onHandleItemUpdate({ event, id: item.id })} />
                    </label>
                </form>
                <p>SubTotal: ${(item.price * item.itemCount).toFixed(2) || '0.00'}</p>
            </div>
        </li >
    );
}