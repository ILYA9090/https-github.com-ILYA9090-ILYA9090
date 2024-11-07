import React from 'react'

const PostItem = ({props, children}) => {
  return (
    <div>
      <h1>{props}</h1>
      {children}
    </div>
  )
}

export default PostItem
