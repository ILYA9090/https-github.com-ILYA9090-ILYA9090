import React from 'react'

const PostList = ({prop, children}) => {
  return (
    <div >
    <ol>
    {prop.map((p) => <li key={p.id}>{p.header}</li>)}
    
    </ol>
        {children}
    </div>
  )
}

export default PostList
