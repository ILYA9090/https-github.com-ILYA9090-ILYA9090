import React from "react";
import { useGetCommentsQuery } from "../../slices/apiApp";
import { useDeleteCommentsMutation } from "../../slices/apiApp";

const CommentsMap = () => {
  const { data = [] } = useGetCommentsQuery();
  const [remove] = useDeleteCommentsMutation();

  const handleDeleteCom = async(id) => {
    return await remove(id)
  }
 

  return (
    <div className="commentsMap">
      <ol>
        <div>
        {data.map((com) => (
          <li className='comments' key={com.id}>
            <p>{com.text}</p>
          <button onClick={() => handleDeleteCom(com.id)}>delete</button>
          </li>    
        ))}
        </div>
      </ol>
      
    </div>
  );
};

export default CommentsMap;
