import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../Api/endPoints";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //  console.log(productId);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  console.log("product", product);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} renderDescription={true} renderAdd={true} />
      )}
    </Layout>
  );
}

export default ProductDetail;
