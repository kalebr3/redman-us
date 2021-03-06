// Custom Logic Imports
import { createMarkup } from "lib/storyblok";

export default function Teaser({ blok }) {
  return (
    <div
      className="grid place-items-center mt-10 xl:h-40 md:h-60 h-96 text-gray-500 text-xl text-center px-6"
      dangerouslySetInnerHTML={createMarkup(blok.description)}
    />
  );
}
