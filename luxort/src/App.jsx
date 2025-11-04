import React from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";



export default function LuxortPage() {
 

  return (
    <div className="bg-[#f5f3eb] min-h-screen font-serif text-gray-900">
   
    <Navbar/>
    <Banner/>
    <Hero/>
    <About/>
    <Experience/>
    <Events/>
    <FAQ/>
    <Testimonials/>
    <Partners/>
    <Newsletter/>
     <Footer/>

 
    </div>
  );
}

