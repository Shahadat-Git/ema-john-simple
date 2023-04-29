import React from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="products-container">
                <Products></Products>
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;