import React from 'react';
import Cart from '../CartItem/Cart';
import FruitsSing from './FruitsSing';
import { Link } from 'react-router-dom';
import styles from '../../style/FruitsSing.module.css'
import arr from './FruitDataSing';
export default function ContentFruitsSing() {
    console.log(arr, "asa");
    return <div className={styles.fcontent}>
        <div className={styles.head}>
            <Link to="/">
                <div className={styles.bhome}>
                    Home
                </div>
            </Link>

            <div className={styles.licon}>
                <img src="https://blinkit.com/images/header/blinkit_logo-3898547.png" />
            </div>
            <div className={styles.myCart}>
                <Cart />
            </div>
            
        </div>
        <div className={styles.fruithead}>Fruits & Vegetables </div>
        <div className={styles.maparr}>
            {
                arr.map((breakfastprod) => {
                    return (

                        <FruitsSing
                            key={breakfastprod.id}
                            name={breakfastprod.name}
                            id={breakfastprod.id}
                            weight={breakfastprod.weight}
                            price={breakfastprod.price}
                            image={breakfastprod.image}
                            countInStock={breakfastprod.countInStock} />
                    )
                })
            }
        </div>
    </div>
}
