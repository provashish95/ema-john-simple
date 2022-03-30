import React from 'react';
import useProducts from '../../hooks/useProducts';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();

    return (
        <div>
            <h1>this is orders page: {products.length}</h1>
        </div>
    );
};

export default Orders; 