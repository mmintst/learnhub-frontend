import { useEffect, useState } from 'react'
import { host } from '../constant/host'

const usePost = (id) => {
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const res = await fetch(`${host}/content/${id}`)
        const data = await res.json()

        setPost(data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { post, isLoading }
}

export default usePost
