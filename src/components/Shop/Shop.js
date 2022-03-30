import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        //console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {
            //console.log(id);
            const addedProduct = products.find(selectedProduct => selectedProduct.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

    }, [products])

    const handleAddToCart = (selectedProduct) => {
        //console.log(selectedProduct);
        let newCart = [];
        const exited = cart.find(product => product.id === selectedProduct.id);
        if (!exited) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exited.quantity = exited.quantity + 1;
            newCart = [...rest, exited];
        }
        //console.log(newCart);
        setCart(newCart);

        addToDb(selectedProduct.id);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(selectedProduct => <Product key={selectedProduct.id} selectedProduct={selectedProduct} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;