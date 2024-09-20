import React from 'react'
import { Rating } from '@mui/material'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom'
function ProductCard({ product, flex, renderDescription}) {
  // assign default values in case the destructure elements are missing this is the default value
  const {
    image = "",
    title = "",
    id = "",
    rating = { rate: 0, count: 0 },
    price = 0,
    description = "",
  } = product;

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {
          renderDescription && 
          <div style={{
            maxWidth:"750px"
          }}>
            {description}
          </div>
        }
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard