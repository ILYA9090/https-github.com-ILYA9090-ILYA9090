import React from 'react'

const PostList = ({prop, children}) => {
  return (
    <div >
    <ul>
        {prop.map((p) => <li key={prop.id}>{prop.header}</li>)}
    </ul>
    {children}
    </div>
  )
}

export default PostList
