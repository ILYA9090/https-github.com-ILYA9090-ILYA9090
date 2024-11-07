import React from 'react'

const PostList = ({prop, children}) => {
  return (
    <div >
    <ul>
    {prop.map((p) => <li key={p.id}>{p.header}{p.body}</li>)}
    </ul>
    {children}
    </div>
  )
}

export default PostList