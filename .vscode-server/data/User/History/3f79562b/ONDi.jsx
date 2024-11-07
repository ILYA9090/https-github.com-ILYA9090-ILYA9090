import React from 'react'

const PostList = ({props}) => {
  return (
    <div >
    <h1>{props.id}</h1>
    <h2>{props.header}</h2>
    </div>
  )
}

export default PostList
