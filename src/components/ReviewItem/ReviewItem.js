import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const { name, price, quantity, shipping } = props.product;
    return (
        <div>
            <h3>this is review item: {name}</h3>
            <p>Price :$ {price}</p>
            <p>Quantity :$ {quantity}</p>
            <p>Shipping Charge :$ {shipping}</p>
        </div>
    );
};

export default ReviewItem;