"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/ui/wrapper";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import { cookies } from "next/headers";
import { I_Product } from "../(pages)/[products]/page";
import next from "next";
import Image from "next/image";
import urlFor from "../../../sanity/lib/Image";
import { Reference } from "sanity";
import { useAuth } from "@clerk/nextjs";
type Props = {};
export interface C_Product {
  Id: string;
  Product_id: string;
  User_id: string;
  Product_quantity: number;
  Product_title: string;
  Product_type: string;
  Product_price: number;
  Product_image: Reference;
}

const page = (props: Props) => {
  const [data, setData] = useState<any | null>(null);
const [reload,setReload]=useState<boolean>(false)
  const { userId, isSignedIn } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:3000/api/cart?User_id=${userId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [isSignedIn,reload]);

  
  const handleDelete = async (Id:string) => {
    const res = await fetch(`http://localhost:3000/api/cart`,{
      method:'DELETE',
      body:JSON.stringify({
        user_Id:userId,
Id:Id}
      )
    }
    );
  setReload(!reload)
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        {data?.res.map((item: C_Product) => (
          <div className="grid grid-cols-1 w-64">
            <div className="w-64 h-64 mt-8  ">
              <Image
                className="rounded-xl"
                src={urlFor(item.Product_image).url()}
                alt="cart product"
                height={400}
                width={400}
              />
            </div>
            <div className="flex justify-between mt-20 ">
              <h1 className="text-gray-800 text-xl font-medium tracking-wider">
                {item.Product_title}
              </h1>
              <div onClick={()=>handleDelete(item.Id)} className="-mt-1">
                {
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="🔍-Product-Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="ic_fluent_delete_48_regular"
                        fill="#212121"
                        fill-rule="nonzero"
                      >
                        <path
                          d="M24,7.25 C27.1017853,7.25 29.629937,9.70601719 29.7458479,12.7794443 L29.75,13 L37,13 C37.6903559,13 38.25,13.5596441 38.25,14.25 C38.25,14.8972087 37.7581253,15.4295339 37.1278052,15.4935464 L37,15.5 L35.909,15.5 L34.2058308,38.0698451 C34.0385226,40.2866784 32.1910211,42 29.9678833,42 L18.0321167,42 C15.8089789,42 13.9614774,40.2866784 13.7941692,38.0698451 L12.09,15.5 L11,15.5 C10.3527913,15.5 9.8204661,15.0081253 9.75645361,14.3778052 L9.75,14.25 C9.75,13.6027913 10.2418747,13.0704661 10.8721948,13.0064536 L11,13 L18.25,13 C18.25,9.82436269 20.8243627,7.25 24,7.25 Z M33.4021054,15.5 L14.5978946,15.5 L16.2870795,37.8817009 C16.3559711,38.7945146 17.116707,39.5 18.0321167,39.5 L29.9678833,39.5 C30.883293,39.5 31.6440289,38.7945146 31.7129205,37.8817009 L33.4021054,15.5 Z M27.25,20.75 C27.8972087,20.75 28.4295339,21.2418747 28.4935464,21.8721948 L28.5,22 L28.5,33 C28.5,33.6903559 27.9403559,34.25 27.25,34.25 C26.6027913,34.25 26.0704661,33.7581253 26.0064536,33.1278052 L26,33 L26,22 C26,21.3096441 26.5596441,20.75 27.25,20.75 Z M20.75,20.75 C21.3972087,20.75 21.9295339,21.2418747 21.9935464,21.8721948 L22,22 L22,33 C22,33.6903559 21.4403559,34.25 20.75,34.25 C20.1027913,34.25 19.5704661,33.7581253 19.5064536,33.1278052 L19.5,33 L19.5,22 C19.5,21.3096441 20.0596441,20.75 20.75,20.75 Z M24,9.75 C22.2669685,9.75 20.8507541,11.1064548 20.7551448,12.8155761 L20.75,13 L27.25,13 C27.25,11.2050746 25.7949254,9.75 24,9.75 Z"
                          id="🎨-Color"
                        ></path>
                      </g>
                    </g>
                  </svg>
                }
              </div>
            </div>
            <h2 className="text-slate-600 mt-2 font-semibold text-base tracking-wide">
              {item.Product_type}
            </h2>
            <h2 className="text-gray-800 mt-1.5 font-semibold text-base tracking-wide">
              Delivery Estimation
            </h2>
            <h2 className="mt-1.5 text-base tracking-wide font-semibold text-yellow-500">
              5 Working Days
            </h2>
          </div>
        ))}
      </Wrapper>
      <Footer />
    </>
  );
};

export default page;
8;
