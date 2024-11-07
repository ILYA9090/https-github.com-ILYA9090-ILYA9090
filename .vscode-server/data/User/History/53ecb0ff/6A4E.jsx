import React from 'react'

const Button = ({post, setPost}) => {
  return (
    <div className="button" type="button">
      <button onClick={setPost}>нажми на меня</button>
    </div>
  )
}

export default Button
