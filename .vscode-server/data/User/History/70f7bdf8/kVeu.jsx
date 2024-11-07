import React from 'react'
import { useGetCommentsQuery } from '../../slices/CommentsApi';
import { useDeleteCommentsMutation } from '../../slices/CommentsApi';
const CommentsMap = () => {

    const {data =[]} = useGetCommentsQuery()
    const [removeComments] = useDeleteCommentsMutation;


    const handleDeleteComments = async(id) => {
        await removeComments(id)
    }
  return (
    <div>
        <ul>
      {data.map((com) => (
        <li key={com.id}>
            {com.text}
        </li>
      ))}
      </ul>
      <button onClick={() => handleDeleteComments(com.id)}>удалить комментарий</button>
    </div>
  )
}

export default CommentsMap
