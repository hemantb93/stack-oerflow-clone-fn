import React from "react";
import "./SidebarRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faVideo,
  faFlag,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const SidebarRow = () => {
  return (
    <div className="sidebarRow">
      <div className="icon name">
        <FontAwesomeIcon icon={faFlag} title="Pages" />
        <p>Pages</p>
      </div>
      <div className="icon name">
        <FontAwesomeIcon icon={faMessage} /> <p>Messages</p>
      </div>

      <div className="icon name">
        <FontAwesomeIcon icon={faVideo} /> <p>Videos</p>
      </div>
      <div className="icon name">
        <FontAwesomeIcon icon={faUserGroup} /> <p>Groups</p>
      </div>
    </div>
  );
};

export default SidebarRow;
