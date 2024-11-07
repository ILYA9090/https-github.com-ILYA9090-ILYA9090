import { useGetPostsQuery } from "./slice/postsApi";
import React from "react";



const [data=[]] = useGetPostsQuery();

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
