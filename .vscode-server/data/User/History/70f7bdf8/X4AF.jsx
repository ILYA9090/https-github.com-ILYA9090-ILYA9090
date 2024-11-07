import React from 'react'
import { useGetCommentsQuery } from '../../slices/PostsApi'
const Comments = () => {
        const {data} = useGetCommentsQuery();

  return (
    <div>
        <ul>
      {data.map((com) => 
        <li key={com.id}>
            <h1>{com.text}</h1>
            <p>{com.postId}</p>
            </li>
    )}
    </ul>
    </div>
  )
}

export default Comments
