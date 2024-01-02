import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Dialog from "./Modal";
import { useContentfulClient } from "@/hooks/contentful";

const NoticeBoard = () => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const containerRef = useRef(null);
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const client = useContentfulClient();

  useEffect(() => {
    const fetchNotices = async () => {
      const skip = (currentPage - 1) * pageSize;
      try {
        const response = await client.getEntries({
          content_type: "notice",
          skip,
          limit: pageSize,
        });
        console.log(response);
        setNotices(response.items);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  const scroll = (scrollOffset) => {
    containerRef.current.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  const onClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  const handleEventDetails = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  return (
    <div id="notice" className="w-full p-4 sm:p-10 lg:p-[80px]">
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
      <div className="relative mt-7 overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8 flex-nowrap overflow-x-auto md:overflow-x-hidden"
        >
          {notices.map((eventContent) => {
            const eventData = {
              id: eventContent.sys.id,
              title: eventContent.fields.title,
              description: eventContent.fields.description,
              image: "https:" + eventContent.fields.coverPhoto.fields.file.url,
            };

            return (
              <div
                key={eventData.id}
                className="min-w-[300px] max-w-[300px] flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-full h-[250px] relative overflow-hidden rounded-lg">
                    <Image
                      src={eventData.image}
                      alt="test photo"
                      fill
                      className="absolute w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="font-semibold text-xl">{eventData.title}</h3>
                  <h6 className="text-sm line-clamp-3">
                    {eventData.description}
                  </h6>
                </div>
                <button
                  onClick={() => handleEventDetails(eventData)}
                  className="px-4 py-2 bg-green-700 text-white w-fit"
                >
                  Read More
                </button>
              </div>
            );
          })}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-200 px-3 py-1 text-3xl rounded-full hidden md:block"
          onClick={() => scroll(-300)}
        >
          {"<"}
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-200 px-3 py-1 text-3xl rounded-full hidden md:block"
          onClick={() => scroll(300)}
        >
          {">"}
        </button>
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

export default NoticeBoard;
