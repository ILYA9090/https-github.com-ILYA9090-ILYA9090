import {
  useGetPostsQuery,
  useAddPostsMutation,
  useRemovePostsMutation,
} from "../slices/PostsApi";
import { useState } from "react";
import "./style.css"
import React from "react";

const PostsJson = () => {
  const [text, setText] = useState("");
  const { data = [], isLoading} = useGetPostsQuery();
  const [addPosts] = useAddPostsMutation();
  const [remove, {isError}] = useRemovePostsMutation()
  
  const handleAddPosts = async (e) => {
    if (text) {
      e.preventDefault();
      await addPosts({ title:text});
      setText("");
    }
}

const handleDeletePosts = async(id) => {
    await remove (id);
  
}

  if (isLoading) return <h1>Loading</h1>;
  //if(isError) return <h1>error</h1>
  return (
    <div className="apiQuery">
      <div>
        <form onSubmit={handleAddPosts}>
          <input type='text' value={num} onChange={(e) => setNum(e.target.value)}>найти по id</input>
          <input
            type="text"
            placeholder="введите имя"
            value={text}
            onChange={(e) => setText(e.target.value)}
      />
          <button type="submit" value="add">
            add
          </button>
        </form>
      </div>
      <ol>
        {data.map((post) => (
          <li key={post.id}>
            {post.title}
            <button type="button" onClick={() => handleDeletePosts(post.id)}>delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PostsJson;
