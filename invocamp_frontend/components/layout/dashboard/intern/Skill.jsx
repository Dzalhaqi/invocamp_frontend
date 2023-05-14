import React, { useContext } from 'react'
import AuthContext from '@/AuthContext'
import Skeleton from 'react-loading-skeleton'

const Skill = () => {

  const { user } = useContext(AuthContext)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b px-5 md:px-8 py-3 border-gray-200 rounded-t-lg md:rounded-t-3xl bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-slate-800">
        <h1 className="text-xl md:text-xl font-semibold text-gray-800 dark:text-white">
          Skills
        </h1>
      </div>

      <div className="gap-2 flex flex-wrap p-5">
        {user !== null ? (
          user.user.skills.length > 0 ? (
            user.user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm md:text-md font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {skill}
              </span>
            ))
          ) : (
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                No skills added yet
              </span>
            )
        ) : (
          <Skeleton count={3} />
        )}
      </div>
    </div>
  );
}

export default Skill