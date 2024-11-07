import React from 'react'


const DataJsonMap = ({data}) => {
  return (
    <div className="postsFormJson">
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
