import React from 'react'

const Button = ({post, setPost}) => {

    const enter = () => {
        setPost(post)
    };

  return (
    <div className="button" type="button">
      <button onClick={enter}>нажми на меня</button>
    </div>
  )
}

export default Button
