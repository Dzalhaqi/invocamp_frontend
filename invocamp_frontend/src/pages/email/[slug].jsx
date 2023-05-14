import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import AuthContext from "@/AuthContext"
import { toast } from 'react-toastify'

const EmailVerification = () => {

  const { loading, error, clearErrors, confirmEmail } =
    useContext(AuthContext);
  
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (slug) {
      confirmEmail(slug)
    }
  }, [slug, error])
}

export default EmailVerification