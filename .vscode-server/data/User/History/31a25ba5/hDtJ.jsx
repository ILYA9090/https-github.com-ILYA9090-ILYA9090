import React from "react";

const PostForm = () => {
    const [post, setPost] = useState({title : '', body : ''});


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        setPost({title : '', body : ''})
    }


    return (
        <form>
        <MyInput onChange={({target}) => setPost({...post, title : target.value})} value={post.title} type='text' placeholder="Название поста"/>
        <MyInput onChange={({target}) => setPost({...post, body : target.value})} value={post.body}type='text' placeholder="Название поста"/>
        <MyButton onClick={addNewPost} >
          создать пост
        </MyButton>
      </form>
    )
}

export default PostForm;