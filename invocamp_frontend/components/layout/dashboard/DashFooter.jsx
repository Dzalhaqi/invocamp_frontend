import React from 'react'

const DashFooter = () => {
  return (
    <footer className="bg-white w-full rounded-lg md:rounded-2xl dark:bg-gray-800 mt-5 border border-gray-200 dark:border-gray-700">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://invoCamp.com/"
            className="flex items-center mb-4 sm:mb-0">
            <img
              src="../../../img/logo2.png"
              className="h-8 mr-3"
              alt="InvoCamp Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              InvoCamp
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://invoCamp.com/" className="hover:underline">
            InvoCamp™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default DashFooter