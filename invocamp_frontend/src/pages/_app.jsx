import "@/styles/globals.css"
import "@/styles/tailwind-shuffle.min.css"
import "react-toastify/dist/ReactToastify.css"

import { AuthProvider } from "@/AuthContext"

import Head from "next/head";

export default function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <>
      <AuthProvider>
        <Head>
          {/* meta */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="InvoCamp" />
          <meta name="keywords" content="InvoCamp" />
          <meta name="author" content="InvoCamp" />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}
