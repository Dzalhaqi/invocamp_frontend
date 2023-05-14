import React, { useContext } from 'react'
import AuthContext from '@/AuthContext'

import { IoSchool } from "react-icons/io5"
import Skeleton from 'react-loading-skeleton'

const Education = () => {

  const { user } = useContext(AuthContext)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b px-5 md:px-8 py-3 border-gray-200 rounded-t-lg md:rounded-t-3xl bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-slate-800">
        <h1 className="text-xl md:text-xl font-semibold text-gray-800 dark:text-white">
          Education
        </h1>
      </div>

      {user !== null ? (user.user.work_experiences.length > 0 ? (
        <div className="p-8 pb-0">
          <ol className="relative border-l border-gray-200 dark:border-gray-700 ">
            {user.user.educations.map((education, index) => (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <IoSchool className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                </span>
                <h3 className="mb-1 md:text-xl text-md font-semibold text-gray-900 dark:text-white">
                  {education.institution}
                </h3>
                <p className="text-base font-normal mb-2 text-gray-500 dark:text-gray-100">
                  {education.degree} of {education.field_of_study}
                </p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                  {education.start_date} -{" "}
                  {education.end_date ? education.end_date : "Present"}
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-100">
                  {education.description ? education.description : ""}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="p-5">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            No education added yet
          </span>
        </div>
      )) : (
        <Skeleton count={3} />
      )}
    </div>
  );
}

export default Education