import Head from 'next/head'
import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import Main from '@/layout/dashboard/Main'
import AuthContext from '@/AuthContext'
import { isAuthenticatedUser } from '@/isAuthenticated'

const DashboardPage = () => {

  const { user } = useContext(AuthContext)

  useEffect(() => {}, [user])

  return (
    <>
      <Main />
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const access = req.cookies.access
  const isAuthenticated = await isAuthenticatedUser(access)

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default DashboardPage