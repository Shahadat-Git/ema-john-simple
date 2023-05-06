import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // console.log(cart);

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        // console.log(cost.price)
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping ;
        quantity = quantity + product.quantity;
    };
    const tax = total*7/100;
    const grandTotal = tax + totalShipping + total;
    
    // console.log(total)
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Seleted Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;