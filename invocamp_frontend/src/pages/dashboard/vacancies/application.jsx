import React from 'react'
import axios from 'axios'

import Main from '@/layout/dashboard/Main'
import AppliedVacancies from '@/layout/dashboard/intern/AppliedVacancies'
import VacancyApplicationTable from '@/layout/dashboard/intern/VacancyApplicationTable'

import { isAuthenticatedUser } from '@/isAuthenticated'
import { getUser } from "@/getCurrentUser";

const VacanciesPage = () => {
  return (
    <>
      <Main>
        <VacancyApplicationTable />
      </Main>
    </>
  )
}

export async function getServerSideProps({ req, params }) { 
  const access = req.cookies.access
  const isAuthenticated = await isAuthenticatedUser(access)
  const getCurrentUser = await getUser(access)

  if (isAuthenticated && getCurrentUser.data.user.user.account_type !== "Intern") {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const myApplication = await axios.get(`${process.env.API_URL}/api/vacancies-applications/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })

  return {
    props: {
      application: myApplication.data.data,
    }
  }
  
}

export default VacanciesPage