import React, { useState } from 'react';

const VoteButtons = ({ itemId, initialVotes, onVote, onClick }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  const onClickHandler = (change) => {
    if (hasVoted) return;
    setVotes((prevVotes) => prevVotes + change);
    setHasVoted(true);
    setError(null);
    if (onClick) {
      onClick(itemId, change);
    }

    onVote(itemId, change)
      .then(() => {}).catch((err) => {
        console.error("Vote failed:", err);
        setVotes((prevVotes) => prevVotes - change);
        setHasVoted(false);
        setError("Vote failed.");
      });
  };

  return (
    <div>
      <button disabled={hasVoted} onClick={() => onClickHandler(1)}>V</button>
      <span>{votes}</span>
      <button disabled={hasVoted} onClick={() => onClickHandler(-1)}>^</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default VoteButtons;