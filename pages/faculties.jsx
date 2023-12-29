import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import facultyCover from "@/assests/images/faculty.jpg";
import faculty_1 from "@/assests/images/faculty_1.jpg";
import faculty_2 from "@/assests/images/faculty_2.jpg";

const FacultyPage = () => {
  const facultyList = [
    {
      id: 1,
      name: "Dr. John Doe",
      designation: "Professor",
      department: "Computer Science",
      image: faculty_1,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      designation: "Associate Professor",
      department: "Physics",
      image: faculty_2,
    },
    {
      id: 3,
      name: "Dr. John Doe",
      designation: "Professor",
      department: "Computer Science",
      image: faculty_1,
    },
    {
      id: 4,
      name: "Dr. Jane Smith",
      designation: "Associate Professor",
      department: "Physics",
      image: faculty_2,
    },
    {
      id: 5,
      name: "Dr. John Doe",
      designation: "Professor",
      department: "Computer Science",
      image: faculty_1,
    },
    {
      id: 6,
      name: "Dr. Jane Smith",
      designation: "Associate Professor",
      department: "Physics",
      image: faculty_2,
    },
  ];

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
                key={faculty.id}
                className="bg-white rounded-lg p-6 shadow-md group"
              >
                <div className="relative h-40 w-40 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full group-hover:scale-110 duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{faculty.name}</h3>
                <p className="text-gray-600 mb-2">{faculty.designation}</p>
                <p className="text-gray-500">{faculty.department}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FacultyPage;
