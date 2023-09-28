"use client";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { FC, useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignInButton, useAuth, UserButton } from "@clerk/nextjs";

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const { isLoaded, userId, sessionId, getToken, isSignedIn } = useAuth();
  // useEffect(() => {

  //   console.log('isLoaded',isLoaded)
  //   console.log('isSignedIn',isSignedIn)
  //   // return () => {

  //   // }
  // }, [200])

  return (
    <nav className="sticky top-0 pt-8 -mt-8 bg-white" >
    <nav className="   flex mb-12   bg-white  justify-between items-center 2xl:ml-32 px-6 lg2:ml-12 1xl:ml-16 md:h-20 h-16  max-w-[100rem] mt-2 md:mt-0 xl:pr-24 pb-8">
      <div>
        <Link href={"/"}>
          <Image
            src={"/dine.webp"}
            alt="website logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div
        className={` z-20  text-center xl:z-auto xl:static  absolute w-full  xl:w-auto opacity-100  ${
          open
            ? "opacity-100 top-[100px] pt-10 border-b-2 xl:border-b-0 border-slate-700 z-20" 
            : "opacity-0"
        } top-[-400px] transition-all ease-in duration-500 xl:py-0 xl:pl-0 py-4 items-center justify-center bg-white  z-20`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="space-x-5 grid mr-12 grid-cols-1 text-lg font-medium space-y-4  xl:block xl:mt-0 mt-8  mx-auto pt-6 pb-5">
              {!isSignedIn && isLoaded ? (
                <Button className="bg-slate-900  absolute  xl:hidden  w-24 h-12 hover:scale-105 duration-100 left-[22px] bottom-64">
                  <SignInButton mode="modal">Sign In</SignInButton>
                </Button>
              ) : (
                <div className="w-24 h-24 absolute  xl:hidden left-[55px] bottom-44 ">
                  {" "}
                  <UserButton afterSignOutUrl="/" />{" "}
                </div>
              )}
              <Link href={"/cart"} className="ml-[60px]  ">
                <div className="p-2   xl:hidden  left-7 xl:bottom-0 rounded-full bg-gray-300 relative w-11  block">
                  <ShoppingCart />
                  <span className="absolute bottom-6  left-7 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
                    0
                  </span>
                </div>
              </Link>

              <Link href={"/Female"}>Female</Link>
              <Link href={"/Male"}>Male</Link>
              <Link href={"/Kids"}>Kids</Link>
              <Link href={"/All"}>All Products</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="xl:flex border-slate-200 border-2 hidden rounded-[5px] px-2 ">
        <Search className="bg-white rounded-l" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r px-2 ml-2"
        ></input>
      </div>

      <div className="relative xl:h-32 xl:w-32  xl:top-12 xl:bg-white xl:rounded-xl">
        <Link href={"/cart"}>
          <div className="p-2 hover:cursor-pointer mx-auto hidden xl:block hover:scale-110 duration-300  md:bottom-0 rounded-full bg-gray-300 relative w-11   ">
            <ShoppingCart />
            <span className="absolute bottom-6  left-7 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
              0
            </span>
          </div>
        </Link>
        {!isSignedIn && isLoaded ? (
          <Button className="bg-slate-900  absolute hidden mx-4  xl:block top-16 w-24 h-12 hover:scale-105 duration-100 ">
            <SignInButton mode="modal">Sign In</SignInButton>
          </Button>
        ) : (
          <div className="w-24 h-24 absolute hidden xl:block mx-auto top-16 left-3">
            {" "}
            <UserButton afterSignOutUrl="/" />{" "}
          </div>
        )}
      </div>

      <div className=" xl:hidden " onClick={() => setOpen(!open)}>
        <>
          {open ? (
            <svg
              //
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                fill="#000000"
              />
            </svg>
          ) : (
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
                fill="#1C274C"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
                fill="#1C274C"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
                fill="#1C274C"
              />
            </svg>
          )}
        </>
      </div>
    </nav>
    </nav>
  );
};

export default Navbar;
