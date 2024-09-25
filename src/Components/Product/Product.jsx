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
        setIsLoading(false);
      }).catch((err) =>{
        console.log(err);
        setIsLoading(false)
      })
      
    }, [])
    //  console.log("products", products);
  return (
    <>
      {isLoading ? (<Loader/>) : (
        <section className={classes.products__container}>
          {products.map((singleProduct, i) => {
            return <ProductCard product={singleProduct} key={i} renderAdd={true} />;
          })}
        </section>
      )}
    </>
  );
}

export default Product