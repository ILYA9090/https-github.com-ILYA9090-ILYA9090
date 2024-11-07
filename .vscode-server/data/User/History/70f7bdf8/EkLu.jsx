import React from "react";
import { useGetCommentsQuery } from "../../slices/PostsApi";
import './commentsStyle.css'

const InputComments = () => {
  const { data = [] } = useGetCommentsQuery();

  return (
    <div className="commentsList">
      <ul>
        {data.map((com) => (
          <li id="comments" key={com.id}>
            <p>{com.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputComments;
