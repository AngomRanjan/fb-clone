import React, { useState, useEffect } from "react";
import "./Feed.css";
import Storyboard from "../storyboard/Storyboard";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";
import { onSnapshot } from "firebase/firestore"
import { getPostsQuery } from "../../firebase/firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    onSnapshot(getPostsQuery, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  return (
    <div className="feed">
      {/* storyboard */}
      { console.log(posts) }
      <Storyboard />
      {/* MessageSender */}  
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  )
}

export default Feed;
