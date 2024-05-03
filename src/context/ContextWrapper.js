import React, { useState } from 'react';
import UserContext from './ContetCreater';
import FilterContext from './FilterContext'
import CartContext from './CartContext';
export default function ContextWrapper({ children }) {

    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [productarr,setProductArr]=useState([]);
    const [filter,setFilter]=useState({
        search:""
    });
    function addToCart(id, name,price, image,countInStock) {
        if (countInStock === 0) return;
        let search = cart.find(function (arrele) {
            if (arrele.id == id) {
                return true
            } else {
                return false;
            }
        });
        if (search) {
            if (search.countInStock > search.countInCart + 1) {
                search.countInCart += 1;
                setCart([...cart]);
            }
        } else {
            cart.push({
                id,
                name,
                image,
                price,
                countInStock,
                countInCart: 1
            })
            setCart(cart)
        }
    }
    function removeFromCart(id) {
        setCart(cart.filter(item => item.id !== id));
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            <FilterContext.Provider value={{filter,setFilter}}>
            <UserContext.Provider value={{ user, setUser,productarr,setProductArr }}>
                {children}
            </UserContext.Provider>
            </FilterContext.Provider>
        </CartContext.Provider>
    );
}
