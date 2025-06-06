import React, { useEffect, useState } from "react";
import { getTopics } from "./api";
import { Link } from "react-router-dom";
import "./App.css"

function Topics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then(data => {
        setTopics(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch topics");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading topics...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="topics-container">
      <h2>Topics</h2>
      <ul className="topics-list">
        {topics.map(topic => (
          <li key={topic.slug}>
            <h3 className="topic-title">
              <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
            </h3>
            <p>{topic.description}</p>
            <img
              src={topic.img_url || "https://www.cageclub.me/wp-content/uploads/2015/12/g-force-7.jpg"}
              alt={topic.slug}
              width="100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Topics;


  