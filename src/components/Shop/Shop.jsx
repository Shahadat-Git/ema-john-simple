import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        // console.log("products", products)
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart)
        // step 1: get id
        for (const id in storedCart) {
            // get the product using id
            const addedPruduct = products.find(product => product.id == id)
            if (addedPruduct) {
                // step 3: get quantity of the product
                const quantity = storedCart[id]
                addedPruduct.quantity = quantity;
                // step 4: add the addedproduct to the save cart
                savedCart.push(addedPruduct)
                // console.log('added product', addedPruduct)
            }
        }
        // step 5: set the cart
        setCart(savedCart)

    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                <Products products={products} handleAddToCart={handleAddToCart}></Products>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;