import axios from 'axios'
import { useEffect, useState } from 'react'

export interface UseFetchResult<T> {
  data: T[]
  isLoading: boolean
  error: string | null
}

const useFetch = <T>(url: string, limit?: number, reload?: string): UseFetchResult<T> => {
  const [data, setData] = useState<T[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      console.log(url)
      try {
        const response = await axios.get<T[]>(url, {
          params: {
            _limit: limit
          },
          cancelToken: cancelTokenSource.token
        })

        if (response.status !== 200) {
          throw new Error(`Error: Request failed with status code ${response.status}`)
        }

        setData(response.data)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request cancelled:', error.message)
        } else {
          setError(`Error fetching data: ${(error as Error).message}`)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (url) {
      fetchData()
    }

    return () => {
      cancelTokenSource.cancel('Operation cancelled due to new request.')
    }
  }, [url, limit, reload])

  return { data, isLoading, error }
}

export default useFetch
