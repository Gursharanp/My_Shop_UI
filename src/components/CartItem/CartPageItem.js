import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../style/CartPageItem.module.css'
import CartContext from '../../context/CartContext';

export default function CartPageItem({ id, name, image, price, countInStock, countInCart }) {
    const [count, setCount] = useState(countInCart);
    let { removeFromCart } = useContext(CartContext);
    const fn = () => {
        removeFromCart(id)
    }
    const Increase = () => {
        if (countInStock > count) {
            setCount(count + 1);
        }
    }
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <div className={styles.cpage}>
            
            <div className={styles.cartItem}>
                <div className={styles.img}>

                    <img src={image} />
                </div>
                <div className={styles.right}>
                    <div className={styles.cwrapper}>
                        <div className={styles.name}>
                            Name:{name}
                        </div>
                        <div className={styles.price}>

                            Rs. {price}
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button onClick={decrease} className={styles.b1}>-</button>
                       <div> {count}</div>
                        <button onClick={Increase} className={styles.b2}>+</button>

                    </div>
                        <button onClick={fn} className={styles.b3}>Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}
