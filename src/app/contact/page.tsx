'use client'
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import toast, { Toaster } from "react-hot-toast";
import Link from 'next/link'
export default function Page() {
  function handleCopy(str: string){
    navigator.clipboard.writeText(str);
    if(str==="apurvasolanki70@gmail.com"){
      const notify = () => toast.success('Email Id is copy successfully!');
      notify();
    }
    else{
      const notify = () => toast.success('Phone Number copy successfully!');
      notify();
    }
  }
  return (
    <div className=" mx-auto w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Contact us
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button onClick={()=>handleCopy("+91 9326739052")} className="px-4 py-2  text-white ">
            <div>Phone No: +91 9326739052</div>
            <Toaster 
             position="bottom-center"
             reverseOrder={false}
            />
          </button>
          <button onClick={()=>handleCopy("apurvasolanki70@gmail.com")} className="px-4 py-2  text-white ">
            <div>Email: apurvasolanki70@gmail.com</div>
            <Toaster 
             position="bottom-center"
             reverseOrder={false}
            />
          </button>
          <button className="px-4 py-2  text-white ">
            <Link href="https://www.linkedin.com/in/apurva-solanki-8a4556201/" target="_blank"> LinkedIn </Link>
          </button>
        </div>
      </Vortex>
    </div>
  );
}


        
      
