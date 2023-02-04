import React from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
// import Avatar from "../components/Avatar/Avatar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likePost, disLikePost, postPost } from "../actions/post";

// { profilePic, image, username, timestamp, message }
const Post = () => {
  const { id } = useParams();
  // console.log(id);
  const postList = useSelector((state) => state.postReducer);
  // console.log("post------", postList);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const User = useSelector((state) => state.currentUserReducer);
  const handleShare = (e) => {
    e.preventdefault();
  };

  const handleComment = () => {
    dispatch(postPost(id, Navigate));
  };

  const handleLike = () => {
    dispatch(likePost(id, "upVote", User.result._id));
  };

  const handleDislike = () => {
    console.log(postList);

    dispatch(disLikePost(id, "downVote", User.result._id));
  };

  return (
    <div className="post">
      {postList.data
        .filter((post) => post._id === id)
        .map((post) => (
          <>
            <div className="post_top" key={post._id}>
              {/* <Avatar src={profilePic} /> */}
              <div className="post_topInfo">
                <h3>{post.username}</h3>
                {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
              </div>
            </div>
            <div className="post_bottom">
              <p>{post.message}</p>
            </div>
            <div className="post_image">
              <img src={post.image} alt="" />
            </div>
            <div className="post_options">
              <div className="post_option">
                <FontAwesomeIcon icon={faThumbsUp} onClick={handleLike} />
                <p>Like</p>
              </div>
              <div className="post_option">
                <FontAwesomeIcon icon={faThumbsDown} onClick={handleDislike} />
                <p>DisLike</p>
              </div>
              <div className="post_option">
                <FontAwesomeIcon icon={faComment} onClick={handleComment} />
                <p>Comment</p>
              </div>
              <div className="post_option">
                <FontAwesomeIcon icon={faShare} onClick={handleShare} />
                <p>Share</p>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Post;
