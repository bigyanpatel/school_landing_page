import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import college_gallery from "@/assests/images/college_gallery.jpeg";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  try {
    const response = await client.getEntries({
      content_type: "gallery",
    });

    return {
      props: {
        galleryItems: response.items || [],
      },
      revalidate: 60, // Adjust revalidation period as needed
    };
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    return {
      props: {
        galleryItems: [],
      },
    };
  }
}

const GalleryPage = ({ galleryItems }) => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="w-full h-[300px] sm:h-[500px] relative overflow-hidden">
        <Image
          src={college_gallery}
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
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-[300px] max-w-[400px] rounded-lg overflow-hidden shadow-md group relative"
            >
              <Image
                src={"https:" + item.fields.photo.fields.file.url}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-contain object-center absolute"
              />
              <h2 className="group-hover:opacity-100 opacity-0 text-gray-800 hover:border hover:border-gray-500 text-xl font-semibold absolute duration-500 bottom-4 left-4">
                {item.fields.title}
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
