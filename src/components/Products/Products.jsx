import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', image: 'https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw501fef3d/images/ProductImages/110324/110324_434_l_WR.jpg?sw=900', description: 'Running shoes', price: '$10'},
    {id: 2, name: 'IPad', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRY7OzpCf_O8aztbKv05Yb0IH8b0GPZehSw&usqp=CAU', description: 'Apple IPad', price: '$100'}
]

const Products = () => {
    return (
      <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>  
    )
}

export default Products;