import React, { useState } from 'react'

const PostItem = ({props, number, children}) => {

  return (
    <div>
      <h1>{props}</h1>
      {children}
    </div>
  )
}

export default PostItem
