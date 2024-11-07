import { useGetPostsQuery } from "./slice/postsApi";

function Posts() {

  const {data, isLoading} = useGetPostsQuery();

  if(isLoading) return <h1>loading</h1>
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
