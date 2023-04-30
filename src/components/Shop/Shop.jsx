import React, { useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [cart, setCart] = useState([])
    const handleAddToCart = (product)=>{
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                <Products handleAddToCart={handleAddToCart}></Products>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;