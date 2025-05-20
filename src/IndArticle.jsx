import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "./api";

function IndArticle () {
    
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [commentsError, setCommentsError] = useState(null);
  
    useEffect(() => {
      getArticleById(id)
        .then((data) => {
          setArticle(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch article:", err);
          setError("Could not load article");
          setLoading(false);
        });

        getCommentsByArticleId(id)
        .then((data) => {
        setComments(data);
        setCommentsLoading(false);
        })
        .catch((err) => {
        console.error("Failed to fetch comments:", err);
        setCommentsError("Could not load comments");
        setCommentsLoading(false);
        });
    }, [id]);
  
    if (loading) return <p>Loading article...</p>;
    if (error) return <p>{error}</p>;
    if (!article) return <p>Article not found.</p>;
  
    return (
        <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
  
        <hr />
        <h2>Comments</h2>
  
        {commentsLoading && <p>Loading comments...</p>}
        {commentsError && <p>{commentsError}</p>}
  
        <ul>
          {comments.map((comment) => (
            <li key={comment.comment_id}>
              <p><strong>{comment.author}</strong> says:</p>
              <p>{comment.body}</p>
              <p><small>Votes: {comment.votes}</small></p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
}


export default IndArticle

