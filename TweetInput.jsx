import { useState, useRef, useContext } from "react";
import { AppContext } from "../context/AppContext";

const TweetInput = () => {
  const [tweet, setTweet] = useState("");
  const { addTweet } = useContext(AppContext);
  const inputRef = useRef();

  const handleAddTweet = () => {
    if (tweet.trim()) {
      addTweet(tweet);
      setTweet("");
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <textarea
        ref={inputRef}
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        rows="3"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleAddTweet}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#1DA1F2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Tweet
      </button>
    </div>
  );
};

export default TweetInput;
