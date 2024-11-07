
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
    const hanledeleteComment = (id) => {
      setComment(comments.filter((com) => com.id !==id ));
    }

  return (
    <div>
      <h1>Коментарии к посту</h1>
      <input type="text"value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={handleAddComment}>добавить комментарий</button>
       
        <div>
            <ul>
            {comments.map((com) => (
                <li key={com.id}>
                  {com.text}
                  <button onClick={() => hanledeleteComment(com.id)}>удалить комментарий</button>
                  </li>
                
            ))}
            </ul>
        </div>
    </div>
  )
}

export default PostsComment