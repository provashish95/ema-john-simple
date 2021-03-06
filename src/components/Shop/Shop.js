import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css';


const Shop = () => {
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size]);

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

    /*  useEffect(() => {
         const storedCart = getStoredCart();
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
     }, [products]) */

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
                            .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }

                    <select onChange={e => setSize(e.target.value)}>
                        <option value="9">9</option>
                        <option value="5">5</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
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