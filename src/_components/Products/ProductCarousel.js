import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const ProductCarousel = (productImages) => {
  
  let images = productImages.productImage.map((image, index) => {
    return(
      <div key={index}>
        <img src={image} width="100%" height="400"/>
      </div>
    )
  })
  return(
    <Carousel autoPlay={true} 
    showThumbs={false} 
    showStatus={false}>
     {images}
    </Carousel>
  )
}

export default ProductCarousel;