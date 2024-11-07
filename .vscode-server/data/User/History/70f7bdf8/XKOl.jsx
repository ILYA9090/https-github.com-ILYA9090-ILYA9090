import React from 'react'
import { useGetCommentsQuery } from '../../slices/PostsApi'
const Comments = () => {
        const {data=[]} = useGetCommentsQuery();

  return (
    <div>
        <h1>
            Список комментариев
        </h1>
    <div className='commentsList'>
   
        <ul>
      {data.map((com) => (
        <li key={com.id}>
            <p>{com.text}</p>
            <p>{com.postId}</p>
            </li>
    ))}
    </ul>
    </div>
    </div>
  )
}

export default Comments
