import React from 'react'
import { useRemoveAllPostsMutation } from '../slices/PostsApi'

const MyButtonDeletePosts = () => {
const [removeAll] = useRemoveAllPostsMutation()
  return (
    <button onClick={() => removeAll()}>
удалить все посты!
    </button>
  )
}

export default MyButtonDeletePosts
