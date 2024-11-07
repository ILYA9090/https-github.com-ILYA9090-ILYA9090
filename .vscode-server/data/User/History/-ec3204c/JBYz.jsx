import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostServise";
import Loader from "../components/UI/Loader/Loader";
const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const responce = await PostService.getById(id);
    setPost(responce.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
  });
  return (
    <div>
      <h1>Вы открыли страницу поста c ID ={params.id}</h1>
      {isLoading
      ? <Loader />
      :
      }
      <div>
        {post.id}.{post.title}
      </div>
    </div>
  );
};

export default PostIdPage;
