import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "./api";
import VoteButtons from "./VoteButton";
import { voteOnArticle } from "./api";
import CommentsList from "./commentsList";

function IndArticle({ user }) {
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
      .catch(() => {
        setError("Could not load article");
        setLoading(false);
      });

    getCommentsByArticleId(id)
      .then((data) => {
        setComments(data);
        setCommentsLoading(false);
      })
      .catch(() => {
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
      <VoteButtons itemId={article.article_id} initialVotes={article.votes} onVote={voteOnArticle} />
      <hr />
      <h2>Comments</h2>
      <CommentsList
  article_id={article.article_id}
  comments={comments}
  setComments={setComments}
  loading={commentsLoading}
  error={commentsError}
  user={user}
/>
    </div>
  );
}

export default IndArticle;
