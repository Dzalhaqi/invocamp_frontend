import React, { useContext } from "react";
import AuthContext from "@/AuthContext";
import Skeleton from "react-loading-skeleton"

const Work = () => {

  const { user } = useContext(AuthContext)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b px-5 md:px-8 py-3 border-gray-200 rounded-t-lg md:rounded-t-3xl bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-slate-800">
        <h1 className="text-xl md:text-xl font-semibold text-gray-800 dark:text-white">
          Work Experience
        </h1>
      </div>
      {user !== null ? (user.user.work_experiences.length > 0 ? (
        <div className="p-8 pb-0">
          <ol className="relative border-l border-gray-200 dark:border-gray-700 ">
            {user.user.work_experiences.map((work, index) => (
              <li className="mb-8 ml-6" key={index}>
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
                <h3 className="mb-2 md:text-xl text-md font-semibold text-gray-900 dark:text-white">
                  {work.job_title} at {work.company_name}{" "}
                  <span className="bg-green-100 text-green-800 text-sm font-medium ml-1 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    {work.position}
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                  {work.start_date} -{" "}
                  {work.end_date ? work.end_date : "Present"}
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-100">
                  {work.description ? work.description : ""}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="p-5">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            No work experiences added yet
          </span>
        </div>
      )) : (
        <Skeleton count={3} />
      )}
    </div>
  );
};

export default Work;
