import { useGetPostsQuery } from "../slice/postsApi";

const Posts = () => {

  const {data} = useGetPostsQuery();

  
  return (
    <div className="App">
      <ul>
        {data.map(item => (
        <li key={item.id}>
            {item.title}
        </li>))}
      </ul>
    </div>
  );
}

export default Posts;
