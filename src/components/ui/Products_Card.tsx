import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import Image_1 from "/public/event1.webp";
import Image_2 from "/public/event2.webp";
import Image_3 from "/public/event3.webp";
import urlFor from "../../../sanity/lib/Image";



import { Reference } from "sanity";




type Props ={ type: string; title: string; price: number; img: Reference; }

const Products_Card:FC<Props> = (props ) => {
  return (
    <div>
<Image
              className="  w-[250px] md:w-64 md:h-64 lg:h-64 lg:w-64 object-top"
              src={urlFor(props.img).url()}
              width={350}
              height={400}
              alt="Product"
            />
            <h2 className='text-black font-semibold mt-1 pl-1'> {props.title}</h2>
            <h3 className='font-semibold text-base text-[#888] my-0.5 pl-1 '>{props.type}</h3>
            <h2 className='text-black font-semibold pl-1'> ${props.price}</h2>
            
    </div>
  )
}

export default Products_Card