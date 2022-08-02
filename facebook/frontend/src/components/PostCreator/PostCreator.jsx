import React, { useState } from 'react'
import './PostCreator.css'
import { Avatar } from "@mui/material";

import VideoCamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmotionIcon from "@mui/icons-material/InsertEmoticon";
const PostCreator=()=> {
    const [input,setInput] =useState("");
    const [imageUrl,setImageUrl] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div className="postCreator">
      <div className="messegeSender-top">
        <Avatar />
        <form>
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
            className="messegeSender-input"
            placeholder={`What's on your mind`}
          />
          <input
          value={imageUrl}
          onChange={(e)=>setImageUrl(e.target.value)}
          placeholder="Image URL (Optional)" />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messegeSender-bottom">
        <div className="messegeSender-option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messegeSender-option">
          <PhotoLibraryIcon style={{ color: "red" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messegeSender-option">
          <InsertEmotionIcon style={{ color: "red" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostCreator