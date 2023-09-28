
import Image from "next/image";
import React from "react";


import Carousel_Card from "../ui/carouselCard";
import urlFor from "../../../sanity/lib/Image";
type Props = {};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  
const Products = async (props: Props) => {


  return (

    <div className="mt-32">
      <h3 className="text-center  my-3  text-[#0000ff] text-sm font-bold tracking-widest uppercase">
        Products
      </h3>
      <h1 className="text-4xl text-gray-800 font-bold text-center ">
        Check what we have
      </h1>
<Carousel_Card/>
    
    </div>
    
  );
};

export default Products;
