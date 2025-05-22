import React, { useState } from "react";
import VoteButtons from "./VoteButton";
import { voteOnComment, postComment } from "./api";

function CommentsList({ article_id, comments, setComments, loading, error, user }) {
  const [newComment, setNewComment] = useState("");
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostError(null);
    setSuccessMsg("");

    if (!newComment.trim()) {
      setPostError("Comment cannot be empty.");
      return;
    }

    setPosting(true);

    postComment({ article_id, body: newComment, username: user.username })
  .then((response) => {
    const postedComment = response.comment; 
    setComments((prev) => [postedComment, ...prev]);
    setNewComment("");
    setSuccessMsg("Great Success");
  })
  .catch((err) => {
    setPostError("Mission Failed :(");
    console.error(err);
  })
  .finally(() => {
    setPosting(false);
  });
  };

  if (loading) return <p>Don't Go Anywhere...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1em" }}>
        <label htmlFor="comment">Add a Comment:</label>
        <textarea
          id="comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          cols={50}
          disabled={posting}
          placeholder="Write your comment here..."
        />
        <br />
        <button type="submit" disabled={posting}>
          {posting ? "Posting..." : "Post Comment"}
        </button>
        {postError && <p style={{ color: "red" }}>{postError}</p>}
        {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
      </form>

      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <p><strong>{comment.author}</strong> says:</p>
            <p>{comment.body}</p>
            <p><small>Votes: {comment.votes}</small></p>
            <VoteButtons
              itemId={comment.comment_id}
              initialVotes={comment.votes}
              onVote={voteOnComment}
            />
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentsList;