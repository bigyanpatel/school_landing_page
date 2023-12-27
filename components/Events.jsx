import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import syllabus from "@/assests/images/syllabus.jpg";

const Events = () => {
  return (
    <div className="w-full p-[80px]">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-3xl">School News and Updates</h1>
        <Link href="#" className="text-green-500 flex items-center gap-4">
          View All News
          <FaArrowRight />
        </Link>
      </div>
      <div className="flex gap-8 mt-7 flex-nowrap overflow-x-auto">
        <div className="min-w-[300px] max-w-[300px] flex flex-col gap-4">
          <Image src={syllabus} alt="test photo" width={300} height={300} />
          <h3 className="font-semibold text-xl">Lorem ipsum dolor sit amet.</h3>
          <h6 className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            neque hic nostrum? Vel aliquam aspernatur temporibus tenetur
            consequuntur, labore perspiciatis!
          </h6>
          <Link href="#" className="px-4 py-2 bg-green-700 text-white w-fit">
            Read More
          </Link>
        </div>
        <div className="min-w-[300px] max-w-[300px] flex flex-col gap-4">
          <Image src={syllabus} alt="test photo" width={300} height={300} />
          <h3 className="font-semibold text-xl">Lorem ipsum dolor sit amet.</h3>
          <h6 className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            neque hic nostrum? Vel aliquam aspernatur temporibus tenetur
            consequuntur, labore perspiciatis!
          </h6>
          <Link href="#" className="px-4 py-2 bg-green-700 text-white w-fit">
            Read More
          </Link>
        </div>
        <div className="min-w-[300px] max-w-[300px] flex flex-col gap-4">
          <Image src={syllabus} alt="test photo" width={300} height={300} />
          <h3 className="font-semibold text-xl">Lorem ipsum dolor sit amet.</h3>
          <h6 className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            neque hic nostrum? Vel aliquam aspernatur temporibus tenetur
            consequuntur, labore perspiciatis!
          </h6>
          <Link href="#" className="px-4 py-2 bg-green-700 text-white w-fit">
            Read More
          </Link>
        </div>
        <div className="min-w-[300px] max-w-[300px] flex flex-col gap-4">
          <Image src={syllabus} alt="test photo" width={300} height={300} />
          <h3 className="font-semibold text-xl">Lorem ipsum dolor sit amet.</h3>
          <h6 className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            neque hic nostrum? Vel aliquam aspernatur temporibus tenetur
            consequuntur, labore perspiciatis!
          </h6>
          <Link href="#" className="px-4 py-2 bg-green-700 text-white w-fit">
            Read More
          </Link>
        </div>
        <div className="min-w-[300px] max-w-[300px] flex flex-col gap-4">
          <Image src={syllabus} alt="test photo" width={300} height={300} />
          <h3 className="font-semibold text-xl">Lorem ipsum dolor sit amet.</h3>
          <h6 className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            neque hic nostrum? Vel aliquam aspernatur temporibus tenetur
            consequuntur, labore perspiciatis!
          </h6>
          <Link href="#" className="px-4 py-2 bg-green-700 text-white w-fit">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
