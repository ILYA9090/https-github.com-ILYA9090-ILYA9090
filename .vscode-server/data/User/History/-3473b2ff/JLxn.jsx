import React from 'react'
import { useRemoveAllPostsMutation } from '../slices/PostsApi'

const MyButtonDeletePosts = () => {
const [removeAll] = useRemoveAllPostsMutation()


const HandleRemoveAllPoSTS = async() => 
    await removeAll()

  return (
    <button >
удалить все посты!
    </button>
  )
}

export default MyButtonDeletePosts
