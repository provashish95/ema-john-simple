import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const { name, img, price, seller, ratings } = props.product;

    return (
        <div className="product">
            <img src={img} alt="productImage" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price:$ {price}</p>
                <p>Seller: {seller}</p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={props.handleAddToCart} className="btn-cart">
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;