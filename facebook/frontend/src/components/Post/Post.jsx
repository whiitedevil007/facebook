import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";


const Post=({profilePic,image,username,timestamp,message})=> {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar className="post-avtar" src={profilePic} />
        <div className="post-topInfo">
          <h3>{username}</h3>
          <p>Timestamp...</p>
          {/* <p>{new Date(timestamp?.toDate().toUTCString())}</p> */}
        </div>
      </div>
      <div className="post-bottom">
        <p>{message}</p>
      </div>
      <div className="post-image">
        <img src={image} alt="" />
      </div>
      <div className="post-options">
        <div className="post-option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post-option">
          <ChatBubbleOutlineIcon />
          <p>Like</p>
        </div>
        <div className="post-option">
          <NearMeIcon />
          <p>Like</p>
        </div>
        <div className="post-option">
          <AccountCircleIcon />
          <ExpandMoreIcon/>
        </div>
       
      </div>
    </div>
  );
}

export default Post