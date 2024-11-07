import React from 'react'

const Button = ({post, setPost}) => {

    const enter = (e) => {
        e.preventDefault()
        setPost(post)
    };

  return (
    <div className="button" type="button">
        <div>{post}</div>
      <button onClick={enter}>нажми на меня</button>
    </div>
  )
}

export default Button
