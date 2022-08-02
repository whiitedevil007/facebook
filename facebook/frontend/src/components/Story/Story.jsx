import React from "react";
import "./Story.css";
import { Avatar } from "@mui/material";

const Story = ({ image, profilePicSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story-avtar" src={profilePicSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
