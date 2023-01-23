"use client";

import { FC, useContext } from "react";
import { useCallback } from "react";

import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { IconMap } from "../iconMap";
import { LanguageContext } from "../../hoc/languageProvider";

interface SortMenuItemProps {
  name: string;
  order: "asc" | "desc" | null;
  onToggleOrder: (criteria: string) => void;
}

export const SortMenuItem: FC<SortMenuItemProps> = (props) => {
  const { name, order, onToggleOrder } = props;
  const { localString } = useContext(LanguageContext);
  const onClick = useCallback(() => {
    onToggleOrder(name);
  }, [name, onToggleOrder]);

  const Icon =
    order === "asc"
      ? IconMap["upwardArrow"]
      : order === "desc"
      ? IconMap["downwardArrow"]
      : IconMap[name];

  return (
    <>
      <MenuItem onClick={onClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={localString[`${name}SortTitle`]} />
      </MenuItem>
      <Divider />
    </>
  );
};
