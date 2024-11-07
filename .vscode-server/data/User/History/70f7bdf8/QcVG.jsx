import React from "react";
import { useGetCommentsQuery } from "../../slices/PostsApi";
import { useDeleteCommentsMutation } from "../../slices/PostsApi";

const CommentsMap = () => {
  const { data = [] } = useGetCommentsQuery();
  const [remove] = useDeleteCommentsMutation();

  const handleDeleteCom = async(id) => {
    return await remove(id)
  }
 

  return (
    <div className="commentsMap">
      <ol>
        {data.map((com) => (
          <li className='commentsMap' key={com.id}>
            <p>{com.text}</p>
          <button onClick={() => handleDeleteCom(com.id)}>delete</button>
          </li>    
        ))}
      </ol>
    </div>
  );
};

export default CommentsMap;
