import React from 'react'
import { useRouter } from 'next/router'
import EditProfileData from '@/layout/dashboard/EditProfileData'

const EditProfileDataPage = () => {
  // make sure this page only render if request method is POST
  return (
    <EditProfileData />
  )
}

export default EditProfileDataPage