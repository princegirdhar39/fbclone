import React from "react";
import "./SidebarRow.css";
import { Avatar, IconButton } from "@material-ui/core";

const SidebarRow = (props) => {
  const { title, Icon, src } = props;
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
};
export default SidebarRow;
