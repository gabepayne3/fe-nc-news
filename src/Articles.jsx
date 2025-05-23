import React, { useEffect, useState } from "react";
import { getArticles } from "./api"; 
import { Link, useSearchParams } from "react-router-dom";
import SorterComp from "./sorterComp";
import "./App.css";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();

    const sort_by = searchParams.get("sort_by") || "date";
    const order = searchParams.get("order") || "desc"


    useEffect(() => {
        setLoading(true)
        getArticles({ sort_by, order })
            .then((data) => {
                setArticles(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to GET articles:", err);
                setError("Could not load articles");
                setLoading(false);
            });
    }, [sort_by, order]);

    if (loading) return <p>Don't Go Anywhere</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className="articles-container">
        <h2>Articles</h2>
        <SorterComp />
        <ul>
            {articles.map((article) => (
                <li key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`}>
                        <h3>{article.title}</h3>
                    </Link>
                    <p><strong>Author:</strong> {article.author}</p>
                    <p><strong>Created:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
                    <p><strong>Votes:</strong> {article.votes}</p>
                    <p><strong>Comments:</strong> {article.comment_count}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}
export default Articles

