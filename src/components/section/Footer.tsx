import Image from "next/image";
import React from "react";

import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="relative   ml-4   xs:ml-6 xs2:ml-8 lg1:ml-[74px] sm:ml-10 md:ml-16  mt-12 lg:max-w-7xl xl:max-w-[120rem] gap-x-12 z-0">
        <div className="xl:grid xl:grid-cols-4  lg1:grid lg1:gap-y-16 lg1:grid-cols-2 lg1:gap-x-80 xl:gap-x-24   block mt-32 justify-between xl:justify-center  ">
      
        {/* dine */}
        <div className="max-w-sm  ">
          {/* website logo */}
          <div >
            <Image
              src={"/dine.webp"}
              alt="dine logo"
              width={150}
              height={100}
            />
          </div>
          {/* paragraph */}
          <p className="my-8 text-xl text-slate-600">
            {" "}
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          {/* link logos */}
          <div className="flex justify-start ">
            <div className="mx-2 hover:cursor-pointer">
              <SocialIcon 
                network="twitter"
                fgColor="#413839"
                bgColor="#c0c2c9"
              />
            </div>
            <div className="mx-2 hover:cursor-pointer">
              <SocialIcon
                network="facebook"
                fgColor="#413839"
                bgColor="#c0c2c9"
              />
            </div>
            <div className="mx-2 hover:cursor-pointer">
              <SocialIcon
                network="linkedin"
                fgColor="#413839"
                bgColor="#c0c2c9"
              />
            </div>
          </div>
        </div>
        {/* company */}
        <div className="lg1:mt-0  mt-12 xl:pl-16">
          <h1 className="text-gray-800 font-bold text-2xl">Company</h1>
          <ul className="text-slate-600 text-xl">
            <li className="my-3 hover:cursor-pointer">About</li>
            <li className="mb-3 hover:cursor-pointer">Terms of Use</li>
            <li className="mb-3 hover:cursor-pointer">Privacy Policy</li>
            <li className="mb-3 hover:cursor-pointer">How it Works</li>
            <li className="mb-3 hover:cursor-pointer">Contact Us</li>
          </ul>
        </div>
        {/* support */}
        <div className="lg1:mt-0 mt-12 xl:pl-4">
          <h1 className="text-gray-800 font-bold text-2xl">Support</h1>
          <ul className="text-slate-600 text-xl">
            <li className="my-3 hover:cursor-pointer">Support Carrer</li>
            <li className="mb-3 hover:cursor-pointer">24th Service</li>
            <li className="mb-3 hover:cursor-pointer">Quick Chat</li>
          </ul>
        </div>
        {/* contact */}
        <div className="lg1:mt-0 mt-12 text-xl ">
          <h1 className="text-gray-800 font-bold text-2xl"> Contact</h1>
          <ul className="text-slate-600">
            <li className="my-3 hover:cursor-pointer">Watsapp</li>
            <li className="mb-3 hover:cursor-pointer">Support 24th</li>
          </ul>
        </div>
      </div>
{/* lower footer */}

      <div className="pt-4 absolute right-0  w-screen pl-20  sm:pl-24 md:pl-20 lg:pl-36 xl:pl-44   pb-6 text-xl border-t-2 border-slate-600 mt-24 ">
      <div className="md:grid md:grid-cols-2  lg1:grid lg:grid-cols-3 md:justify-between">
        <div className="flex my-3 lg1:block  md:ml-6 lg1:my-4">
          <h2 className="text-slate-600  ">Copyright © 2022 </h2>
          <p className="text-gray-800 ml-1 font-bold " > Dine Market</p>
        </div>
        <div className="flex mb-3 md:my-3 lg1:block  md:ml-6 lg1:my-4 ">
          <h2 className="text-slate-600 ">Design By.</h2>
          <p className="text-gray-800 ml-1 font-bold"> Weird Design Studio</p>
        </div>
        <div className="flex mb-3 md:mt-4 lg1:block md:ml-6 lg1:my-4">
          <h2 className="text-slate-600">Coded By.</h2>
          <p className="text-gray-800 ml-1 font-bold "> Haris</p>
        </div>
      
        </div>
       </div>
       </div>
    </>
  );
};

export default Footer;
