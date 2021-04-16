// React Imports
import { useEffect } from "react";
// NextJS Imports
import { useRouter } from "next/router";
import Head from "next/head";
// TailwindCSS Imports
import "tailwindcss/tailwind.css";
// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// Custom Logic Imports
import * as gtag from "lib/gtag";

// Initialize Font Awesome Library
library.add(fab);

export default function MyApp({ Component, pageProps }) {
  // Google Analytics Event Handlers
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // Return MyApp
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
