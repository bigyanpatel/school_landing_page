import Image from "next/image";
import React from "react";
import students from "@/assests/images/students.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#01937C] md:h-[500px]">
      <div className="w-full md:w-1/2 px-4 md:px-20 py-14 flex flex-col gap-6 justify-evenly">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">
          ABC school debuts for arts, discovery and connections.
        </h1>
        <h6 className="text-white">
          ABC school is rooted in the belief that every student should be
          challenged, engaged, and supported in a learning enviroment that
          places no limits on what they can achieve.
        </h6>
        {/* <Link href="#" className="bg-[#FFC074] font-semibold px-4 py-2 w-fit">
          Learn More
        </Link> */}
      </div>
      <Carousel
        swipeable={true}
        showIndicators={true}
        showArrows={true}
        className="w-full md:w-1/2 h-[300px] md:h-[500px]"
        infiniteLoop
        autoPlay
      >
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={students}
            alt="students"
            fill
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={students}
            alt="students"
            fill
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={students}
            alt="students"
            fill
            className="w-full h-full object-cover object-center"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Intro;
