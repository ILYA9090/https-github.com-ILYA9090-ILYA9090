import React, { useState } from 'react'

const PostItem = ({props, number, children}) => {
const [num, setNum] = useState(number)

const dicrement = (e) => {
    e.preventDefault();
    setNum(num + 1)
}
  return (
    <div>
      <div>{props}</div>
      <h1>{num}</h1>
      <button onClick={dicrement}>ClickMe</button>
      {children}
    </div>
  )
}

export default PostItem
