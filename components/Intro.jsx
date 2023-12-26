import Image from "next/image";
import React from "react";
import students from "@/assests/images/students.jpg"
import Link from "next/link";

const Intro = () => {
  return (
    <div className="flex w-full h-[500px] bg-[#01937C]">
      <div className="w-1/2 px-20 py-14 flex flex-col gap-6">
        <h1 className="text-6xl text-white font-bold">
          ABC school debuts for arts, discovery and connections.
        </h1>
        <h6 className="text-white">
          ABC school is rooted in the belief that every student should be challenged, engaged, and supported in a learning enviroment that places no limits on what they can achieve.
        </h6>
        <Link href="#" className="bg-[#FFC074] font-semibold px-4 py-2 w-fit">Learn More</Link>
      </div>
      <div className="relative w-1/2">
        <Image src={students} alt="students" fill className="w-full h-full absolute object-cover object-center"/>
      </div>
    </div>
  );
};

export default Intro;
