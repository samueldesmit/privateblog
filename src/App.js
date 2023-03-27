import React, { useState } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import Navigation from "./components/navigation/Navigation";
import Blog from "./pages/blogpost/Blogpost";
import Blogpost from "./pages/blogpost/blogId/:blogId";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      <>
          <Navigation/>

          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/blogpost" element={<Blog/>}/>
              <Route path="/blogpost/:blogId" element={<Blogpost/>}/>
          </Routes>
      </>
  );
}

export default App;