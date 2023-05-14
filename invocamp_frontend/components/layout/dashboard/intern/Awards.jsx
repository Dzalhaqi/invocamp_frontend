import React, { useEffect, useContext } from 'react'
import AuthContext from '@/AuthContext'
import Skeleton from 'react-loading-skeleton'

const Awards = () => {

  const { user } = useContext(AuthContext)

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg md:rounded-2xl dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b px-5 md:px-8 py-3 border-gray-200 rounded-t-lg md:rounded-t-3xl bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-slate-800">
        <h1 className="text-xl md:text-xl font-semibold text-gray-800 dark:text-white">
          Awards and Achievement
        </h1>
      </div>

      <div className="p-5 flex flex-col gap-y-4">
        {user !== null ? (
          user.user.awards.length > 0 ? (
            user.user.awards.map((award, index) => (
              <div
                key={index}
                className="border rounded-xl border-gray-200 dark:border-gray-700">
                <div className="p-4 md:p-8">
                  <div className="flex flex-row items-center mb-5">
                    <svg
                      className="flex-shrink-0 w-6 h-6 mr-2 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                    </svg>
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                      {award.title}
                    </h2>
                  </div>
                  <p className="dark:text-gray-100">
                    {award.description ? award.description : ""}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              No awards added yet
            </span>
          )
        ) : (
          <Skeleton count={3} />
        )}
      </div>
    </div>
  );
}

export default Awards