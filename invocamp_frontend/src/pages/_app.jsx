import "@/styles/globals.css"
import "@/styles/tailwind-shuffle.min.css"
import "react-toastify/dist/ReactToastify.css"
import "leaflet/dist/leaflet.css"
import "react-loading-skeleton/dist/skeleton.css";

import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { AuthProvider } from "@/AuthContext"
import { VacancyApplicationProvider } from "@/VacancyApplicationContext"
import { ToastContainer, toast } from "react-toastify"

export default function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <VacancyApplicationProvider>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="description" content="InvoCamp" />
            <meta name="keywords" content="InvoCamp" />
            <meta name="author" content="InvoCamp" />
          </Head>
          <NextNProgress
            options={{
              showSpinner: false,
              trickleSpeed: 100,
              minimum: 0.5,
              easing: "ease",
              speed: 1000,
            }}
          />
          <Component {...pageProps} />
        </VacancyApplicationProvider>
      </AuthProvider>
    </>
  );
}
