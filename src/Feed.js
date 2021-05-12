import React from "react";

import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
      <div className="feed">
          <StoryReel />
          <MessageSender />
          <Post
          profilePic="https://i.pinimg.com/originals/fe/9e/9e/fe9e9e6997f7a45bcd878c5896fa464b.png"
          image ="https://i.pinimg.com/originals/fe/9e/9e/fe9e9e6997f7a45bcd878c5896fa464b.png"
          username = "Prince Girdhar" 
          timestamp = "timestamp" 
          message = "Hallelujah"
 
          />
            <Post
          profilePic="https://i.pinimg.com/originals/fe/9e/9e/fe9e9e6997f7a45bcd878c5896fa464b.png"
          username = "Prince Girdhar" 
          timestamp = "timestamp" 
          message = "HElluluah"
 
          />
          {/* <Post />
          <Post />
          <Post /> */}



      </div>
  
    
    
    )
};

export default Feed;
