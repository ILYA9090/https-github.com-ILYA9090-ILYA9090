import React from 'react'

const PostList = ({props, children}) => {
  return (
    <div >
    <ul>
        {props.map((p) => <li key={props.id}>{props.header}123</li>)}
    </ul>
    {children}
    </div>
  )
}

export default PostList
