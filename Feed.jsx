import { useState } from "react";
import Tweet from "./Tweet";
import PostInput from "./PostInput";

function Feed() {
  const [posts, setPosts] = useState([
    { id: 1, user: "John", content: "Hello Twitter!" },
    { id: 2, user: "Doe", content: "React is awesome!" },
  ]);

  const addPost = (postContent) => {
    const newPost = { id: Date.now(), user: "You", content: postContent };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="feed">
      <PostInput onPost={addPost} />
      {posts.map((post) => (
        <Tweet key={post.id} user={post.user} content={post.content} />
      ))}
    </div>
  );
}

export default Feed;
