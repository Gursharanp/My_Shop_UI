import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
    let item = 0;
    let { cart } = useContext(CartContext);
    
    console.log(cart)
    for (let i = 0; i < cart.length; i++) {
        item += cart[i].countInCart;
    }

    return (
        <>
            <div className='my-cart'>
                <Link to="/CartPage">
                    <button>
                        <i className="fa fa-shopping-cart"></i>
                        my Cart  <span style={{ color: "white", padding: "2px", borderRadius: "50%" }}> {item} </span>
                    </button>
                </Link>
            </div>

        </>
    )
}
