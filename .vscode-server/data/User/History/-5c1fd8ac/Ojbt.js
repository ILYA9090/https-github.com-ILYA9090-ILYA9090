import { BrowserRouter,Route, Routes} from "react-router-dom";
import "./styles/App.css";
import React from "react";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
const App = () => {
  return (
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
)};

export default App;
