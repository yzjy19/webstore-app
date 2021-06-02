import React, { useState, useEffect } from 'react';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
import { Products, Navbar } from './components';
import { commerce } from './lib/shop';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async (req, res) => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(products);
    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
            <Products products={products} onAddToCart={handleAddToCart} />
        </div>
    )
}

export default App
