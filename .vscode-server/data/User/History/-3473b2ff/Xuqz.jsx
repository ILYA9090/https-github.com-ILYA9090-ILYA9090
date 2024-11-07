import React from 'react'
import { useRemoveAllPostsMutation } from '../slices/PostsApi'

const [removePosts]  = useRemoveAllPostsMutation();
const MyButtonDeletePosts = () => {
  return (
    <button>

    </button>
  )
}

export default MyButtonDeletePosts
