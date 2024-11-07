import React, { useState } from 'react'

const PostItem = ({props, number, children}) => {

    const [state, setState] = useState([number])
  return (
    <div>
      <h1>{props}</h1>
      <ul>
        {number.map((n) => <li key={n}>{n + 1}</li>)}
      </ul>
      {children}
    </div>
  )
}

export default PostItem
