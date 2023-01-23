"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import Sidebar from "../../../components/sidebar";
import { navList } from "./navList";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { MainContainer } from "./settingsLayout.style";
import { ILayoutTypes } from "../../layout.types";

const SettingsLayout = ({ children }: ILayoutTypes) => {
  const segment = useSelectedLayoutSegment();

  return (
    <MainContainer>
      <Box className="sidebar">
        <Sidebar items={navList} selectedSegment={segment} />
      </Box>
      <Divider />
      <Box className="main">{children}</Box>
    </MainContainer>
  );
};

export default SettingsLayout;
