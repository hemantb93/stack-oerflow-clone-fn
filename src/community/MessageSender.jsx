import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faImages,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { postPost } from "../actions/post";
import "./MessageSender.css";

const MessageSender = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      postPost(
        {
          message,
          image,
          video,
          userId: User?.result?.name,
        },
        navigate
      )
    );
    setMessage("");
    setImage("");
    setVideo("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar
          backgroundColor="gray"
          px="10px"
          py="7px"
          borderRadius="50%"
          color="white"
        >
          {/* {User.result.name.charAt(0).toUpperCase()} */}
        </Avatar>
        <form onSubmit={handleSubmit}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="messageSender_input"
            placeholder={`What's on your mind`}
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder={`image URL`}
          />
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <FontAwesomeIcon
            values={video}
            style={{ color: "red" }}
            icon={faVideo}
            onClick={(e) => setVideo(e.target.value)}
          />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <FontAwesomeIcon
            values={image}
            style={{ color: "green" }}
            icon={faImages}
            onClick={(e) => setImage(e.target.value)}
          />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <FontAwesomeIcon style={{ color: "orange" }} icon={faFaceSmile} />
          <h3>Feeling/Activity</h3>
        </div>
        <button onClick={handleSubmit}>Post</button>
      </div>
    </div>
  );
};

export default MessageSender;
