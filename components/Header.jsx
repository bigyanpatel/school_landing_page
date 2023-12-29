import Image from "next/image";
import React from "react";
import school from "@/assests/images/school_logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center py-2 px-4 lg:px-28 bg-[#F7F9EE] w-full justify-between gap-3">
      <div className="flex items-center gap-6">
        <Image
          src={school}
          alt="school_logo"
          width={50}
          height={50}
          quality={95}
        />
        <Link href="/" className="font-bold">ABC Matric High School</Link>
      </div>
      <div className="flex items-center gap-4 overflow-x-auto overflow-y-hidden">
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-6">About Us</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-6">Contact Us</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-6">Gallery</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-6">Notice Board</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-6">Socials</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-6">Course Content</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800 h-6">Faculty Photos</Link>
      </div>
    </div>
  );
};

export default Header;
