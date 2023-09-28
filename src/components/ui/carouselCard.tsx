"use client";
import Image from "next/image";
import React from "react";
import { I_Product } from "@/app/(pages)/[products]/page";
import { getData } from "@/app/(pages)/[products]/page";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Reference } from "sanity";
import urlFor from "../../../sanity/lib/Image";

type Props = { title: string; price: number; img: Reference; type: string };
const responsive = {
  LargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1000, min: 767 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 767, min: 639 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};
const Carousel_Card = async () => {
  const data = await getData();

  return (
    <>
      <Carousel
        className="max-w-7xl mt-[74px]  mr-auto"
        responsive={responsive}
        swipeable={false}
        draggable={false}
        ssr={true} // means to render carousel on server-side.
        slidesToSlide={2}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((item: I_Product) => (
          <div
            key={item._id}
            className=" hover:w-96  "
          >
            <div>
              <Image
                className="  w-full h-[350px] mx-0   md:w-64 md:h-64 lg:h-64 lg:w-64 object-fit"
                src={urlFor(item.image).url()}
                width={550}
                height={480}
                alt="Product"
              />
              <h2 className="text-black font-semibold mt-1 pl-4">
                {" "}
                {item.title}
              </h2>

              <h2 className="text-black font-semibold pl-4"> ${item.price}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousel_Card;
