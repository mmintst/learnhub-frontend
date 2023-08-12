import React, { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Rating } from '@mui/material'
import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import { host } from '../constant/host'

const Edit = () => {
  const [newComment, setNewComment] = useState('')
  const [rating, setRating] = useState(0)
  const { token } = useAuth()
  const { id } = useParams()
  const { isLoading } = usePost(id)

  if (isLoading) return <h1>Loading...</h1>

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${host}/content/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          comment: newComment,
          rating: parseInt(rating),
        }),
        headers: {
          'Content-type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()

      console.log(data)
      console.log(token)
    } catch (err) {
      console.log(err)
    }

    setNewComment('')
    setRating(0)
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-5 border-4 border-gray-500 rounded-lg w-1/3 m-10 py-10 bg-gray-100 drop-shadow-2xl">
        <h1 className="block mb-2 text-2xl font-bold text-gray-500">Edit content</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
          <label className="block mb-2 text-xl font-bold text-gray-500">Comment (280 characters maximum)</label>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-1/2 p-1.5"
            required
          />

          <label className="block mb-2 text-xl font-bold text-gray-500">Rating</label>
          <Rating name="no-value" value={rating} onChange={(e) => setRating(e.target.value)} required />

          <input
            type="submit"
            value="Edit"
            className="border border-gray-300 bg-gray-300 text-white p-1 rounded-lg hover:bg-gray-500 my-4 text-lg"
          />
        </form>
      </div>
    </div>
  )
}

export default Edit
