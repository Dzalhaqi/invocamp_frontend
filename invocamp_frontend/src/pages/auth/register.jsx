import React from 'react'
import Head from 'next/head'

import SignUp from '@/auth/Signup'
import { isAuthenticatedUser } from '@/isAuthenticated'

const Register = () => {
  return (
    <>
      <Head>
        <title>Register to InvoCamp</title>
      </Head>
      <SignUp />
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const access = req.cookies.access;
  const isAuthenticated = await isAuthenticatedUser(access);

  if (isAuthenticated) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Register