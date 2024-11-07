import React, { useCallback } from 'react'

const Button = ({post, setPost}) => {

    const enter = (e) => {
        e.preventDefault()
        const newPost = ''
        setPost(...post, newPost)
    };

  return (
    <div className="button" type="button">
        <div>{post}</div>
      <button onClick={enter}>нажми на меня</button>
    </div>
  )
}

export default Button
