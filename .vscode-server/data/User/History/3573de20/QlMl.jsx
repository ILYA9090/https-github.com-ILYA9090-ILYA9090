import React, { useState } from 'react'

const PostItem = ({props, number, children}) => {
const [num, setNum] = useState(number)

const dicrement = (e) => {
    e.preventDefault();
    
}
  return (
    <div>
      <h1>{num}{props}</h1>
      <button onClick={() => setNum(num + 1)}></button>
      {children}
    </div>
  )
}

export default PostItem
