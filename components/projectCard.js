// React Imports
import { useState } from "react";
// Custom Component Imports
import Modal from "components/modal";
import MoreIcon from "components/svg/moreIcon";
// Custom Logic Imports
import formatDate from "lib/formatDate";

export default function ProjectCard({ blok }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        <Modal
          onClick={() => setShowModal(false)}
          header={blok.name}
          body={blok.description}
          footer={false}
        />
      ) : null}

      <div
        className={`${
          blok.description ? "pb-3" : "pb-4"
        } pt-4 px-4 m-1 w-96 bg-white border border-gray-300 rounded-2xl tracking-wide shadow-lg`}
      >
        <div className="flex items-center">
          {blok.image.filename ? (
            <img src={blok.image.filename} className="w-20 rounded-full" />
          ) : null}
          <div className="leading-5 ml-5 sm">
            <h4 className="text-lg font-semibold">{blok.name}</h4>
            <h6 className="text-sm font-semibold">
              {blok.start_date === blok.end_date
                ? formatDate(blok.end_date)
                : `${formatDate(blok.start_date)} - ${formatDate(
                    blok.end_date
                  )}`}
            </h6>
          </div>
        </div>
        <div className="flex justify-end">
          {/* blok.description ? (
            <button type="button" onClick={() => setShowModal(true)}>
              <MoreIcon />
            </button>
          ) : null */}
        </div>
      </div>
    </>
  );
}
