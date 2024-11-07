import React from 'react'

const PostList = ({prop, children}) => {
  return (
    <div >
    <ul>
        {prop.map((p) => <li>{prop}</li>)}
    </ul>
    {children}
    </div>
  )
}

export default PostList
