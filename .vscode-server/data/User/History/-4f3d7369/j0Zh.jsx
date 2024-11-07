import { compose } from '@reduxjs/toolkit'
import React from 'react'
import { useState } from 'react'
const PostsComment = () => {

const [comments, setComment] = useState([])
const [text, setText] = useState('')

    const handleAddComment = (e) => {
        e.preventDefault()
        if(text){
        const comment = {text, id: new Date()};
        setComment([...comments, comment]);
        setText('')
    }
    }

  return (
    <div>
      <h1>Коментарии к посту</h1>
      <input type="text"value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={handleAddComment}>добавить комментарий</button>
        <div>
            <ul>
            {comments.map((com) => (
                <li key={com.id}>{com.text}</li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default PostsComment
