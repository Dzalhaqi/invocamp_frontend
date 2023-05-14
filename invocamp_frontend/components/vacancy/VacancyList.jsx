import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import moment from 'moment'

const VacancyList = (props) => {

  const { vacancy } = props
  
  const {
    id,
    title,
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

  const handleClick = () => {
    props.passVacancyData(vacancy)
  }

  return (
    <div className="w-full px-6 py-4 rounded-lg lg:rounded-none bg-white border lg:border-t-0 lg:border-l-0 lg:border-r-0 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="bg-gray-100 text-gray-800 dark:text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 border border-gray-500">
          <svg
            aria-hidden="true"
            className="w-3 h-3 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"></path>
          </svg>
          {moment(published_date).fromNow()}
        </span>
        <Link
          href="#"
          className="px-3 py-1 text-xs font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
          tabIndex="0"
          role="button">
          {employment_type}
        </Link>
      </div>

      <div className="mt-2">
        <span
          className="text-lg font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          tabIndex="0"
          onClick={handleClick}
          role="button">
          {title}
        </span>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
          {description.slice(0, 50)}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span
          href="#"
          className="text-blue-600 dark:text-blue-500 text-sm"
          tabIndex="0">
          {address}
        </span>

        <div className="flex items-center">
          <Image
            className="hidden object-cover w-6 h-6 mx-4 rounded-full sm:block"
            src={provider_logo ? provider_logo : "/img/logo.png"}
            alt=""
            width={24}
            height={24}
          />
          <a
            className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 text-sm"
            tabIndex="0"
            role="link">
            {provider_name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default VacancyList