import React, { useEffect, useState } from "react";
import { getArticles } from "./api"; 
import { Link } from "react-router-dom";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getArticles()
            .then((data) => {
                setArticles(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to GET articles:", err);
                setError("Could not load articles");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Don't Go Anywhere</p>;
    if (error) return <p>{error}</p>;
    return (
        <div>
        <h2>Articles</h2>
        <ul>
        {articles.map((article) => (
        <li key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <h3>{article.title}</h3>
          
          </Link>
        </li>
      ))}
        </ul>
    </div>
    )
}
export default Articles

