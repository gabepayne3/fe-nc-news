import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticlesByTopic } from "./api";

function TopicArticles() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesByTopic(slug)
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch articles");
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading articles for {slug}...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Articles for: {slug}</h2>
      <ul>
        {articles.map(article => (
          <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="article-card">
                <h3>{article.title}</h3>
                {/* <p>{article.body.slice(0, 150)}...</p> */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicArticles;