import axios from "axios"
import { useEffect, useState, createContext } from "react"
import { useRouter } from "next/router"

const VacancyApplicationContext = createContext()

export const VacancyApplicationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const router = useRouter()

  const createApplication = async ({ vacancy_id }) => {
    try {
      setLoading(true)
      const res = await axios.post(`${process.env.API_URL}/api/vacancy-applications/`, {
        vacancy_id,
      })
      if (res.data.success) {
        setLoading(false)
        router.push('/dashboard')
      }

    } catch (err) {
      setLoading(false)
      setError(
        err.response &&
        (err.response.data.error.detail || err.response.data.error)
      )
    }
  }

  const updateApplication = async ({ data }) => {
    try {
      setLoading(true)
      const res = await axios.put(`${process.env.API_URL}/api/vacancy-applications/`, {
        ...data
      })
      if (res.data.success) {
        setLoading(false)
        router.push('/dashboard')
      }
    } catch (err) {
      setLoading(false)
      setError(
        err.response &&
        (err.response.data.error.detail || err.response.data.error)
      )
    }
  }

  return (
    <VacancyApplicationContext.Provider
      value={{
        loading,
        error,
        createApplication,
        updateApplication,
      }}
    >
      {children}
    </VacancyApplicationContext.Provider>
  )

}

export default VacancyApplicationContext