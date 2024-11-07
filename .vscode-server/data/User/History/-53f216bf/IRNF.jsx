import React from 'react'
import "./style.css";

const DataJsonMap = ({data, handleDeletePosts}) => {
  return (
    <div>
        <ol>
          {data.map((post) => ( 
            <li key={post.id}>
              {post.title}
              <button type="button" onClick={() => handleDeletePosts(post.id)}>
                delete
              </button>
            </li>
          ))}
        </ol>
      </div>
  )
}

export default DataJsonMap;
