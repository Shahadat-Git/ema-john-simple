import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // console.log(cart);

    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        // console.log(cost.price)
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    };
    const tax = total*7/100;
    const grandTotal = tax + totalShipping + total;
    
    // console.log(total)
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Seleted Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;