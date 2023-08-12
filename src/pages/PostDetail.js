import React from 'react'
import { Link, useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import ReactPlayer from 'react-player'
import { useAuth } from '../providers/AuthProvider'
import { Rating } from '@mui/material'

const PostDetail = () => {
  const { id } = useParams()
  const { post, isLoading } = usePost(id)
  const { isLoggedIn, username } = useAuth()

  if (isLoading) return <h1>Loading...</h1>

  const matchUser = () => {
    if (post.postedBy.username === username) {
      return true
    }
  }

  return (
    <div className="flex justify-center">
      {post && (
        <div className="flex flex-col items-center gap-8 border-4 border-gray-500 rounded-lg w-1/2 m-10 py-10 bg-gray-100 drop-shadow-2xl">
          <p className="block mb-2 text-2xl font-bold text-gray-500">{post.videoTitle}</p>
          <p className="block mb-2 text-lg text-gray-500">{post.creatorName}</p>
          <ReactPlayer url={post.videoUrl} />
          <div className="flex flex-col items-end w-full p-10">
            <p>{post.comment}</p>
            <Rating name="no-value" value={post.rating} readOnly />
            <p className="italic mt-3">- {post.postedBy.name}</p>
            <p>{post.createdAt}</p>
            <p className="mb-3">(Updated on {post.updatedAt})</p>
            {isLoggedIn && matchUser() === true && (
              <Link to={`/edit/${id}`}>
                <p className="border border-gray-300 bg-gray-300 text-white p-1 rounded-lg hover:bg-gray-500 my-4 text-lg">
                  Edit
                </p>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PostDetail
