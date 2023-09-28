import Image_1 from "/public/event1.webp";
import Image_2 from "/public/event2.webp";
import Image_3 from "/public/event3.webp";
import client from "../../../../sanity/lib/sanity_Client";
import Image from "next/image";
import urlFor from "../../../../sanity/lib/Image";
import React from "react";
import { Reference } from "sanity";
import Footer from "@/components/section/Footer";
import Navbar from "@/components/section/Navbar";
import Wrapper from "@/components/ui/wrapper";
import Link from "next/link";
import Products_Card from "@/components/ui/Products_Card";
export interface I_Product {
  title: string;
  description: string;
  image: Reference ;
  image2:  { _type: 'image', asset: {_ref:Reference} };
  price: number;
  category: {
    name: string;
  };
  _id: string;
  type: string;
  slug: { current: string; _type: "slug" };
  care: string[];
  quantity?:number;
}

export const getData = () => {
  const res = client.fetch(`*[_type=="product"]{
    title,
    description,
    image,
    price,
    _id,
    type,
    care,
    slug,
    category->{name}
  }`);
  return res;
};

const getProductsByCategory = async (category: string) => {
  const data = await getData();
  
  if (category !== "All") {
    return data.filter(
      (products: I_Product) => products.category.name == category
    );
  } else return data;
};

export default async function GiveName({
  params,
  searchParams,
}: {
  params: { products: string };
  searchParams: { id: string };
}) {
  const ProductsByCategory: I_Product[] = await getProductsByCategory(
    params.products
  );

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="flex  mt-12  items-center justify-center  md:justify-between md:pr-20 lg:pr-24  px-5  md:pl-16 lg:pl-0  mx-auto max-w-[240rem]  ">
          <div className="grid lg:grid-cols-[repeat(3,auto)] xl:grid-cols-[repeat(4,auto)]  md:grid-cols-[repeat(2,auto)]  justify-between gap-y-16  md:gap-y-16  min-[830px]:gap-x-40 min-[930px]:gap-x-64 md:gap-x-32 lg:gap-x-20 xl:gap-x-16 2xl:gap-x-32 3xl:gap-x-48 4xl:gap-x-56">
            {ProductsByCategory.map((item) => (
              <div key={item._id}>
                <Link href={`/product/${item.slug.current}`}>
                  
                
                  
                  <Products_Card
                    type={item.type}
                    title={item.title}
                    price={item.price}
                    img={item.image}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
