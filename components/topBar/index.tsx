"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MenuIcon from "@mui/icons-material/Menu";

import { LanguageContext } from "../../hoc/languageProvider";
import { MainContainer, MenuContainer } from "./topBar.style";
import { Logout } from "../logout";

export const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showLogout, setShowLogout] = useState<boolean>(false);

  const { localString } = useContext(LanguageContext);

  const router = useRouter();
  const navigateTo = (route: string) => {
    router.push(route);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutClick = () => {
    handleClose();
    setShowLogout(true);
  };
  const hideLogout = () => {
    setShowLogout(false);
  };
  const openSettings = () => {
    setAnchorEl(null);
    navigateTo("/dashboard/settings");
  };
  const navigateToHome = () => {
    navigateTo("/dashboard");
  };
  return (
    <>
      <MainContainer>
        <AppBar position="static" className={"appBar"}>
          <Toolbar className={"toolBar"}>
            <Typography variant="h3">
              <div className={"heading"} onClick={navigateToHome}>
                {/* <PriceChangeIcon fontSize="large" /> */}
                <img src="./Logo.png" alt="Icon" className={"icon"} />
                {localString?.Mbull}
              </div>
            </Typography>
            <IconButton
              edge="start"
              className={"menuButton"}
              color="inherit"
              aria-label="menu"
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon fontSize={"large"} />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className="menu"
            >
              <MenuContainer onClick={openSettings}>
                <AccountCircleIcon color={"disabled"} />
                {"  " + localString?.profile}
              </MenuContainer>
              <Divider />
              <MenuContainer onClick={handleClose}>
                <BookmarksIcon color={"disabled"} />
                {"  " + localString?.portfolio}
              </MenuContainer>
              <Divider />
              <MenuContainer onClick={logoutClick}>
                <PowerSettingsNewIcon color={"disabled"} />
                {"  " + localString?.logout}
              </MenuContainer>
            </Menu>
          </Toolbar>
        </AppBar>
      </MainContainer>
      {showLogout && <Logout cancelLogout={hideLogout} />}
    </>
  );
};
