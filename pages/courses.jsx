import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import React from "react";
import books from "@/assests/images/books.jpg";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa";
import Footer from "@/components/Footer";
import { createClient } from "contentful";

const CoursesPage = ({ scienceCourses, commerceCourses, artsCourses }) => {
  const renderCourses = (courses) => {
    return (
      <div className="bg-teal-50 rounded-lg p-4 min-w-[300px]">
        <h2 className="px-4 py-2 text-xl font-bold">
          {courses[0].fields.category}
        </h2>
        <div className="h-[2px] w-full bg-gray-800 rounded-full"></div>
        <div className="w-full flex flex-col gap-2">
          {courses.map((subject, subIndex) => (
            <Link
              key={subIndex}
              href={"https:" + subject.fields.pdf.fields.file.url}
              className="px-4 py-2 flex gap-2 items-center"
              target="_blank"
            >
              {subject.fields.subject}
              <FaRegFilePdf />
            </Link>
          ))}
        </div>
      </div>
    );
  };

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
        {renderCourses(scienceCourses)}
        {renderCourses(commerceCourses)}
        {renderCourses(artsCourses)}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  try {
    const response = await client.getEntries({
      content_type: "course",
    });

    const scienceCourses = response.items.filter(
      (course) => course.fields.category === "science"
    );
    const commerceCourses = response.items.filter(
      (course) => course.fields.category === "commerce"
    );
    const artsCourses = response.items.filter(
      (course) => course.fields.category === "arts"
    );

    return {
      props: {
        scienceCourses,
        commerceCourses,
        artsCourses,
      },
      revalidate: 60, // Adjust revalidation period as needed
    };
  } catch (error) {
    console.error("Error fetching courses data:", error);
    return {
      props: {
        scienceCourses: [],
        commerceCourses: [],
        artsCourses: [],
      },
    };
  }
}

export default CoursesPage;
