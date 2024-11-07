import React from 'react'

const PostList = ({{id, header}, children}) => {
  return (
    <div >
    <ul>
        {props.map((p) => <li key={props.id}>{header}</li>)}
    </ul>
    {children}
    </div>
  )
}

export default PostList
