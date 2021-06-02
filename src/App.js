import React, { useState, useEffect } from 'react';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
import { Products, Navbar } from './components';
import { commerce } from './lib/shop';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async (req, res) => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);
    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App
