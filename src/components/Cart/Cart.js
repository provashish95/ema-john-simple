import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Order summery: {cart.length}</h1>
            <h2>this is cart</h2>
        </div>
    );
};

export default Cart;