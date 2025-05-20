import Home from "./Home"
import { Routes, Route } from "react-router-dom"
import Header from "./Header"
import './App.css'
import LogIn from './LogIn'
import Articles from './Articles'
import Topics from './Topics'
import IndArticle from "./IndArticle"

function App() {
  

  return (
    
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/topics" element={<Topics/>} />
      <Route path="/articles" element={<Articles/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/articles/:id" element={<IndArticle/>} />
    </Routes>
    </div>
    
  )
}

export default App
