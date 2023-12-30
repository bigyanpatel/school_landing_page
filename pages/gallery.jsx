import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import eventSample1 from "@/assests/images/eventSample1.jpg";
import eventSample3 from "@/assests/images/eventSample3.jpg";

const GalleryPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="w-full h-[300px] sm:h-[500px] relative overflow-hidden">
        <Image
          src={eventSample3}
          alt="Gallery"
          fill
          className="w-full h-full object-cover object-center absolute"
        />
        <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-4xl sm:text-6xl font-bold">
            Gallery
        </h1>
      </div>
      <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-evenly gap-6">
          {Array.from({ length: 5 }).map((img, index) => (
            <div
              key={index}
              className="w-full h-[300px] max-w-[400px] rounded-lg overflow-hidden shadow-md group relative"
            >
              <Image
                src={eventSample1}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover object-center absolute"
              />
              <h2 className="group-hover:opacity-100 opacity-0 text-white text-xl font-semibold absolute duration-500 bottom-4 left-4">
                Test Image Title
              </h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
