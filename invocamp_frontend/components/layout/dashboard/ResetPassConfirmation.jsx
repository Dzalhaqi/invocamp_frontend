import React from 'react'

const ResetPassConfirmation = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b px-5 md:px-8 py-3 border-gray-200 rounded-t-lg md:rounded-t-3xl bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-slate-800">
        <h1 className="text-xl md:text-xl font-semibold text-gray-800 dark:text-white">
          Reset Password
        </h1>
      </div>

      <form className="p-5 w-full">
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Email
        </label>
        <div className="relative mb-3">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@invocamp.com"
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ResetPassConfirmation