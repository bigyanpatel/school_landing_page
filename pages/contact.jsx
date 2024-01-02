import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import React from "react";
import contact from "@/assests/images/contact.jpg";
import { createClient } from "contentful";

const ContactPage = ({ contactDetails }) => {
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
      </div>
      <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contactDetails.map((contact) => (
              <div
                key={contact.sys.id}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {contact.fields.title}
                </h3>
                <p>{contact.fields.description}:</p>
                <p className="mt-4">
                  <span className="font-semibold">Phone:</span>{" "}
                  {contact.fields.phone}
                  <br />
                  <span className="font-semibold">Email:</span>{" "}
                  {contact.fields.email}
                </p>
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
      content_type: "contact",
    });

    return {
      props: {
        contactDetails: response.items,
      },
      revalidate: 60, // Adjust revalidation period as needed
    };
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return {
      props: {
        contactDetails: [],
      },
    };
  }
}

export default ContactPage;
