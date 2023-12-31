import Image from "next/image";
import React from "react";
import college_1 from "@/assests/images/college_1.jpeg";
import college_2 from "@/assests/images/college_2.jpeg";
import college_3 from "@/assests/images/college_3.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#01937C] md:h-[500px]">
      <div className="w-full md:w-1/2 px-4 md:px-20 py-14 flex flex-col gap-6 items-start">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">
          Welcome to Biju Pattnaik Degree College
        </h1>
        <h6 className="text-white">
          Our mission is to empower students with knowledge, skills, and values
          that prepare them for lifelong success and societal impact. We
          envision becoming a premier institution recognized for academic
          innovation, research excellence, and community engagement.
        </h6>
        <Link
          href="#about"
          className="bg-[#FFC074] font-semibold px-4 py-2 w-fit"
        >
          Learn More
        </Link>
      </div>
      <Carousel
        swipeable={true}
        showIndicators={true}
        showArrows={true}
        showThumbs={false}
        className="w-full md:w-1/2 h-[300px] md:h-[500px]"
        swipeScrollTolerance={50}
        preventMovementUntilSwipeScrollTolerance
        infiniteLoop
        autoPlay
      >
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={college_1}
            alt="students"
            fill
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={college_2}
            alt="students"
            fill
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={college_3}
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
