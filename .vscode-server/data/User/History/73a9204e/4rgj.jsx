import React, { useState } from "react";
import Modal from "./Modal";
import { useAddCommentsMutation } from "../../slices/apiApp";
import "./commentsStyle.css";
const InputComments = ({children}) => {
  const [userText, setUserText] = useState("");
  const [addPosts] = useAddCommentsMutation();

  const handleSumbitForm = async (e) => {
    e.preventDefault();
    if (userText.trim().length) {
      await addPosts({ text: userText });
      setUserText("");
    }
  };

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        comments list
      </h1>
      <Modal>
      <div className="formComments">
        <form type="form" onSubmit={handleSumbitForm}>
          <input
            type="text"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      </Modal>
      
    </div>
  );
};

export default InputComments;
