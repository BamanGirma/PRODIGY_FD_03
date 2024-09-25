import React, { useState, useEffect } from "react";
import classes from './results.module.css'
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import {productUrl} from '../../../Api/endPoints'
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";
function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        //  console.log(res.data);
        setResults(res.data);
        isLoading(false);
      })
      .catch(() => {
        console.log(err);
        isLoading(false);
      });
  }, []);

  //  console.log("results",results);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{categoryName}</p>
          <hr />
          <div className={classes.products__container}>
            {results.map((product) => {
              return <ProductCard id={product.id} product={product} renderDescription={false} renderAdd={true} />;
            })}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
