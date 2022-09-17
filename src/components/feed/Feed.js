// import React, { useState, useEffect } from "react";
import "./Feed.css";
import Storyboard from "../storyboard/Storyboard";
import MessageSender from "../messageSender/MessageSender";

const Feed = () => {
  return (
    <div className="feed">
      {/* storyboard */}
      <Storyboard />
      {/* MessageSender */}  
      <MessageSender />    
    </div>
  )
}

export default Feed;
