import React from 'react'
import { useGetCommentsQuery } from '../../slices/PostsApi'
const Comments = () => {
        const {data=[]} = useGetCommentsQuery();

  return (
    <div className='commentsList'>
        <ul>
      {data.map((com) => (
        <li id='comments'key={com.id}>
            <p>{com.text}</p>
            <p>{com.postId}</p>
            </li>
    ))}
    </ul>
    </div>
  )
}

export default Comments
