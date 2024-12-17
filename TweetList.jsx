import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Tweet from "./Tweet";

const TweetList = () => {
  const { tweets, fetchTweets } = useContext(AppContext); // Correctly consume fetchTweets

  useEffect(() => {
    fetchTweets(); // Call fetchTweets to simulate fetching tweets
  }, [fetchTweets]);

  return (
    <div>
      {tweets.map((tweet, index) => (
        <Tweet key={index} content={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
