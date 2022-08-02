import React from 'react'
import './Widget.css'

const Widget=()=> {
  return (
    <div className="widget">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid03skhDTeKSDookpXMCtvXviYToEJ2LtLtX9E8gpthn7xjCTcsL6qELshDLxCBNZzAl%26id%3D100217792637512&show_text=true&width=100"
        width="400"
        height="550"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMRXOFFICIALGROUPR%2Fposts%2Fpfbid02jun6wMvGzq4kRyam2tHfBDdQTt37GWhEbqMSsVse1Qy9PezkgvSYigJn3oaw2VGql&show_text=true&width=500"
        width="400"
        height="750"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Widget