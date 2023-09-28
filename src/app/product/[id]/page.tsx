import { I_Product, getData } from "@/app/(pages)/[products]/page";
import Mycard from "@/components/section/MyCard";
import Footer from "@/components/section/Footer";
import Navbar from "@/components/section/Navbar";
import Wrapper from "@/components/ui/wrapper";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { id: string };
};

const page = async ({ params, searchParams }: Props) => {
  const data: I_Product[] = await getData();

  var myItem: undefined|I_Product = data.find(
    (item: I_Product) => item.slug.current == params.id
  );
  

  return (
    <div className="">
      <Navbar />
      <div className="relative">
        <Wrapper>
          { (typeof myItem != 'undefined') &&(<Mycard item={myItem} />)}
          
          
        </Wrapper>
        <div className="absolute -z-50 bg-zinc-400  -bottom-12  w-screen   -top-8  opacity-5   overflow-hidden right-0 "></div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
