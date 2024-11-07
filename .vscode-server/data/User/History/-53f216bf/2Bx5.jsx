import React from "react";
import "./style.css";
import MyButtonDeletePosts from "./MyButtonDeletePosts";

const DataJsonMap = ({ data, handleDeletePosts, children }) => {
  return (
    <div>
      <ol>
        {data.map((post) => (
          <li key={post.id} className="dataJson">
            {post.title}
            <button type="button" onClick={() => handleDeletePosts(post.id)}>
              delete
            </button>
          </li>
        ))}
      </ol>
      <MyButtonDeletePosts data={data} />
    </div>
  );
};

export default DataJsonMap;
