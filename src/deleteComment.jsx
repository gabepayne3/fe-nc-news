import React, { useState } from "react";
import { deleteComment } from "./api";

function DeleteCommentButton({ commentId, onDeleteSuccess }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteClick = () => {
    setIsDeleting(true);
    setError(null);

    deleteComment(commentId)
      .then(() => {
        onDeleteSuccess(commentId);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to delete comment.");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <div>
      <button onClick={handleDeleteClick} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default DeleteCommentButton;