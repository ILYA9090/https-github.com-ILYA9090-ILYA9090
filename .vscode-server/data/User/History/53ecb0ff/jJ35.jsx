import React, { useCallback } from 'react'

const Button = ({post, setPost}) => {

    const enter = useCallback((e) => {
        e.preventDefault()
        const newPost = e.target.value;
        setPost(...post, newPost)
    }, [post]);

  return (
    <div className="button" type="button">
        <div>{post}</div>
      <button onClick={enter}>нажми на меня</button>
    </div>
  )
}

export default Button
