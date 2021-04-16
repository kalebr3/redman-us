// Custom Logic Imports
import formatDate from "lib/formatDate";

function Description({ text }) {
  if (!text) {
    return null;
  } else {
    return (
      <div className="mt-4">
        <p className="text-gray-600">{text}</p>
      </div>
    );
  }
}

export default function ProjectCard({ blok }) {
  return (
    <div className="w-96 bg-white border border-gray-300 p-6 m-1 rounded-2xl tracking-wide shadow-lg">
      <div className="flex items-center">
        {blok.image.filename ? (
          <img src={blok.image.filename} className="w-20 rounded-full" />
        ) : null}
        <div className="leading-5 ml-6 sm">
          <h4 className="text-lg font-semibold">{blok.name}</h4>
          <h6 className="text-sm font-semibold">
            {blok.start_date === blok.end_date
              ? formatDate(blok.end_date)
              : `${formatDate(blok.start_date)} - ${formatDate(blok.end_date)}`}
          </h6>
        </div>
      </div>
      <Description text={blok.description} />
    </div>
  );
}
