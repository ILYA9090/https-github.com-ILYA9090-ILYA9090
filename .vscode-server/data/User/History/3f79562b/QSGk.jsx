import React from 'react'

const PostList = ({prop, children}) => {
  return (
    <div >
    <ol>
    {prop.map((p) => <li key={p.id}>{p.header}{p.body}</li>)}
    
    </ol>
        {children}
        <button onClick={() => prop.remove(p)}>удалить</button>
    </div>
  )
}

export default PostList
