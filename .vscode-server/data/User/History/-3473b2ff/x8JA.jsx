import React from 'react'
import { useGetPostsQuery, useRemoveAllPostsMutation } from '../slices/PostsApi'

const MyButtonDeletePosts = () => {
const [removeAll] = useRemoveAllPostsMutation()
const {data} = useGetPostsQuery()


const HandleRemoveAllPoSTS = async(d) => 
    await removeAll(d)

  return (
    <button onClick={(data) => HandleRemoveAllPoSTS(data)}>
удалить все посты!
    </button>
  )
}

export default MyButtonDeletePosts
