import React, {useEffect, useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Skeleton from 'react-loading-skeleton'
import { initFlowbite } from 'flowbite'
import { FaRegUserCircle } from 'react-icons/fa'
import { RxDashboard } from 'react-icons/rx'
import { TbLogout } from 'react-icons/tb'
import { IoHomeOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

import AuthContext from '@/AuthContext'

const DashNav = () => {

  const router = useRouter()
  const { isAuthenticated, user, logout } =
    useContext(AuthContext);
  const [avatar, setAvatar] = useState(null)
  
  const activeClass = "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white hover:bg-blue-700";

  useEffect(() => {
    initFlowbite()

    if (user) {
      setAvatar(`${process.env.API_URL}/${user.user.img_profile || user.user.logo}`)
    }
  }, [user])

  const handleLogout = () => {
    logout()
    router.push('/home')
  }

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 md:py-2 md:mx-2 md:border dark:border-gray-700 dark:text-white dark:bg-gray-800/80 backdrop-filter backdrop-blur-sm dark:backdrop-blur-md md:top-2 top-0 sticky md:rounded-full z-[90]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/home" className="flex items-center">
          <img
            src="../../../img/logo2.png"
            className="h-6 mr-3 sm:h-9"
            alt="Invocamp Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            InvoCamp
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <button
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <svg
              id="theme-toggle-dark-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"></path>
            </svg>
          </button>
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            {user !== null ? (
              <img
                src={avatar || "/img/profile.jpg"}
                alt="avatar"
                className="hidden sm:block h-6 w-6 mr-3 rounded-full"
              />
            ) : (
              <Skeleton circle={true} height={24} width={24} />
            )}

            {user !== null ? (
              user.user.account_type === "Intern" ? (
                `${user.user.first_name.slice(0, 8)}..`
              ) : (
                `${user.user.company_name.slice(0, 8)}..`
              )
            ) : (
              <Skeleton />
            )}
          </button>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            id="language-dropdown-menu">
            <ul className="py-2" role="none">
              <li>
                <Link
                  href="/home"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem">
                  <div className="inline-flex items-center">
                    <IoHomeOutline className="h-3.5 w-3.5 mr-2" />
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/vacancies"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem">
                  <div className="inline-flex items-center">
                    <MdWorkOutline className="h-3.5 w-3.5 mr-2" />
                    Vacancies List
                  </div>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                  role="menuitem">
                  <div className="flex items-center">
                    <TbLogout className="h-3.5 w-3.5 mr-2" />
                    Logout
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <button
            data-drawer-target="dash-sidebar"
            data-drawer-toggle="dash-sidebar"
            aria-controls="dash-sidebar"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default DashNav