import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
        {/* post top */}
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p className="p">10 hrs</p>
        </div>
      </div>
      {/* posttop end bttom start */}
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
          <img src={image}  />

      </div>
      <div className = "post_options">
          <div className="post_option">
              <ThumbUpIcon />
              <p>Like</p>
          </div>
          <div className="post_option">
              <ChatBubbleIcon/>
              <p>Comment</p>
          </div>
          <div className="post_option">
              <NearMeIcon/>
              <p>Share</p>
          </div>
          <div className="post_option">
              <AccountCircleIcon />
              <ExpandMoreIcon    />
          </div>
          
          
      </div>
    </div>
  );
};
export default Post;
