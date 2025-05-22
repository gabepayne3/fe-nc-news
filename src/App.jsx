import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import LogIn from "./LogIn";
import Articles from "./Articles";
import Topics from "./Topics";
import IndArticle from "./IndArticle";
import './App.css';
import TopicArticles from "./articlesByTopic";

function App() {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/login" element={<LogIn setUser={setUser} />} />
        <Route path="/articles/:id" element={<IndArticle user={user} />} />
        <Route path="/topics/:slug" element={<TopicArticles />} />
      </Routes>
    </div>
  );
}

export default App;