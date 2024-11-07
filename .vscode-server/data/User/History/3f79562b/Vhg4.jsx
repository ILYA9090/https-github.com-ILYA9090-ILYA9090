import React from 'react'

const PostList = ({props, children}) => {
  return (
    <div >
    <h1>{props.id}</h1>
    <h2>{props.header}</h2>
    {children}
    </div>
  )
}

export default PostList
