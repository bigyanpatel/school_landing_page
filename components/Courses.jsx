import React from "react";
import syllabus from "@/assests/images/syllabus.jpg";
import Image from "next/image";

const Courses = () => {
  return (
    <div className="bg-gray-800 w-full p-8 sm:p-[10] lg:p-16">
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <h1 className="w-full sm:w-1/2 font-bold text-3xl sm:text-5xl text-white pr-6">
          Upgrade Your Skill, Upgrade Your Life
        </h1>
        <p className="w-full sm:w-1/2 text-gray-400 sm:px-[40px] flex items-center">
          The following are some subjects that students will study when they
          enter our school. Of course our subjects are based on the latest
          curriculum.
        </p>
      </div>
      <div className="w-full mt-14 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-1">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="text-blue-500 font-semibold text-lg flex items-end">
                01
              </p>
              <h3 className="text-white font-bold text-3xl">
                Computer Science
              </h3>
            </div>
            <p className="text-gray-400">
              Dive into programming, algorithms, and software development,
              exploring the world of technology and computational thinking.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="text-blue-500 font-semibold text-lg flex items-end">
                02
              </p>
              <h3 className="text-white font-bold text-3xl">
                Environmental Science
              </h3>
            </div>
            <p className="text-gray-400">
              Study ecosystems, climate change, and sustainability,
              understanding the interconnection between living organisms and
              their environment.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="text-blue-500 font-semibold text-lg flex items-end">
                03
              </p>
              <h3 className="text-white font-bold text-3xl">
                Creative Writing
              </h3>
            </div>
            <p className="text-gray-400">
              Express thoughts and stories through poetry, fiction, and
              non-fiction, developing writing skills and exploring various
              narrative styles.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="text-blue-500 font-semibold text-lg flex items-end">
                04
              </p>
              <h3 className="text-white font-bold text-3xl">Global History</h3>
            </div>
            <p className="text-gray-400">
              Explore significant historical events, cultures, and societal
              shifts across different eras and regions worldwide.
            </p>
          </div>
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
