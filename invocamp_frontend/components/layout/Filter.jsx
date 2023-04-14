import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { initDrawers } from "flowbite"
import { BiFilterAlt } from "react-icons/bi"

const Filters = () => {
  const router = useRouter();

  useEffect(() => {
    initDrawers()
  }, [])

  let queryParams;
  if (typeof window !== "undefined") {
    queryParams = new URLSearchParams(window.location.search);
  }

  function handleClick(checkbox) {
    if (typeof window !== "undefined") {
      const checkboxes = document.getElementsByName(checkbox.name);

      checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
      });
    }

    if (checkbox.checked === false) {
      if (queryParams.has(checkbox.name)) {
        queryParams.delete(checkbox.name);
        router.replace({
          search: queryParams.toString(),
        });
      }
    } else {
      if (queryParams.has(checkbox.name)) {
        queryParams.set(checkbox.name, checkbox.value);
      } else {
        queryParams.append(checkbox.name, checkbox.value);
      }

      router.replace({
        search: queryParams.toString(),
      });
    }
  }

  function checkHandler(checkBoxType, checkBoxValue) {
    if (typeof window !== "undefined") {
      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  }

  return (
    <>
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-[100] h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label">
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-300">
          <BiFilterAlt className="mr-2" />
          Filters
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <hr />

        <h3 className="mt-4 mb-1 font-semibold text-gray-900 dark:text-white">
          Vacancy Type
        </h3>

        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Full Time
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="react-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Part Time
              </label>
            </div>
          </li>
        </ul>

        <h3 className="mt-4 mb-1 font-semibold text-gray-900 dark:text-white">
          Vacancy Arrangement
        </h3>

        <ul className="w-ful text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remote
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="react-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                On Site
              </label>
            </div>
          </li>
        </ul>

        <h3 className="mt-4 mb-1 font-semibold text-gray-900 dark:text-white">
          Education
        </h3>

        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                High School - Diploma
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="angular-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Bachelor
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="laravel-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="laravel-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Master
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="laravel-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="laravel-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                PhD
              </label>
            </div>
          </li>
        </ul>

        <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">
          Compensation Type
        </h3>

        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Paid
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="react-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Unpaid
              </label>
            </div>
          </li>
        </ul>

        <h3 className="mt-4 mb-1 font-semibold text-gray-900 dark:text-white">
          Possible Permanent Opportunity
        </h3>

        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Yes
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="react-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                No
              </label>
            </div>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block sidebar p-4 max-w-5xl rounded-2xl dark:bg-gray-800 bg-white backdrop-filter backdrop-blur-2xl">
        <h2 className="mt-4 mb-1 font-semibold text-gray-900 dark:text-white text-lg">
          Filters
        </h2>

        <hr />

        <h3 className="mt-4 mb-1 font-semibold text-gray-900 dark:text-white">
          Vacancy Type
        </h3>

        {/* <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="jobType"
          id="check1"
          value="Permanent"
          defaultChecked={checkHandler("jobType", "Permanent")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check1">
          Permanent
        </label>
      </div> 

      /* <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="jobType"
          id="check2"
          value="Temporary"
          defaultChecked={checkHandler("jobType", "Temporary")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check2">
          Temporary
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="jobType"
          id="check3"
          value="Intership"
          defaultChecked={checkHandler("jobType", "Intership")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check3">
          Internship
        </label>
      </div> */}

        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Full Time
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="react-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Part Time
              </label>
            </div>
          </li>
        </ul>

        <h3 className="mt-4 mb-1 font-semibold text-gray-900 dark:text-white">
          Vacancy Arrangement
        </h3>

        <ul className="w-ful text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remote
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="react-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                On Site
              </label>
            </div>
          </li>
        </ul>

        <h3 className="mt-4 mb-1 font-semibold text-gray-900 dark:text-white">
          Education
        </h3>

        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                High School - Diploma
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="angular-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Bachelor
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="laravel-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="laravel-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Master
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="laravel-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="laravel-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                PhD
              </label>
            </div>
          </li>
        </ul>

        <h3 className="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">
          Compensation Type
        </h3>

        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Paid
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="react-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Unpaid
              </label>
            </div>
          </li>
        </ul>

        <h3 className="mt-4 mb-1 font-semibold text-gray-900 dark:text-white">
          Possible Permanent Opportunity
        </h3>

        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Yes
              </label>
            </div>
          </li>
          <li className="w-full rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="react-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                No
              </label>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Filters;
