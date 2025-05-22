import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "./api";

function LogIn({ setUser }) {
  const [users, setUsers] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading users", err);
        setError("Could not load user list");
        setLoading(false);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find((u) => u.username === selectedUsername);
    if (foundUser) {
      setUser(foundUser);
      navigate("/");
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="user-select">Select a user:</label>
        <select
          id="user-select"
          value={selectedUsername}
          onChange={(e) => setSelectedUsername(e.target.value)}
        >
          <option value="">-- Choose a user --</option>
          {users.map((user) => (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" disabled={!selectedUsername}>Log In</button>
      </form>
    </div>
  );
}

export default LogIn;