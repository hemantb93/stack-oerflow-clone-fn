import React from "react";
import "./CommunityPage.css";
import Feed from "./Feed";
import SidebarRow from "./SidebarRow";
import Widgets from "./Widgets";

const CommunityPage = (props) => {
  return (
    <div className="main">
      <div className="main-container">
        <SidebarRow />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default CommunityPage;
