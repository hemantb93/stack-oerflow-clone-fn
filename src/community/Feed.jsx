/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import "./Feed.css";
import MessageSender from "./MessageSender";
import PostList from "./PostList";
// import Post from "./Post";
import StoryReel from "./StoryReel";
import "./StoryReel.css";

const Feed = () => {
  const postList = useSelector((state) => state.postReducer);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <div>{postList.data.length}posts</div>
      <PostList postList={postList.data} />
      {/* <Post
        profilePic="https://pixlr.com/images/index/remove-bg.webp"
        message="nature"
        timestamp="0000"
        username="123Rjs"
        image="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg?fit=fill&w=480&h=270"
      /> */}
      {/* <Post
        profilePic="https://pixlr.com/images/index/remove-bg.webp"
        message="nature"
        timestamp="0000"
        username="123"
        image="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg?fit=fill&w=480&h=270"
      /> */}
    </div>
  );
};

export default Feed;
