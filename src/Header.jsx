import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import './App.css';

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); 
    navigate("/");
  };

  return (
    
    <div className="header">
        <div className="header-content">
      <h1>GABES NEWS APP</h1>
      <NavBar />
      <div className="user-section">
        {user ? (
          <div>
            <p>Logged in as <strong>{user.username}</strong></p>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <button onClick={() => navigate("/login")}>Log In</button>
        )}
      </div>
      </div>
      {/* <video className="vid" src="/pandora.webm" controls></video> */}
    </div>
  );
}

export default Header;
