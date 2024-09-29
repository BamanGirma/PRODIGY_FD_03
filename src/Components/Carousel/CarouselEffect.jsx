import React from 'react'
import {Carousel} from 'react-responsive-carousel' 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from './images/data'
import classes from './Carousel.module.css'
function CarouselEffect() {
  return (
    <div>
        <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        >

            {
                img.map((imageItemLink) =>{
                    return <img src={imageItemLink} key={imageItemLink}/>
                } )
            }
        </Carousel>
        <div
        className={classes.hero__img}>
        </div>
    </div>
  )
}

export default CarouselEffect