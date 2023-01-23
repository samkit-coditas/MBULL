"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { MySwipeableDrawer } from "./swipeableDrawer.styles";
const drawerBleeding = 56;
const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));
export default function SwipeableEdgeDrawer(props: any) {
  return (
    <MySwipeableDrawer
      anchor="bottom"
      open={props.open}
      onClose={props.toggleDrawer(false)}
      onOpen={props.toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Puller />
      {props.children}
    </MySwipeableDrawer>
  );
}
