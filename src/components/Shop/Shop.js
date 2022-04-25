import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])
    /*  useEffect(() => {
         fetch('http://localhost:5000/product')
             .then(res => res.json())
             .then(data => setProducts(data))
     }, []) */

    useEffect(() => {
        const storedCart = getStoredCart();
        //console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {
            //console.log(id);
            const addedProduct = products.find(selectedProduct => selectedProduct._id === id);
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
        const exited = cart.find(product => product._id === selectedProduct._id);
        if (!exited) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exited.quantity = exited.quantity + 1;
            newCart = [...rest, exited];
        }

        setCart(newCart);

        addToDb(selectedProduct._id);
    }


    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(selectedProduct => <Product key={selectedProduct._id} selectedProduct={selectedProduct} handleAddToCart={handleAddToCart}></Product>)
                }

                <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button>{number}</button>)
                    }
                </div>

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;