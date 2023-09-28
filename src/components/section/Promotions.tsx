import React from "react";
import Image from "next/image";
type Props = {};

const Promotions = (props: Props) => {
  return (
    <div className="mt-32">
      <h3 className="text-center  my-3  text-[#0000ff] text-sm font-bold tracking-widest uppercase">
        Promotions
      </h3>
      <h1 className="text-4xl text-gray-800 font-bold text-center ">Our Promotion Events</h1>
      <center>
      <ul className=" grid lg2:grid-cols-3  pt-8 grid-cols-1 md:justify-center md:self-center">
        <li className="md:w-full">
          {/* upper div of first column/div in md screen*/}
          <div className="bg-zinc-300 md:flex md:h-52">
            <div className="md:w-4/12 md:ml-8 py-2 md:py-0">
              <h2 className="sm:ml-16 mt-10 lg2:ml-0 uppercase lg2:tracking-normal min-[1150px]:tracking-widest text-3xl text-gray-900 font-extrabold text-center md:text-left min-[1150px]:mt-3 md:mt-2 ">
                GET UP TO <span className="text-4xl block">60%</span>
              </h2>
              <h3 className="text-slate-900 sm:ml-16  lg2:ml-0 tracking-wide md:tracking-normal  text-lg text-center md:text-left ">
                For the summer session
              </h3>
            </div>
            <div className="mx-auto w-60  md:w-8/12">
              <Image
                className="h-52 md:w-72 md:h-52"
                src={"/event1.webp"}
                alt={"event 1"}
                width={220}
                height={220}
              />
            </div>
          </div>
          {/* lower div of first column/div in md screen  */}
          <div className="bg-neutral-800 my-4 hidden md:block md:py-2 md:h-[180px]">
            <div>
              <h2 className="text-white tracking-widest mt-7 text-center text-4xl font-bold ">
                GET 30% Off
              </h2>
              <h3 className="text-white mt-3 tracking-wide uppercase  text-center text-sm">
                USE PROMO CODE
              </h3>
              <div className="text-sm  text-white mt-1 mb-8  md:font-semibold rounded-xl bg-zinc-700 w-10/12 mx-auto px-1 sm:px-12 py-2 ">
                <button className="uppercase text-left tracking-[4px] md:font-bold">
                  dineweekendsale
                </button>
              </div>
            </div>
          </div>
        </li>
        {/* second div of first column in sm screen  */}
        <li className="bg-neutral-800 my-4  md:hidden ">
          <div>
            <h2 className="text-white tracking-widest mt-8 text-center text-4xl font-bold ">
              Get 30% <span className="block">Off</span>
            </h2>
            <h3 className="text-white mt-3 tracking-wide uppercase  text-center text-sm">
              USE PROMO CODE
            </h3>
            <div className="text-sm text-center text-white mt-1 mb-8  rounded-xl bg-zinc-700 w-10/12 mx-auto px-2 py-2 ">
              <button className="uppercase text-left tracking-[4px]">
                dineweekendsale
              </button>
            </div>
          </div>
        </li>
        <div className=" min-[1065]:ml-3 sm:flex block gap-x-1  ">
        <li className=" bg-[#EFE1C7] lg2:w-fit   w-full lg2:h-fit mx-auto lg2:ml-1 xl:ml-12">
          <h3 className="ml-6 pt-12 mt-6 sm:pt-0">Flex Sweatshirt</h3>
          <h2 className="ml-6 ">
            {" "}
            <span className="line-through">$100.00</span>{" "}
            <span className="ml-1 text-lg font-semibold">$75.00</span>
          </h2>

          <div className="mx-auto w-72  mt-2">
            <Image
              className="object-cover h-72 md:h-80 w-[230px] mx-auto"
              src={"/event2.webp"}
              alt="event 2"
              width={230}
              height={180}
            />
          </div>
        </li>
        
        <li className=" lg2:mt-0  mx-auto w-full  lg2:w-fit bg-[#D7D7D9] lg2:ml-1 xl:ml-8 lg2:h-fit">
          <h3 className="ml-6 pt-12  mt-6 sm:pt-0">Flex Push Button Bomber</h3>
          <h2 className="ml-6 ">
            {" "}
            <span className="line-through">$225.00</span>{" "}
            <span className="ml-1 text-lg font-semibold">$190.00</span>
          </h2>

          <div className="mx-auto w-72  mt-2">
            <Image
              className="object-cover h-72 md:h-80 w-[230px] mx-auto"
              src={"/event3.webp"}
              alt="event 2"
              width={230}
              height={180}
            />
          </div>
        </li>
        </div>
      </ul>
      </center>
    </div>
  );
};

export default Promotions;
