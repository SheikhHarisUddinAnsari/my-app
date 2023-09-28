import Promotions from "@/components/section/Promotions";
import Hero from "../components/section/Hero";
import Products from "@/components/section/Products";
import Usp from '../components/section/Usp'
import Subscribe from "@/components/section/Subscribe";
import Footer from "@/components/section/Footer"
import Navbar from "@/components/section/Navbar";
import Wrapper from "@/components/ui/wrapper";
import { SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
  

  
    

    {/* Navbar Section */}
    <section> <Navbar /></section>
    {/* Hero Section */}
    <Wrapper>
    <section><Hero /></section>
    {/* Promotion Section */}
    <section><Promotions/></section>
    {/* Products Section */}
    <section><Products /></section>
    {/* Usp Section */}
    <section><Usp /></section>
    {/* Subscribe Section */}
    <section><Subscribe /></section>
    </Wrapper>
   {/* {Footer Section} */}
   <section><Footer /></section>
   
    </>
  );
}