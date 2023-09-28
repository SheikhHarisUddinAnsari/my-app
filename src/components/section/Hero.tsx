import { ShoppingCart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-5/12 flex-1 ">
        <h2 className="bg-sky-100 w-36 text-center px-7 py-2 rounded-xl md:my-12 mb-12   text-[#0000ff] text-lg font-bold">
          Sale 70%
        </h2>
        <h1 className="scroll-m-20 text-gray-800 text-5xl font-extrabold tracking-wider lg:text-6xl xl:text-7xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 text-md md:text-lg lg:text-xl font-normal text-slate-600 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>

        <Link href={"/All"}>
        <Button className="md:pr-10 md:pl-4 pr-12 pl-0 mb-4 mt-8 md:w-48 md:h-20 w-auto h-16">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="26"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
          >
            …
          </svg>
          <ShoppingCart className="mr-3  md:w-24 h-6 w-8" /> Start Shopping
        </Button>
        </Link>

        <div className="mt-4">
          <ul className="grid lg:grid-cols-4  grid-cols-2 gap-y-4">
            <li>
              <Image
                src={"/Featured1.png"}
                alt="feature 1"
                height={32}
                width={102}
              />
            </li>
            <li>
              <Image
                src={"/Featured2.png"}
                alt="feature 1"
                height={32}
                width={102}
              />
            </li>

            <li>
              <Image
                src={"/Featured3.png"}
                alt="feature 1"
                height={32}
                width={102}
              />
            </li>
            <li>
              <Image
                src={"/Featured4.png"}
                alt="feature 1"
                height={32}
                width={102}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-7/12 md:flex-1 md:relative hidden md:block">
        <div>
          {" "}
          <Image
            className=" opacity-100 flex-1 z-10"
            alt="hero image"
            src={"/hero.webp"}
            height={900}
            width={600}
          />
        </div>
        <div className="lg:w-[440px] lg:h-[440px] md:w-[350px] md:h-[350px] min-[860px]:w-[390px] min-[860px]:h-[390px] min-[920px]:h-[425px] min-[920px]:w-[425px]  min-[1100px]:w-[475px]   min-[1100px]:h-[475px] min-[1180px]:h-[525px] min-[1180px]:w-[525px] xl:h-[575px] xl:w-[575px]   opacity-10 z-0 bg-rose-500 rounded-full absolute top-[25px] flex-1  "></div>
      </div>
    </div>
  );
};

export default Hero;
