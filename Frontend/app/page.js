"use client";
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Features from "@/components/features";
import Services from "@/components/services";
import Benefits from '@/components/benefits';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 md:px-12 w-full">
      <NavBar />
      <Main />
      <Services />
      <Features />
      <Benefits/>
    </main>
  );
}
