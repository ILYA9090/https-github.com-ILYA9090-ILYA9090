import React from 'react'

const PostList = ({prop, children}) => {

  const removePost = (prop)
  return (
    <div >
    <ol>
    {prop.map((p) => <li key={p.id}>{p.header}{p.body}</li>)}
    
    </ol>
        {children}
        <button onClick={() => prop.removePost(prop.p)}>удалить</button>
    </div>
  )
}

export default PostList
