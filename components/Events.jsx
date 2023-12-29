import Image from "next/image";
import React, { useState } from "react";
import Dialog from "./Modal";
import { events } from "@/constants";

const Events = () => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  const handleEventDetails = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  return (
    <div className="w-full p-4 sm:p-10 lg:p-[80px]">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-3xl">School News and Updates</h1>
        {/* <Link
          onClick={() => setOpen(true)}
          className="text-green-500 flex items-center gap-4 min-w-[120px] text-sm sm:text-base"
        >
          View All News
          <FaArrowRight />
        </Link> */}
      </div>
      <div className="flex gap-8 mt-7 flex-nowrap overflow-x-auto">
        {events.map((eventContent) => {
          return (
            <div
              key={eventContent.id}
              className="min-w-[300px] max-w-[300px] flex flex-col gap-4"
            >
              <Image
                src={eventContent.image}
                alt="test photo"
                width={300}
                height={300}
              />
              <h3 className="font-semibold text-xl">{eventContent.title}</h3>
              <h6 className="text-sm line-clamp-3">
                {eventContent.description}
              </h6>
              <button
                onClick={() => handleEventDetails(eventContent)}
                className="px-4 py-2 bg-green-700 text-white w-fit"
              >
                Read More
              </button>
            </div>
          );
        })}
      </div>
      <Dialog
        className="lg:p-0 p-2"
        contentClassName="w-full h-screen bg-white p-3 lg:p-6 max-w-3xl rounded-lg"
        overlayClassName="backdrop-blur"
        isOpen={open}
        closable={true}
        onClose={onClose}
        onRequestClose={onClose}
      >
        {selectedEvent && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">{selectedEvent.title}</h2>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-600">{selectedEvent.description}</p>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Events;
