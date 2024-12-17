import { useState } from "react";
import PropTypes from "prop-types";

function PostInput({ onPost }) {
  const [input, setInput] = useState("");

  const handlePost = () => {
    if (input.trim()) {
      onPost(input);
      setInput("");
    }
  };

  return (
    <div className="postInput">
      <textarea
        placeholder="What is happening?!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}
PostInput.propTypes = {
  onPost: PropTypes.func.isRequired, // 'onPost' must be a function and is required
};
export default PostInput;
