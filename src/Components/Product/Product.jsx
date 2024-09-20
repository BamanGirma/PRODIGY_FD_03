import React, { useState,useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "./product.module.css";
import Loader from '../Loader/Loader';
function Product() {
    const[products,setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((res) =>{
        // console.log(res);
        setProducts(res.data);
        isLoading(false);
      }).catch((err) =>{
        console.log(err);
        isLoading(false);
      })
      
    }, [])
    //  console.log("products", products);
  return (
    <>
      {isLoading ? (<Loader/>) : (
        <section className={classes.products__container}>
          {products.map((singleProduct, i) => {
            return <ProductCard product={singleProduct} key={i} />;
          })}
        </section>
      )}
    </>
  );
}

export default Product