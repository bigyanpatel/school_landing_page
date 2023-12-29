import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import React from "react";
import books from "@/assests/images/books.jpg";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa";
import Footer from "@/components/Footer";

const CoursesPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="w-full h-[300px] relative">
        <Image
          src={books}
          alt="books"
          fill
          className="w-full h-full object-cover object-center absolute"
        />
        <h1 className="text-6xl font-bold text-gray-100 absolute top-[100px] left-1/2 -translate-x-1/2 z-[10]">
          Courses / Syllabus
        </h1>
      </div>
      <div className="w-full flex gap-6 p-10 justify-center flex-wrap">
        {/* Science Stream */}
        <div className="bg-teal-50 rounded-lg p-4 min-w-[300px]">
          <h2 className="px-4 py-2 text-xl font-bold">Science</h2>
          <div className="h-[2px] w-full bg-gray-800 rounded-full"></div>
          <div className="w-full flex flex-col gap-2">
            <Link href="#" className="px-4 py-2 flex gap-2 items-center">
              Maths <FaRegFilePdf />
            </Link>
            {/* Add more Science subjects below */}
            <Link href="#" className="px-4 py-2 flex gap-2 items-center">
              Physics <FaRegFilePdf />
            </Link>
            <Link href="#" className="px-4 py-2 flex gap-2 items-center">
              Chemistry <FaRegFilePdf />
            </Link>
            {/* Add other Science subjects in a similar manner */}
          </div>
        </div>

        {/* Commerce Stream */}
        <div className="bg-teal-50 rounded-lg p-4 min-w-[300px]">
          <h2 className="px-4 py-2 text-xl font-bold">Commerce</h2>
          <div className="h-[2px] w-full bg-gray-800 rounded-full"></div>
          <div className="w-full flex flex-col gap-2">
            {/* Add Commerce subjects here */}
            <Link href="#" className="px-4 py-2 flex gap-2 items-center">
              Accountancy <FaRegFilePdf />
            </Link>
            <Link href="#" className="px-4 py-2 flex gap-2 items-center">
              Business Studies <FaRegFilePdf />
            </Link>
            {/* Add other Commerce subjects in a similar manner */}
          </div>
        </div>

        {/* Arts Stream */}
        <div className="bg-teal-50 rounded-lg p-4 min-w-[300px]">
          <h2 className="px-4 py-2 text-xl font-bold">Arts</h2>
          <div className="h-[2px] w-full bg-gray-800 rounded-full"></div>
          <div className="w-full flex flex-col gap-2">
            {/* Add Arts subjects here */}
            <Link href="#" className="px-4 py-2 flex gap-2 items-center">
              History <FaRegFilePdf />
            </Link>
            <Link href="#" className="px-4 py-2 flex gap-2 items-center">
              Geography <FaRegFilePdf />
            </Link>
            {/* Add other Arts subjects in a similar manner */}
          </div>
        </div>
      </div>
      <Footer />    
    </>
  );
};

export default CoursesPage;
