import React from 'react'
import './Feed.css'
import Post from './Post'
import PostCreator from './PostCreator'
import StoryReel from './StoryReel'
 function Feed() {
  return (
    <div className="feed">
      {/* storyReel */}
      <StoryReel />
      {/* postcreator */}
      <PostCreator />
      <Post
        // key={id}
        profilePic="https://images.unsplash.com/photo-1546872006-42c78c0ccb29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWN0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png?20200820101156"
        message="Wow how are you"
        timestamp="this is timestamp"
        username="khushu"
        image="https://images.unsplash.com/photo-1546872006-42c78c0ccb29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWN0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        
      />
    </div>
  );
}
export default Feed
