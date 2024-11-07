import React, {useState} from "react";
import axios from "axios"
import '.src/styles/App.css'
import Button from "../Button";
import PostItem from "../PostItem";
import PostList from "../PostList";
import Select from "../Select";
function App() {
const [post, setPost] = useState('hello');
const [list, setList] = useState([])
const [posts, setPosts] = useState([{header : 'js', body : 'language'}])
const [fecthing, setFething] = useState([{}])



const createPosts = (e) => {
  e.preventDefault();
  const newPos = {
    ...posts,
    id : Date.now()
    }
      setList([...list, newPos]);
  setPosts({header : ''});
}

    const fetch = async(e) => {
      e.preventDefault()
      const query = await axios.get('http://jsonplaceholder.typicode.com/posts');
      setFething(query.data)
    }
 
  return (
    <div className="App">
    <form className="form">
      <h1>{post}</h1>
      <input type="text" value={post} onChange={(e)=>setPost(e.target.value)}/>
      <Button disabled post={post} setPost={setPost}>Нажми на меня</Button>
      <div>{post.split(',').map((p) => <h3 key={p.id}>{p}</h3>)}</div>
      <PostItem props={post} number={1}>I iam Ilya</PostItem>
      <div>
       <Select defaultValue={['по умолчанию', 'по дефолту']}></Select>
      <PostList prop={list} />
     <form>
      <input type="text" value={posts.header} onChange={(e) => setPosts({...posts, header: e.target.value})} placeholder="Название языка"></input>
      <input type="text" value={posts.body} onChange={(e) => setPosts({...posts, body: e.target.value})} placeholder="Название"></input>
      <button onClick={createPosts}>click</button>
      </form>
      </div>
      <div>
      <button onClick={fetch}>FETCH</button>
      {[fecthing].map((q) => {
        if(q.id < 10) {
          return <h1 key={q.id}>{q.title}{q.body} hello</h1>
        }
        return "not post"
      }
      )} 
      </div>
      </form>
     </div>
  )
  }
export default App;
