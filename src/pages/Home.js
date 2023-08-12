import React from 'react'
import Post from '../components/Post'
import usePosts from '../hooks/usePosts'
import { useAuth } from '../providers/AuthProvider'

const Home = () => {
  const { posts, setPosts, isLoading } = usePosts()
  const { isLoggedIn } = useAuth()

  console.log('Home:', isLoggedIn)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <header className="flex flex-col h-80 bg-gradient-to-r from-slate-500 to-yellow-50 font-extrabold text-white text-left items-center justify-center gap-3">
        <h1 className="text-5xl w-4/5">LearnHub</h1>
        <h2 className="text-2xl w-4/5">Hub for Educational Videos</h2>
      </header>
      <main className="">
        <div className="flex flex-wrap justify-around mx-8">
          {posts &&
            posts.map((post) => {
              return <Post key={post.id} post={post} />
            })}
        </div>
      </main>
    </div>
  )
}

export default Home
