import React from 'react'

const PostList = ({prop, children}) => {
  return (
    <div >
    
    {prop.map((p) => <h1 key={p.id}>{p.header}</h1>)}
        {children}
    </div>
  )
}

export default PostList
