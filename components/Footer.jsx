import Image from "next/image";
import React from "react";
import schoolLogo from "@/assests/images/school_logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#F7F9EE] px-[80px] pt-10 pb-5">
      <div className="w-full flex justify-between">
        <div className="flex gap-4">
          <div className="w-[100px] h-[100px] relative">
            <Image
              src={schoolLogo}
              alt="school logo"
              fill
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p>
              123, Green Street,
              <br /> Saraswati Nagar, Mumbai,
              <br /> Maharashtra - 400001,
              <br />
              India
            </p>
            <div className="flex gap-2 items-center text-sm">
              <FaPhoneAlt className="text-[#27957E]" />
              <p>[+91] 7847587934</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <IoIosMail className="text-[#27957E]" />
              <p>schooling@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Gallery
            </Link>
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Notice Board
            </Link>
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Socials
            </Link>
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Course Content
            </Link>
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Faculty Photos
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[28px] flex gap-2 items-center"
            >
              <FaFacebookF /> Facebook
            </Link>
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[28px] flex gap-2 items-center"
            >
              <FaTwitter /> Twitter
            </Link>
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[28px] flex gap-2 items-center"
            >
              <FaYoutube /> Youtube
            </Link>
            <Link
              href="#"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[28px] flex gap-2 items-center"
            >
              <FaLinkedinIn /> Linkedin
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-500 rounded-full my-4"></div>
      <div className="flex justify-between">
        <p>Copyright @ 2024 ABC School, All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
