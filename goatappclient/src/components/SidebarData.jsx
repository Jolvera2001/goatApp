import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Homepage",
    path: "/homepage",
    icon: <AiIcons.AiFillHome />,
    cName: "side-text",
  },
  {
    title: "Account",
    path: "/account",
    icon: <FaIcons.FaUserCircle />,
    cName: "side-text",
  },
  {
    title: "Map",
    path: "/map",
    icon: <FaIcons.FaMapMarkedAlt />,
    cName: "side-text",
  },

  {
    title: "Create Post",
    path: "/create-post",
    icon: <AiIcons.AiOutlineFileAdd />,
    cName: "side-text",
  },

];