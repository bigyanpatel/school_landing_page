import React from "react";
import principal from "@/assests/images/college_principal.jpeg";
import teacher_1 from "@/assests/images/college_teacher.jpeg";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col sm:flex-row w-full p-10 md:p-14 lg:p-[100px] gap-10 sm:gap-6"
    >
      <Carousel
        swipeable={true}
        showIndicators={true}
        showArrows={true}
        showThumbs={false}
        className="w-full sm:w-1/2 h-fit lg:pr-[100px] order-2 sm:order-1 relative"
        swipeScrollTolerance={50}
        preventMovementUntilSwipeScrollTolerance
        infiniteLoop
        autoPlay
      >
        <div className="w-full h-[300px] sm:h-[500px] relative">
          <Image
            src={principal}
            alt="Principal"
            fill
            className="w-full h-full absolute object-cover object-center"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white w-full">
            <h5 className="px-2 text-base sm:text-xl font-bold mt-2">
              Dr. Pradeepta Ku. Dash
            </h5>
            <h5 className="px-2 text-sm sm:text-lg font-base">Principal</h5>
          </div>
        </div>
        <div className="w-full h-[300px] sm:h-[500px] relative">
          <Image
            src={teacher_1}
            alt="Long school corridor"
            fill
            className="w-full h-full absolute object-cover object-center"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white">
            <h5 className="px-2 text-base sm:text-xl font-bold mt-2">
              Dr. Ramesh Chandra Behera
            </h5>
            <h5 className="px-2 text-sm sm:text-lg font-base">President, GB</h5>
          </div>
        </div>
      </Carousel>
      <div className="relative w-full sm:w-1/2 flex flex-col justify-between gap-4 order-1 sm:order-2">
        <h1 className="font-semibold text-3xl">About our College</h1>
        <article>
          Established in 1991 - 1992, Biju Pattnaik Degree College has been
          dedicated to providing accessible, affordable, and high-quality higher
          education. Named in honor of the visionary leader Shri Biju Pattnaik,
          our institution upholds his values of integrity, leadership, and
          social responsibility.
        </article>
        {/* <article>
          Our vision is to empower students to become lifelong learners and
          responsible global citizens. We aim to cultivate critical thinking,
          encourage innovation, and instill values that embrace diversity,
          integrity, and community engagement.
        </article> */}
        <div className="flex gap-28">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">1344+</p>
            <span className="w-full rounded-full bg-green-500 h-1"></span>
            <p>Students</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">95%</p>
            <span className="w-full rounded-full bg-green-500 h-1"></span>
            <p>Sports</p>
          </div>
        </div>
        <div className="flex gap-28">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">46+</p>
            <span className="w-full rounded-full bg-green-500 h-1"></span>
            <p>Staffs</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">100%</p>
            <span className="w-full rounded-full bg-green-500 h-1"></span>
            <p>Discipline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
