import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = () => {
        console.log('added');
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Cart container</h1>
            </div>
        </div>
    );
};

export default Shop;