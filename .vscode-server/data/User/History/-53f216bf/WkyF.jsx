import React from 'react'
import "./style.css";
import MyButtonDeletePosts from './MyButtonDeletePosts';



const DataJsonMap = ({data, handleDeletePosts, children}) => {
  return (
    <div >
        <ol className = 'dataJson'>
          {data.map((post) => ( 
            <li key={post.id}>
              {post.title}
              <button type="button" onClick={() => handleDeletePosts(post.id)}>
                delete
              </button>
            </li>
          ))}
        </ol>
        <MyButtonDeletePosts/>
      </div>
  )
}

export default DataJsonMap;
