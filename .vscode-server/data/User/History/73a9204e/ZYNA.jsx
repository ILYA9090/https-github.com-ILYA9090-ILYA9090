import React, { useState } from "react";
import Comments from "./Comments";
import { useAddCommentsMutation } from "../../slices/PostsApi";
const AddComments = ({ children }) => {
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
      <form type="form" onSubmit={handleSumbitForm}>
        <input
          type="text"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <Comments />
    </div>
  );
};

export default AddComments;
