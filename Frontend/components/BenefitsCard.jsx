import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { FaArrowRight } from 'react-icons/fa';
  import Link from 'next/link';

  const BenefitsCard = ({ icon, description }) => {
    return (
      <>
      <Card className="flex flex-col bg-blue-300 space-y-1.5 p-2 sm:p-4 md:p-6 w-full sm:max-w-[280px] ml-4 shadow-sm">
        <CardHeader className="p-0 mx-0 w-full"></CardHeader>
        <CardContent className="p-2 mx-0 w-full flex-grow flex flex-col justify-center">
          <div className="flex justify-center items-center space-x-4 text-5xl md:text-6xl text-indigo-950">
            {icon}
          </div>
          <p className="text-white text-center mt-8">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-end items-center">
          <Link
            href="/services"
            className="text-black hover:text-white transition-all duration-500 flex space-x-2"
          >
            <span className="flex items-center">
              Find out more
              <FaArrowRight className="ml-2" />
            </span>
          </Link>
        </CardFooter>
      </Card>
      </>
    );
  };

  export default BenefitsCard;