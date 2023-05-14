import React from 'react'
import Link from "next/link"
import Head from "next/head"

import Signin from "@/auth/Signin"
import { isAuthenticatedUser } from '@/isAuthenticated'

const Login = () => {
  return (
    <>
      <Head>
        <title>Login to InvoCamp</title>
      </Head>
      <Signin />
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const access = req.cookies.access
  const isAuthenticated = await isAuthenticatedUser(access)

  if (isAuthenticated) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default Login