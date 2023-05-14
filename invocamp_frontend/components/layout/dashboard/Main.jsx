import React from 'react'
import Head from 'next/head'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { initFlowbite } from 'flowbite'

import DashNav from '@/layout/dashboard/DashNav'
import DashFooter from '@/layout/dashboard/DashFooter'
import DashAside from '@/layout/dashboard/DashAside'

const Dashboard = ({ children, title = "" }) => {

  const router = useRouter();

  useEffect(() => {
    initFlowbite()

    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.remove("hidden");
    }

    const themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }

      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="InvoCamp" />
        <meta name="author" content="InvoCamp" />
        <link rel="icon" href="../../../img/logo2.png" />
        <title>Dashboard InvoCamp </title>
      </Head>

      <DashNav />

      <div className="max-w-7xl mx-auto justify-center">
        <DashAside />
        <div className="p-4 pb-6 md:ml-[17rem] min-h-screen grid grid-cols-1">
          <div className="min-h-[80vh]">{children}</div>
          <DashFooter />
        </div>
      </div>
    </>
  ); 
}

export default Dashboard