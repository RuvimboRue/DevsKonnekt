"use client";
import BenefitsCard from '@/components/BenefitsCard';
import { benefits } from '@/constants';
import Link from 'next/link';

export default function Benefits() {
  return (
    <>
    <h1 className="text-3xl text-primary font-bold mt-10">
    DevsKonnekt: Connecting Developers Like Never Before
 </h1>
 <p className="text-lg text-primary mt-4 font-semibold">Unlock your development potential with DevsKonnekt</p>
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 mt-8">
      {benefits.map((benefit) => (
        <BenefitsCard
          key={benefit.description}
          icon={benefit.icon}
          description={benefit.description}
        />
      ))}
    </div>
    <Link href="/" className="primary-btn flex justify-center items-center mt-4 w-[200px] sm:w-[20%] py-4">
          Sign Up
        </Link>
    </>
  );
}
