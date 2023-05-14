import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

import Layout from "@/layout/Layout";
import Banner from "@/utils/Banner";
import VacancyList from "@/vacancy/VacancyList";
import Filters from "@/layout/Filter";
import SearchBar from "@/layout/SearchBar";
import VacancyDetails from "@/vacancy/VacancyDetails";
import Navbar from "@/layout/Navbar";

const Vacancies = ({ data }) => {

  const [currentVacancyData, setCurrentVacancyData] = useState(data[0])

  return (
    <>
      <Head>
        <title>Invocamp | Vacancies</title>
      </Head>

      <Navbar />
      <div className="w-full px-3 md:px-5 my-7 md:gap-x-6 h-[80vh]">
        <SearchBar />
        <Filters />
        <div className="flex flex-col lg:flex-row md:gap-x-6 mt-6 justify-center max-w-7xl mx-auto">
          <div className="vacancy-list-wrapper flex flex-col rounded-2xl lg:border border-gray-200 dark:border-gray-700 w-full">
            <div className="lg:flex hidden flextext-sm-wrap font-medium text-center text-gray-500 lg:border-b px-5 md:px-8 py-3 border-gray-200 rounded-t-lg rounded-b-lg lg:rounded-b-none lg:rounded-t-2xl bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-slate-800 mb-4 lg:mb-0 ">
              <h1 className="text-xl md:text-xl font-semibold text-gray-800 dark:text-white">
                Vacancies
              </h1>
            </div>

            <div className="overflow-y-auto w-full h-[60vh] flex flex-col gap-y-4 lg:gap-y-0 lg:rounded-b-2xl">
              {data.map((vacancy) => (
                <VacancyList
                  key={vacancy.id}
                  vacancy={vacancy}
                  passVacancyData={setCurrentVacancyData}
                />
              ))}
            </div>
          </div>
          <div className="vacancy-details-wrapper w-full">
            <VacancyDetails vacancy={currentVacancyData} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const title = query.title || ''
  const adddress = query.adddress || ''
  const skills = query.skills || ''
  const employment_type = query.employment_type || ''
  const work_type = query.work_type || ''
  const education_level = query.education_level || ''

  const queryStr = `?title=${title}&adddress=${adddress}&skills=${skills}&employment_type=${employment_type}&work_type=${work_type}&education_level=${education_level}`

  const res = await axios.get(`${process.env.API_URL}/api/vacancies/${queryStr}`)
  const data = res.data.data

  return {
    props: {
      data
    }
  }
}

export default Vacancies;
