'use client'
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { Button } from "../ui/button";
import urlFor from "../../../sanity/lib/Image";
import Wrapper from "../ui/wrapper";
import { ShoppingCart } from "lucide-react";
import Cart_Button from "../ui/cart_Button";
import { Reference } from "sanity";
import { I_Product } from "@/app/(pages)/[products]/page";
type image={}


const Mycard = ({ item}:any ) => {
  const [quantity, setQuantity] = useState(1);
  const sizes = ["xs", "s", "m", "l", "xl"];
  
    const itemWithQuantity:I_Product = { ...item , quantity: quantity };

  
  
  function subraction(quantity: number) {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function addition(quantity: number) {
    setQuantity(quantity + 1);
  }
  return (
    
   <>
    
      <div className="">
        <div className="border-0 pl-0  -ml-8 ">
          {/* left */}
          <CardHeader>
            <div className="lg:flex lg:gap-x-6 lg:items-start lg:justify-center">
              <div className="flex mb-24">
                <div
                  className="z-10 w-60 sm:w-48 md:w-40
          
              "
                >
                   
                 <Image
                  src={urlFor(item.image.asset._ref).url()}
                  width={250}
                  height={250}
                  alt="product small image"
                /> 
                
                
                  
                </div>
                <div className="pl-4 z-10 max-w-xl">
                <Image
                    src={urlFor(item.image.asset._ref).url()}
                    alt="product large image"
                    width={1000}
                    height={1000}
                  />
                  
                </div>
              </div>
              <div className="lg:mt-12">
                <CardTitle className="text-gray-800  semifont-bold text-3xl">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-2xl uppercase font-bold text-gray-300">
                  {item.type}
                </CardDescription>
                <CardContent>
                  <h1 className="uppercase mt-8 text-base font-bold">
                    Select Size
                  </h1>
                  <ul className="flex mt-4 max-w-sm   ">
                    {sizes.map((item,i) => (

                      <h1 key={i} className="hover:cursor-pointer hover:shadow-slate-900 hover:shadow-2xl w-12 align-middle items-center pt-1.5 text-center h-12  hover:bg-white rounded-full mx-auto text-2xl text-[#666] font-semibold">
                        {item}
                      </h1>
                    ))}
                  </ul>
                </CardContent>
                 <CardFooter className="my-5">
                  <h1 className="text-lg font-bold mr-12">Quantity:</h1>

                  <div className="flex items-center">
                    <Button onClick={() => subraction(quantity)}>-</Button>
                    <div className="mx-3 text-xl font-semibold">{quantity}</div>
                    <Button onClick={() => addition(quantity)}>+</Button>
                  </div>
                </CardFooter>

                <div className="flex justify-items-start gap-x-5 ml-6 items-center">
                  <Cart_Button data={itemWithQuantity} />

                  <h2 className="text-gray-800 font-semibold text-4xl">
                    ${item.price}
                  </h2>
                </div>
              </div>
            </div>
          </CardHeader>
        </div>

        <Card className="bg-white z-10 mt-16 lg:px-16 px-8 pb-16 pt-24">
          <CardHeader className="pb-12 relative">
            <CardTitle className=" z-10 text-gray-800  font-bold  text-3xl tracking-wider">
              Product Information
            </CardTitle>
            <div className="text-[5.7rem]  -top-10 left-0 lg:left-7 lg:font-black lg:text-[6.5rem] z-0 absolute text-[#f2f3f7] font-extrabold ">
              Overview
            </div>
          </CardHeader>
          <CardContent className="flex pt-10 border-t-4 gap-x-8">
            <CardTitle className="uppercase w-[100px] lg:w-4/12 font-bold text-xl text-slate-600">
              {" "}
              Product Details
            </CardTitle>
            <CardDescription className="text-gray-800 lg:w-8/12 tracking-[0.1rem] text-lg">
              {item.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex gap-x-8  items-start">
            <CardTitle className="uppercase w-[100px]  lg:w-4/12 font-bold text-xl text-slate-600">
              Product Care
            </CardTitle>
            <CardDescription>
              <ul className="text-gray-800 tracking-[0.1rem] lg:w-8/12 text-lg font-bold">
                {item.care.map((item: string, i: number) => (
                  <li className="list-disc" key={i}> {item}</li>
                ))}
              </ul>
            </CardDescription>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Mycard;
