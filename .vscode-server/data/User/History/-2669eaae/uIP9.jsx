import {
  useGetPostsQuery,
  useAddPostsMutation,
  useRemovePostsMutation,
} from "../slices/PostsApi";
import { useState } from "react";
import "./style.css";
import React from "react";
import DataJsonMap from "./DataJsonMap";

const PostsJson = ({children}) => {
  const [text, setText] = useState("");

  const { data = [], isLoading } = useGetPostsQuery();
  const [addPosts] = useAddPostsMutation();
  const [remove, { isError }] = useRemovePostsMutation();

  const handleAddPosts = async (e) => {
    e.preventDefault();
    if (text.length.trim()) {
      
      await addPosts({ title:text });
      setText("");
    }
  };

  const handleDeletePosts = async (id) => {
    await remove(id);
  };

  if (isLoading) return <h1>Loading</h1>;
  //if(isError) return <h1>error</h1>
  return (
    <div className="apiQuery">
      
      <form onSubmit={handleAddPosts}>
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
      
      <DataJsonMap data={data} handleDeletePosts={handleDeletePosts}/>
    </div>
  );
};

export default PostsJson;
