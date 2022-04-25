import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {

    const { selectedProduct, handleAddToCart } = props;
    //console.log(selectedProduct);
    const { name, img, price, seller, ratings } = selectedProduct;


    return (
        <div className="product">
            <img src={img} alt="productImage" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price:$ {price}</p>
                <p>Seller: {seller}</p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(selectedProduct)} className="btn-cart">
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;