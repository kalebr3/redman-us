// React Imports
import { useState } from "react";
// Custom Component Imports
import Modal from "components/modal";
import MoreIcon from "components/svg/moreIcon";

export default function EducationCard({ blok }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        <Modal
          onClick={() => setShowModal(false)}
          header={blok.school}
          body={blok.description}
          footer={false}
        />
      ) : null}

      <div className={`${blok.description ? "pb-3" : "pb-4"} pt-4 px-4 m-1 w-96 bg-white border border-gray-300 rounded-2xl tracking-wide shadow-lg`}>
        <div className="flex items-center">
          <img src={blok.logo.filename} className="w-20" />
          <div className="leading-5 ml-6 sm">
            <h4 className="text-lg font-semibold">{blok.school}</h4>
            <h5 className="font-semibold">{blok.degree}</h5>
            <h6 className="text-sm font-semibold">
              Class of {blok.graduation_date}
            </h6>
          </div>
        </div>
        <div className="flex justify-end">
          {blok.description ? (
            <button type="button" onClick={() => setShowModal(true)}>
              <MoreIcon />
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
