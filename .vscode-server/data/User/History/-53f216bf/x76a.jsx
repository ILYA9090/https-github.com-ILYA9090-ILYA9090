import React from "react";
import "./style.css";
import MyButtonDeletePosts from "./MyButtonDeletePosts";
import Posts from "./Posts";

const DataJsonMap = ({ data, handleDeletePosts, children }) => {
  return (
    <div>
      {data.length === 0 ? <h1>постов нет!</h1> : 
      <ol>
        {data.map((post) => (
          <li key={post.id} className="dataJson">
            {post.title}
            <button onClick={() => route(`/postsJson/${post.id}`)}>open posts</button>
            <button type="button" onClick={() => handleDeletePosts(post.id)}>
              delete
            </button>
          </li>
        ))}
      </ol>
}
      <MyButtonDeletePosts data={data} />
    </div>
  );
};

export default DataJsonMap;
