import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className="flex my-10 w-1/4 mx-4 shadow-2xl rounded-lg overflow-hidden">
      <Link to={`/post/${post.id}`}>
        <img src={post.thumbnailUrl} alt={post.videoUrl} />
        <div className="p-5 flex flex-col content-between">
          <p className="text-ellipsis overflow-hidden h-[50px]">{post.videoTitle}</p>
          <p>{post.creatorName}</p>
          <p className="text-right pt-4">{post.comment}</p>
          <div className="flex justify-between items-end pt-4 h-[70px]">
            <p>{post.postedBy.name}</p>
            <Rating name="no-value" value={post.rating} className="items-end" readOnly />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post
