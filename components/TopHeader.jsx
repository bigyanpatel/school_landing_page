import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const TopHeader = () => {
  return (
    <div className="w-full bg-[#FAF1E6] flex flex-col sm:flex-row items-center justify-between px-4 py-2 sm:px-24">
      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center text-sm">
          <FaPhoneAlt className="text-[#27957E]" />
          <p>[+91] 8328921955</p>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <IoIosMail className="text-[#27957E]" />
          <p>principal_bpdc@yahoo.com</p>
        </div>
      </div>
      {/* <div className="flex items-center gap-4 text-sm">
        <Link href="#">Alumini</Link>
        <Link href="#">Calender</Link>
        <Link href="#">Email Login</Link>
      </div> */}
    </div>
  );
};

export default TopHeader;
