import { useGetPostsQuery } from "./slice/postsApi";
import React from "react";



const [data=[]] = useGetPostsQuery();

function App() {
  return (
    <div className="App">
      <ul>
        {data.map(item => 
        <li key={item.id}>
            {item.title}
        </li>)}
      </ul>
    </div>
  );
}

export default App;
