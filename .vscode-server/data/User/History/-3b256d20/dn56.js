import React from "react";
import UserContext from "./Context/context";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AppRouter from "./AppRouter/AppRouter";

const App = () => {
 
  return (
    <UserContext.Provider>
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
