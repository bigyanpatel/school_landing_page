import React from "react";
import schoolLane from "@/assests/images/school_lane.jpg";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        className="w-full sm:w-1/2 h-fit lg:pr-[100px] order-2 sm:order-1 relative"
        infiniteLoop
        autoPlay
      >
        <div className="w-full h-[300px] sm:h-[500px] relative">
          <Image
            src={schoolLane}
            alt="Long school corridor"
            fill
            className="w-full h-full absolute object-cover object-center"
          />
        </div>
        <div className="w-full h-[300px] sm:h-[500px] relative">
          <Image
            src={schoolLane}
            alt="Long school corridor"
            fill
            className="w-full h-full absolute object-cover object-center"
          />
        </div>
        <div className="w-full h-[300px] sm:h-[500px] relative">
          <Image
            src={schoolLane}
            alt="Long school corridor"
            fill
            className="w-full h-full absolute object-cover object-center"
          />
        </div>
      </Carousel>
      <div className="relative w-full sm:w-1/2 flex flex-col justify-between gap-4 order-1 sm:order-2">
        <h1 className="font-semibold text-3xl">About our School</h1>
        <article>
          At [School Name], we foster an environment that nurtures intellectual
          curiosity, creativity, and personal growth. Our institution stands as
          a beacon of academic excellence, dedicated to shaping well-rounded
          individuals equipped to thrive in an ever-evolving world.
        </article>
        <article>
          Our vision is to empower students to become lifelong learners and
          responsible global citizens. We aim to cultivate critical thinking,
          encourage innovation, and instill values that embrace diversity,
          integrity, and community engagement.
        </article>
        <div className="flex gap-28">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">2100+</p>
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
            <p className="font-semibold text-2xl">235+</p>
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
