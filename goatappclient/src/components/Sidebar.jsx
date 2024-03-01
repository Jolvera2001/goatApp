import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../styles/Homepage.css";  

import { IconContext } from "react-icons";
import logo from "./logo.png";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    // Implement  logout logic here, e.g., clearing user session or token.
    // Redirect the user to the login page or perform other necessary actions.
  
    console.log("User logged out");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="sidebar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
         
          <Link to="/homepage" className="sidebar-logo-link">
            <img className="sidebar-logo" src={logo} alt="react logo" />
         
          </Link>
          <li className="side-text" onClick={handleLogout}>
              <Link to="#">
                <span className="logout-btn">Logout</span>
              </Link>

            </li>
          
        </div>
        <nav className={sidebar ? "side-menu active" : "side-menu"}>
          <ul className="side-menu-items" onClick={showSidebar}>
            <li className="side-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar
