import { useGetPostsQuery } from "../slice/postsApi";
import React from "react";


const Posts = () => {

  const {data} = useGetPostsQuery();

  
  return (
    <div >
      <ul>
        {data.map(item => (
        <li key={item.id}>
            {item.title}
        </li>))}
      </ul>
    </div>
  );
}

export default Posts;
