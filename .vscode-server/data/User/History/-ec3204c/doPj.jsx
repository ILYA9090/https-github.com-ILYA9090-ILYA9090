import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostServise';
const PostIdPage = () => {

    const params = useParams();
    const [fetchPostById, isLoading, error] = useFetching(() => {
        const responce = Pos
    })
    useEffect(() =>{

    })
  return (
    <div>
      <h1>
        Вы открыли страницу поста c ID ={params.id}
      </h1>
    </div>
  )
}

export default PostIdPage
