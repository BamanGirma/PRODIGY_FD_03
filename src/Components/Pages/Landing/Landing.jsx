import React from 'react'
import CarouselEffect from '../../Carousel/CarouselEffect';
import Category from '../../Category/Category';
import Layout from '../../Layout/Layout';
import Row from '../../Row/Row';
import Product from '../../Product/Product';
function Landing() {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Row/>
      <Product/>
    </Layout>
  );
}

export default Landing