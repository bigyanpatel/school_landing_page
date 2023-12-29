import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import React from "react";
import contact from "@/assests/images/contact.jpg";

const ContactPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="w-full h-[300px] sm:h-[500px] relative overflow-hidden">
        <Image
          src={contact}
          alt="books"
          fill
          className="w-full h-full object-contain sm:object-cover object-center absolute"
        />
        {/* <h1 className="text-6xl font-bold text-gray-100 absolute top-[100px] left-1/2 -translate-x-1/2 z-[10]">
          Contact Us
        </h1> */}
      </div>
      <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* General Inquiries */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3">General Inquiries</h3>
              <p>
                For general questions, information, or assistance, please
                contact our main office:
              </p>
              <p className="mt-4">
                <span className="font-semibold">Phone:</span> (123) 456-7890
                <br />
                <span className="font-semibold">Email:</span>{" "}
                info@collegename.edu
              </p>
            </div>

            {/* Admissions */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3">Admissions</h3>
              <p>
                If you have questions related to admissions, applications, or
                enrollment, please contact our admissions office:
              </p>
              <p className="mt-4">
                <span className="font-semibold">Phone:</span> (123) 456-7891
                <br />
                <span className="font-semibold">Email:</span>{" "}
                admissions@collegename.edu
              </p>
            </div>

            {/* Academic Departments */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3">
                Academic Departments
              </h3>
              <p>
                For inquiries related to specific academic departments or
                programs, please refer to the respective department contact
                details available on our website or use the following general
                academic contact:
              </p>
              <p className="mt-4">
                <span className="font-semibold">Phone:</span> (123) 456-7892
                <br />
                <span className="font-semibold">Email:</span>{" "}
                academics@collegename.edu
              </p>
            </div>

            {/* Alumni Relations */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3">Alumni Relations</h3>
              <p>
                Our alumni play a crucial role in shaping the college community.
                For alumni-related inquiries, events, or updates, please reach
                out to:
              </p>
              <p className="mt-4">
                <span className="font-semibold">Phone:</span> (123) 456-7893
                <br />
                <span className="font-semibold">Email:</span>{" "}
                alumni@collegename.edu
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
