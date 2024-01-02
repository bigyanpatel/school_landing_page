import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import facultyCover from "@/assests/images/faculty.jpg";
import { createClient } from "contentful";

const FacultyPage = ({ facultyList }) => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="w-full h-[300px] sm:h-[500px] relative overflow-hidden">
        <Image
          src={facultyCover}
          alt="faculty Cover"
          fill
          className="w-full h-full object-cover object-center absolute"
        />
      </div>

      <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Faculty</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyList.map((faculty) => (
              <div
                key={faculty.sys.id}
                className="bg-white rounded-lg p-6 shadow-md group"
              >
                <div className="relative h-40 w-40 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={"https:" + faculty.fields.photo.fields.file.url}
                    alt={faculty.fields.name}
                    fill
                    className="rounded-full group-hover:scale-110 duration-300 object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {faculty.fields.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {faculty.fields.designation}
                </p>
                <p className="text-gray-500">{faculty.fields.department}</p>
              </div>
            ))}
          </div>
        </div>
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
      content_type: "faculty",
    });

    return {
      props: {
        facultyList: response.items || [],
      },
      revalidate: 60, // Adjust revalidation period as needed
    };
  } catch (error) {
    console.error("Error fetching faculty data:", error);
    return {
      props: {
        facultyList: [],
      },
    };
  }
}

export default FacultyPage;
