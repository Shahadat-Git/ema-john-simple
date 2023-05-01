import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [cart, setCart] = useState([])
    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart)
    }, [])
    const handleAddToCart = (product)=>{
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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