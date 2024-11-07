import React from 'react'

const PostList = ({props : {id,header}, children}) => {
  return (
    <div >
    <ul>
        {props.map((p) => <li key={id}>{header}</li>)}
    </ul>
    {children}
    </div>
  )
}

export default PostList
