import React, { useEffect, useContext, useState } from "react"
import Link from "next/link"
import { TbLogout } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx"
import { FaRegUserCircle } from "react-icons/fa"
import { initDropdowns, initFlowbite } from "flowbite"
import AuthContext from "@/AuthContext";
import { useRouter } from "next/router";

const Navbar = () => {

  const { isAuthenticated, user, logout } =
    useContext(AuthContext);
  const [avatar, setAvatar] = useState(null)
  const router = useRouter()

  const activeClass =
    "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white hover:bg-blue-700";

  useEffect(() => {
    initFlowbite();

    if (user) {
      setAvatar(
        `${process.env.API_URL}/${user.user.img_profile || user.user.logo}`
      );
    }
  }, [user]);

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <nav
      className={`
        ${router.pathname !== "/vacancies" ? "md:top-2 sticky" : "mt-2"}
        bg-white/80 px-2 sm:px-4 py-2.5 md:py-1 md:mx-2 md:border dark:border-gray-700 dark:text-white dark:bg-gray-800/80 backdrop-filter backdrop-blur-sm dark:backdrop-blur-md top-0 md:rounded-full z-[20]`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <img
            src="../../img/logo2.png"
            className="h-6 mr-3 sm:h-9"
            alt="Invocamp Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            InvoCamp
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          {user ? (
            <>
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
                  <Skeleton circle={true} height={10} width={10} />
                )}
                {user.user.account_type === "Recruiter"
                  ? user.user.company_name.slice(0, 8)
                  : user.user.first_name.slice(0, 8)}
              </button>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                id="language-dropdown-menu">
                <ul className="py-2" role="none">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">
                      <div className="inline-flex items-center">
                        <RxDashboard className="h-3.5 w-3.5 mr-2" />
                        Dashboard
                      </div>
                    </Link>
                  </li>

                  {user && user.user.account_type === "Recruiter" ? (
                    <>
                      <li>
                        <Link
                          href="/dashboard/vacancies-posted"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">
                          <div className="inline-flex items-center">
                            <RxDashboard className="h-3.5 w-3.5 mr-2" />
                            Vacancies Posted
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/vacancies-posted/application"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">
                          <div className="inline-flex items-center">
                            <RxDashboard className="h-3.5 w-3.5 mr-2" />
                            Vacancies Posted Application
                          </div>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link
                        href="/dashboard/vacancies-application"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">
                        <div className="inline-flex items-center">
                          <RxDashboard className="h-3.5 w-3.5 mr-2" />
                          Vacancies Application
                        </div>
                      </Link>
                    </li>
                  )}

                  <li>
                    <button
                      onClick={logout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">
                      <div className="inline-flex items-center">
                        <TbLogout className="h-3.5 w-3.5 mr-2" />
                        Logout
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="md:order-2 flex items-center gap-x-2 mr-1 md:mr-0">
              <Link
                href="/auth/login"
                className="px-4 py-2 border-2 border-transparent bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 rounded-full text-white">
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="border-2 px-4 py-2 hidden sm:block border-gray-300 dark:border-gray-500 rounded-full hover:bg-blue-600 hover:text-white hover:border-transparent dark:text-white">
                Sign Up
              </Link>
            </div>
          )}
          <button
            data-collapse-toggle="mobile-menu-language-select"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-language-select"
            aria-expanded="false">
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
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-language-select">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <li>
              <Link
                href="/home"
                className={`block py-2 pl-3 pr-4 md:p-0 rounded hover:bg-gray-200 md:hover:bg-transparent ${
                  router.pathname === "/home" && activeClass
                }`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/vacancies"
                className={`block py-2 pl-3 pr-4 md:p-0 rounded hover:bg-gray-200 md:hover:bg-transparent ${
                  router.pathname === "/vacancies" && activeClass
                }`}>
                Vacancies
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={`block py-2 pl-3 pr-4 md:p-0 rounded hover:bg-gray-200 md:hover:bg-transparent ${
                  router.pathname === "/team" && activeClass
                }`}>
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 pl-3 pr-4 md:p-0 rounded hover:bg-gray-200 md:hover:bg-transparent ${
                  router.pathname === "/contact" && activeClass
                }`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
