import InternProfile from "@/layout/dashboard/intern/InternProfile"
import RecruiterProfile from "@/layout/dashboard/recruiter/RecruiterProfile";
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '@/AuthContext'

import { isAuthenticatedUser } from '@/isAuthenticated'

const ProfilePage = () => {

  const { user } = useContext(AuthContext)

  useEffect(() => {}, [user])

  return (
    <>
      {user && user.user.account_type === "Intern" ? <InternProfile /> : <RecruiterProfile />}
    </>
  )
}

export async function getServerSideProps({ req, params }) {
  const access = req.cookies.access;
  const isAuthenticated = await isAuthenticatedUser(access);

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {}
  };
}

export default ProfilePage