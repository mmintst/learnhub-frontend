import React, { useEffect, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import usePosts from '../hooks/usePosts'
import Post from '../components/Post'
import { Box, Pagination } from '@mui/material'

const Home = () => {
  const { posts } = usePosts()
  const { isLoggedIn } = useAuth()

  const [list, setList] = useState(posts)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [isShown, setIsShown] = useState(false)
  const [activePagination, setActivePagination] = useState(true)
  let postPerPage = 9

  console.log('Home:', isLoggedIn)

  const applyPagination = () => {
    let updatedPosts = posts

    setActivePagination(true)

    if (activePagination) {
      setList(updatedPosts.slice((page - 1) * postPerPage, page * postPerPage))
    } else {
      setList(updatedPosts)
    }
    setPageCount(updatedPosts.length)
  }

  useEffect(() => applyPagination(), [posts, page, activePagination])

  const handleChangePage = (_, value) => {
    setPage(value)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true)
    }, 2000)
  })

  return (
    <div>
      <header className="flex flex-col h-80 bg-gradient-to-r from-slate-500 to-yellow-50 font-extrabold text-white text-left items-center justify-center gap-3">
        <h1 className="text-5xl w-4/5">LearnHub</h1>
        <h2 className="text-2xl w-4/5">Hub for Educational Videos</h2>
      </header>
      {isShown ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {list &&
              list.map((post) => {
                return <Post key={post.id} post={post} />
              })}
          </div>

          {activePagination && (
            <div className={list.length <= 4 ? 'mb-[190px]' : ''}>
              <Box justifyContent={'center'} alignItems={'center'} display={'flex'} sx={{ margin: '20px 0px' }}>
                <Pagination count={Math.ceil(pageCount / postPerPage)} page={page} onChange={handleChangePage} />
              </Box>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Home
