import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";

import SideDrawer from "./SideDrawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#2f2f2f",
        boxShadow: "none",
        padding: "10px 0px",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon backgroundColor="white" />
        </IconButton>
        <SideDrawer
          open={drawerOpen}
          onClose={(value) => toggleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
