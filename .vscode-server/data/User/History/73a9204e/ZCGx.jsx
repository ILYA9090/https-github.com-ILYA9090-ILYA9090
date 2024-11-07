import React, { useState } from "react";

import { useAddCommentsMutation } from "../../slices/PostsApi";
import './commentsStyle.css'
const InputComments = () => {
  const [userText, setUserText] = useState("");
  const [addPosts] = useAddCommentsMutation();

  const handleSumbitForm = async (e) => {
    e.preventDefault();
    if (userText.trim()) {
      await addPosts({ text: userText });
      setUserText("");
    }
  };

  return (
    <div className="commentsForm">
      <h1>comments list</h1>
      <form type="form" onSubmit={handleSumbitForm}>
        <input
          type="text"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      
    </div>
  );
};

export default InputComments;