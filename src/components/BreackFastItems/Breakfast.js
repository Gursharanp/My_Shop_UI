import React,{useContext} from 'react';
import CartContext from '../../context/CartContext';
import styles from '../../style/Breakfast.module.css'


    export default function Breakfast({name,image,price,id,weight,countInStock}) {
     
    
        let {addToCart}=useContext(CartContext);

        let handleClick = () => {
            addToCart(id, name,price, image,countInStock)
        }

    return (
        <div className={styles.breakfastprod}>
            <div className={styles.headerbreakfast}>
                 <img className='breakfatimg'
            src={image}/>
            </div>
            <div className={styles.breakid}>
            </div>
            <div className={styles.breakname}>
                Name:{ name}
            </div>

            <div className={styles.breakweight}>
                Weight:{ weight}
            </div>
            <div className={styles.price}>
                Rs.{ price}
            </div>

            <div className={styles.breakbtn}>
                <button onClick={handleClick}>Add+</button>
            </div>

        </div >)

}
