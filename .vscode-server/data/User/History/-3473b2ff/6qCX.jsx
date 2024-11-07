import React from 'react'
import { useRemoveAllPostsMutation } from '../slices/PostsApi'

const MyButtonDeletePosts = () => {
const [removeAll] = useRemoveAllPostsMutation()


const HandleRemoveAllPoSTS = async({da}) => 
    await removeAll()

  return (
    <button onClick={() => HandleRemoveAllPoSTS()}>
удалить все посты!
    </button>
  )
}

export default MyButtonDeletePosts
