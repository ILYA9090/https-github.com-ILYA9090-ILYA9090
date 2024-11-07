import React from 'react'
import { useRemoveAllPostsMutation } from '../slices/PostsApi'

const MyButtonDeletePosts = ({data}) => {
const [removeAll] = useRemoveAllPostsMutation()


const HandleRemoveAllPoSTS = async(data) => 
    await removeAll(data)

  return (
    <button onClick={(data) => HandleRemoveAllPoSTS(data)}>
удалить все посты!
    </button>
  )
}

export default MyButtonDeletePosts
