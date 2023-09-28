'use client'
import React, { useEffect } from "react";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "@clerk/nextjs"; 
import { I_Product } from "@/app/(pages)/[products]/page";


const Cart_Button = (data:any) => {
 
 
 const {userId}=useAuth()
 
  const handleCart=async ()=>{
    const res= await fetch("http://localhost:3000/api/cart", {
     method: "POST",
     body: JSON.stringify({
       product_id: data.data._id,
       product_quantity: data.data.quantity,
       product_title: data.data.title,
       product_price: data.data.price,
       product_type: data.data.type,
       product_image: data.data.image.asset._ref,
       customer_user_id:userId
      })
   
 })
  }

    

  return (
    <Button onClick={handleCart} className="py-6  my-3 text-lg font-semibold ">
      {" "}
      <ShoppingCart className="mr-3 w-5" /> Add To Cart{" "}
    </Button>
  );
};

export default Cart_Button;
