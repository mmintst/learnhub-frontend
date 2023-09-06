import { useEffect, useState } from 'react'
import { host } from '../constant/host'

const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/content`)
        const data = await res.json()

        setPosts(data.data)
        console.log(data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])
  return {
    posts: posts,
    setPosts,
    isLoading,
  }
}

export default usePosts
