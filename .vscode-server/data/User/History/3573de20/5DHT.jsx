import React, { useState } from 'react'

const PostItem = ({props, number, children}) => {
const [num, setNum] = useState(number)

const dicrement = (e) => {
    e.preventDefault();
    setNum(num + 1)
}
  return (
    <div>
      <h1>{props}</h1>
      <button onClick={dicrement}>{num}</button>
      {children}
    </div>
  )
}

export default PostItem
