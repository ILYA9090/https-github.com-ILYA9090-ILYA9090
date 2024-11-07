import React, { useState } from 'react'

const PostItem = ({props, number, children}) => {
const [num, setNum] = useState(number)
  return (
    <div>
      <h1 onClick={() => setNum(num + 1)}>{num}{props}</h1>
      {children}
    </div>
  )
}

export default PostItem
