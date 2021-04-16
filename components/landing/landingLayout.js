// NextJS Imports
import Head from "next/head";
// Custom Component Imports
import LandingHeader from "components/landing/landingHeader";

export default function LandingLayout({ header, children }) {
  return (
    <>
      <Head>
        <title>{header}</title>
      </Head>
      <div className="flex h-screen bg-gray-100 font-roboto">
        <div className="flex-1 flex flex-col overflow-hidden">
          <LandingHeader text={header} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="mx-auto px-6 py-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
