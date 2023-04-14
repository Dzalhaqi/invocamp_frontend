import Head from "next/head";
import Image from "next/image";
import Layout from "@/layout/Layout";
import Banner from "@/utils/Banner";
import VacancyList from "@/vacancy/VacancyList";
import Filters from "@/layout/Filter";
import SearchBar from "@/layout/SearchBar";

const Jobs = () => {
  return (
    <Layout title="Grab your experience">
      <div className="flex flex-wrap lg:flex-nowrap justify-center w-full px-5 my-10 md:gap-x-6">
        <div className="filter-container">
          <Filters />
        </div>
        <div className="content-container">
          <SearchBar />
          <VacancyList />
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
