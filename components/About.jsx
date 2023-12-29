import React from "react";
import schoolLane from "@/assests/images/school_lane.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col sm:flex-row w-full h-[1000px] sm:h-[700px] p-10 md:p-14 lg:p-[100px] gap-6"
    >
      <div className="w-full sm:w-1/2 h-full lg:pr-[100px] order-2 sm:order-1">
        <div className="w-full h-full relative">
          <Image
            src={schoolLane}
            alt="Long school corridor"
            fill
            className="w-full h-full absolute object-cover object-center"
          />
        </div>
      </div>
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
