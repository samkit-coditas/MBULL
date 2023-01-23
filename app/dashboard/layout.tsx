"use client";

import Box from "@mui/material/Box";

import { TopBar } from "../../components/topBar";
import { ILayoutTypes } from "../layout.types";
import { MainContainer } from "./layout.style";

export default function DashboardLayout({ children }: ILayoutTypes) {
  return (
    <MainContainer>
      <Box className="layoutTopBar">
        <TopBar />
      </Box>
      <Box className="layoutMainContent">{children}</Box>
    </MainContainer>
  );
}
