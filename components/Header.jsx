import Image from "next/image";
import React from "react";
import school from "@/assests/images/school_logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center py-2 px-28 bg-[#F7F9EE] w-full justify-between">
      <div className="flex items-center gap-6">
        <Image
          src={school}
          alt="school_logo"
          width={50}
          height={50}
          quality={95}
        />
        <h3 className="font-bold">ABC Matric High School</h3>
      </div>
      <div className="flex items-center gap-4">
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800">About Us</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800">Contact Us</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800">Gallery</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800">Notice Board</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800">Socials</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800">Course Content</Link>
        <Link href="#" className="hover:border-blue-500 duration-500 hover:border-b hover:text-blue-800">Faculty Photos</Link>
      </div>
    </div>
  );
};

export default Header;
