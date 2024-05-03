import React, { useContext } from 'react';
import CartPageItem from './CartPageItem';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from '../../style/CartPageItem.module.css'

export default function CartPage() {
    let { cart } = useContext(CartContext)
    let newarr = cart.map(item => (
        <CartPageItem

        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        countInStock={item.countInStock}
        countInCart={item.countInCart}
        />
    )

    )
    console.log(newarr.length)
    return (



        <div className={styles.content} style={{flexDirection:"column"}}>
            <div className={styles.head}>
                <Link to="/">
                    <div className={styles.bhome}>
                        Home
                    </div>
                </Link>

                <div className={styles.licon}>
                    <img src="https://blinkit.com/images/header/blinkit_logo-3898547.png" />
                </div>
            </div>
            <div className={styles.arr}> {newarr} </div>
        </div>


    );
}
