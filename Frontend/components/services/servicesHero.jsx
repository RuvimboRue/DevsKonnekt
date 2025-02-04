import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import SignUpButton from "../signUpButton";

function Services() {
  return (
    <main className="flex bg-blue-200 dark:bg-gray-800 flex-col gap-4 justify-between items-center pt-36 px-4 sm:pt-24 md:px-12 md:flex-row">
      <span className="spacer"></span>
      <div className="mb-14 lg:mb-0 md:w-1/2 flex-1 w-full">
        <h1 className="text-5xl leading-none text-primary dark:text-blue-200 font-extrabold lg:text-3xl sm:text-lg text-start lg:leading-tight mb-5 sm:pt-14 sm:mb-12">
          Unleash Your <br className="hidden sm:block" />
          Potential <br className="hidden sm:block" />
        </h1>

        <div className="flex justify-start items-center mt-16">
          <SignUpButton
            variant="secondary"
            title="
              Join Us"
          />
          <Link href={"/about"}>
            <Button className="text-primary dark:text-background sm:text-lg bg-transparent transition-all duration-500 font-medium rounded-lg border border-primary dark:border-background px-6 py-1 ml-4 w-[150px] sm:w-auto text-center hover:bg-secondary hover:border-secondary hover:text-background lg:text-sm xl:text-base">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full md:w-1/2 flex flex-col items-center relative">
        <div className="border-primary dark:border-blue-200 border rounded-[175px] h-[60%] w-[100%] lg:h-[250px] lg:w-[500.857px] absolute top-0 left-0 -translate-x-6 sm:-translate-x-12 lg:-translate-x-32 lg:transform translate-y-1 -rotate-[30deg]" />
        <div className="flex justify-between gap-4 z-10">
          <div className="flex-1 flex flex-col w-full md:w-1/2 gap-4">
            <Image
              src="/developer-hands.png"
              alt="Happy developers sitting on a table"
              width={1920}
              height={1080}
              className="object-cover w-full rounded-tr-[200px]"
            />
            <Image
              src="/blue-rect.png"
              alt="Blue rectangle"
              width={1920}
              height={1080}
              className="object-cover w-full"
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/tall-building.png"
              alt="Happy developers sitting on a table"
              width={200}
              height={800}
              className="object-cover w-full h-[80%]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
