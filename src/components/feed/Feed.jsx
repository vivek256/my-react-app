import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState(Posts);
  
  const handlePosts = (value) => {
    const newPosts = [...posts];
    newPosts.unshift({
      id: new Date().getTime(),
      desc: value,
      photo: "assets/post/10.jpeg",
      date: "1 week ago",
      userId: new Date().getTime(),
      like: 104,
      comments: []
    });

    setPosts(newPosts);
  };

  

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share handlePost={handlePosts} />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
