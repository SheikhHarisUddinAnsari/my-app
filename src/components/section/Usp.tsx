import React from "react";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
type Props = {};

const usp = (props: Props) => {
  return (
    <div className="mt-32 lg2:flex  gap-x-20">
      
        {/* left */}
        <div className="lg2:w-4/12 " >
        <h1 className="w-7/12 lg2:hidden font-extrabold tracking-wide text-gray-800 text-4xl md:text-5xl">
            Unique and Authentic Vintage Designer Jewellery
          </h1>    
          
          <div className="grid gap-y-10 grid-cols-2 gap-x-4 lg2:pt-40  mt-10 lg2:gap-x-10 relative ">
          
            <div>
              <h2 className="text-black font-semibold text-xl">
                Using Good Quality Materials
              </h2>
              <p className="mt-3 text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h2 className="text-black font-semibold text-xl">
                100% Handmade Products
              </h2>
              <p className="mt-3 text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h2 className="text-black font-semibold text-xl">
                Modern Fashion Design
              </h2>
              <p className="mt-3 text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h2 className="text-black font-semibold text-xl">
                Discount For Bulk Orders
              </h2>
              <p className="mt-3 text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
<div className="opacity-20 absolute bottom-20 tracking-widest text-slate-400 font-black lg2:text-7xl text-5xl xs:text-7xl lg1:text-9xl ">Different from others</div>
          </div>

        </div>

        {/* right  */}
       <div>
       <h1 className="w-[500px] hidden lg2:block font-extrabold tracking-wide text-gray-800 text-4xl md:text-5xl">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        <div className="sm:flex sm:flex-1 lg2:w-auto">
        
           {/* <image href={"/event3.webp"}  width={200} height={300} className="object-cover"/> */}
<div className="mt-12 mx-auto lg2:w-auto lg2:h-auto sm:w-1/2 md:w-5/12 xl:w-72">

          <Image className="mx-auto" src={"/event3.webp"} width={300} height={350} alt="usp image"/>
          </div>
         <div className="sm:w-1/2 md:w-7/12 lg2:ml-12  items-center my-auto"> 
          <p className="mt-10 md:mt-24 text-slate-600 md:w-11/12 lg2:w-64 ">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
          <Link href={'/All'}>
          <Button className="mt-10 py-6 px-6 sm:w-28 sm:py-8 md:w-auto">See All Products</Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default usp;
