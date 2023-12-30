import React from "react";
import syllabus from "@/assests/images/syllabus.jpg";
import Image from "next/image";
import Link from "next/link";

const Courses = () => {
  return (
    <div className="bg-gray-800 w-full p-8 sm:p-[10] lg:p-16">
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <h1 className="w-full font-bold text-3xl sm:text-5xl text-white pr-6">
          Upgrade Your Skill, Upgrade Your Life
        </h1>
        {/* <p className="w-full sm:w-1/2 text-gray-400 sm:px-[40px] flex items-center">
          The following are some subjects that students will study when they
          enter our school. Of course our subjects are based on the latest
          curriculum.
        </p> */}
      </div>
      <div className="w-full mt-14 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-1 max-h-[500px] overflow-y-auto">
          {/* Science Stream */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="text-blue-500 font-semibold text-lg flex items-end">
                01
              </p>
              <h3 className="text-white font-bold text-3xl">Science</h3>
            </div>
            <p className="text-gray-400">
              Explore the fundamental principles of Physics, Chemistry, Biology,
              and Mathematics, delving into the world of scientific inquiry and
              discovery.
            </p>
          </div>

          {/* Arts Stream */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="text-blue-500 font-semibold text-lg flex items-end">
                02
              </p>
              <h3 className="text-white font-bold text-3xl">Arts</h3>
            </div>
            <p className="text-gray-400">
              Immerse yourself in the realms of history, literature, philosophy,
              and social sciences, exploring human expression and societal
              dynamics.
            </p>
          </div>

          {/* Commerce Stream */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="text-blue-500 font-semibold text-lg flex items-end">
                03
              </p>
              <h3 className="text-white font-bold text-3xl">Commerce</h3>
            </div>
            <p className="text-gray-400">
              Engage in the world of business, finance, accounting, and
              economics, understanding commercial systems and financial
              structures.
            </p>
          </div>

          {/* <Link href="/courses" className="px-4 py-2 rounded-full text-white border border-gray-200 w-fit mt-4">Read More</Link> */}
        </div>

        <div className="w-full lg:w-1/2 lg:p-10 order-1 lg:order-2 h-80 lg:h-[500px]">
          <div className="w-full h-full relative rounded-xl overflow-hidden">
            <Image
              src={syllabus}
              alt="Syllabus content"
              fill
              className="w-full h-full absolute object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
