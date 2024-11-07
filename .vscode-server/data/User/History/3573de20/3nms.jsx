import React, { useState } from 'react'

const PostItem = ({props, number, children}) => {

    const [state, setState] = useState(number)

    const generateNumber =  number.map((n) => <li key={n}>{n + 1}</li>)
    setState(...number, generateNumber)
  return (
    <div>
      <h1>{props}</h1>
      <ul onClick={generateNumber}>
        
      </ul>
      {children}
    </div>
  )
}

export default PostItem
