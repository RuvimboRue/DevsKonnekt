import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { FaHandshake, FaArrowRight } from 'react-icons/fa';
  import Link from 'next/link';

  function BenefitsCard() { 

    return(
        <Card className="flex flex-col bg-blue-500 space-y-1.5 p-2 sm:p-4 md:p-6 w-full sm:max-w-[280px] ml-4 shadow-sm shadow-secondary">
        <CardHeader className="p-0 mx-0 w-full">
         
        </CardHeader>
        <CardContent className="p-2 mx-0 w-full">
          <CardTitle className="text-xl text-primary font-semibold mb-4">
          <div className="flex justify-center items-center space-x-4">
            <FaHandshake className="text-5xl md:text-7xl text-indigo-950" />
          </div>
          </CardTitle>
          <p className="text-white flex justify-center items-center space-x-4">Connect with Like-minded developers in your city.</p>
        </CardContent>
        <CardFooter>
        <Link
        href="/services"
        className="text-black hover:text-white transition-all duration-500 flex justify-end items-right space-x-10 mt-8"
        >
        <span className="flex items-center">
            Find out more
            <FaArrowRight className='ml-4'/>
        </span>
        </Link>
        </CardFooter>
      </Card>

    )
  }

  export default BenefitsCard;