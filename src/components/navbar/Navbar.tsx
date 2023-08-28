import Avatar from "@mui/material/Avatar";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AddIcon from "@mui/icons-material/Add";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
// import { useState } from "react";

const Navbar = () => {
  

  return (
    <>
      <div className="navbar__menus">
        <div className="navbar__menu">
          <div className="navbar__text">
            <h4>RAWG</h4>
          </div>
          <div className="navbar__input">
            <input type="text" placeholder="Search" />
          </div>
          <div className="navbar__avatarimg">
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
          </div>
          {/* <div className="navbar__paratext">
            <p>My Library</p>
          </div>
          <div className="navbar__notificon">
            <NotificationsIcon />
          </div>
          <div className="navbar__addicon">
            <AddIcon />
          </div>
          <div className="navbar__dots">
            <MoreHorizIcon />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div id="menubarline">
            <MenuIcon />
          </div>
          <div id="menubarline">
            <CloseIcon />
          </div> */
}
