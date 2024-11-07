import React from 'react'

const PostList = ({prop, children}) => {
  return (
    <div >
    <ul>
        {prop.map((p) => <li key={prop.id}>{prop.header}123</li>)}
    </ul>
    {children}
    </div>
  )
}

export default PostList
