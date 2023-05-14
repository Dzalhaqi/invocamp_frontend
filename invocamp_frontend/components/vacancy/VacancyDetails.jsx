import React from 'react'
import dynamic from 'next/dynamic'
import moment from 'moment'

const VacancyDetails = ({ vacancy }) => {

  const {
    id,
    title,
    lat,
    lng,
    description,
    address,
    salary,
    employment_type,
    work_type,
    education_level,
    skills,
    provider_name,
    provider_logo,
    published_date,
    updated_date,
  } = vacancy


  const Map = dynamic(() => import('@/vacancy/VacancyPostMap'), {
    loading: () => <p>Loading...</p>,
    ssr: false
  })

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-2xl border border-gray-200 dark:border-gray-700 min-w-full">
      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b px-5 md:px-8 py-3 border-gray-200 rounded-t-lg md:rounded-t-2xl bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-slate-800">
        <h1 className="text-xl md:text-xl font-semibold text-gray-800 dark:text-white">
          Vacancy Details
        </h1>
      </div>

      <div className="p-8 overflow-y-auto h-[60vh]">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              {title}
            </h1>
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                By {provider_name}
              </p>
              {moment(published_date).format('DD/MM/YYYY') !== moment(updated_date).format('DD/MM/YYYY') ? (
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Updated at {moment(updated_date).fromNow()}
                </p>
              ) : (
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Published at {moment(published_date).fromNow()}
                  </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm md:text-md font-semibold text-gray-800 dark:text-white">
              Employment Type
            </h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {employment_type}
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm md:text-md font-semibold text-gray-800 dark:text-white">
              Work Type
            </h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {work_type}
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm md:text-md font-semibold text-gray-800 dark:text-white">
              Education Level
            </h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {education_level}
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm md:text-md font-semibold text-gray-800 dark:text-white">
              Skills
            </h1>
            <div className="flex flex-row gap-x-2">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {skill}
                  </span>
                ))
              ) : (
                <span className="bg-gray-300 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  No specified
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm md:text-md font-semibold text-gray-800 dark:text-white">
              Salary
            </h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Rp {salary}
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm md:text-md font-semibold text-gray-800 dark:text-white">
              Address
            </h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {address}
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm md:text-md font-semibold text-gray-800 dark:text-white">
              Description
            </h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm md:text-md font-semibold text-gray-800 dark:text-white">
              Location
            </h1>
            <div className="w-full h-[50vh]">
              <Map lat={lat} lng={lng} />   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancyDetails