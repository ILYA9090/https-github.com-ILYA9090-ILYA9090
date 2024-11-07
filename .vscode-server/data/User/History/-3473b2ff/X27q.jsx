import React from 'react'
import { useRemoveAllPostsMutation } from '../slices/PostsApi'

const MyButtonDeletePosts = ({data}) => {
const [removeAll] = useRemoveAllPostsMutation()


const HandleRemoveAllPoSTS = async(da) => 
    await removeAll(da)

  return (
    <button onClick={(data) => HandleRemoveAllPoSTS(data)}>
удалить все посты!
    </button>
  )
}

export default MyButtonDeletePosts
