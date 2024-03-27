import React from 'react'
import ProductCard from '@/app/components/product-card';

const ProductDetails= async({params}) =>{
    const res = await fetch(`https://dummyjson.com/products/${params.id}`)
    const product = await res.json();
    console.log(product)
    console.log(params)
    return(
        <div>
            <ProductCard product={product} />
            <p>Price$:{product.price}</p>
            <p>Brand:{product.brand}</p>
            <p>Category:{product.category}</p>
        </div>
    )
}
export default ProductDetails