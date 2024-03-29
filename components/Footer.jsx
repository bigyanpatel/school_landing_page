import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#F7F9EE] px-4 lg:px-[80px] pt-10 pb-5">
      <div className="w-full flex flex-wrap justify-left sm:justify-between gap-8">
        <div className="flex gap-4">
          <div className="w-[100px] h-[100px] relative">
            <Image
              src={"/bpgc_logo.png"}
              alt="school logo"
              fill
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Ashrampatna,
              <br /> Jagatsinghpur,
              <br /> Odisha - 754109,
              <br />
              India
            </p>
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <Link
              href="/#about"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Contact Us
            </Link>
            <Link
              href="/gallery"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Gallery
            </Link>
            <Link
              href="/#notice"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Notice Board
            </Link>
            <Link
              href="/courses"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Course Content
            </Link>
            <Link
              href="/faculties"
              className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-[25px]"
            >
              Faculty Photos
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="https://www.facebook.com/groups/1748152875497337/?ref=share&mibextid=NSMWBT"
              target="_blank"
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
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <p>
          Copyright @ 2024 Biju Pattnaik Degree College, All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
