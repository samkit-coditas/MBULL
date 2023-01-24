import { useContext } from "react";

import Link from "next/link";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FaceIcon from "@mui/icons-material/Face";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Button } from "@mui/material";
import { MainContainer } from "./sidebar.style";
import { useState } from "react";
import { LanguageContext } from "../../hoc/languageProvider";
import { IconMap } from "../iconMap";
import { Logout } from "../logout";
const Sidebar = ({ items, selectedSegment }: any) => {
  const [showLogout, setShowLogout] = useState<boolean>(false);

  const { localString } = useContext(LanguageContext);

  const logoutClick = () => {
    setShowLogout(true);
  };
  const hideLogout = () => {
    setShowLogout(false);
  };
  return (
    <>
      <MainContainer>
        <List className="list">
          {items.map((x: any) => {
            return (
              <SidebarItem
                text={x.title}
                href={x.href}
                key={x.title}
                selectedSegment={selectedSegment}
              />
            );
          })}
        </List>
        ​
        <Button className={"logout"} onClick={logoutClick}>
          <PowerSettingsNewIcon color={"disabled"} />
          {localString?.logout}
        </Button>
      </MainContainer>
      {showLogout && <Logout cancelLogout={hideLogout} />}
    </>
  );
};
const SidebarItem = (props: any) => {
  const { localString } = useContext(LanguageContext);
  let isActive = `/dashboard/settings/${props.selectedSegment}` === props.href;
  if (props.selectedSegment == null) {
    isActive = "/dashboard/settings" === props.href;
  }
  const title = localString[`${props.text}`];
  const Icon = IconMap[props.text];
  return (
    <>
      <Link href={props.href} className="link">
        <ListItemButton className={isActive ? "active" : ""}>
          <ListItemIcon>
            <Icon className={"icon"} />
          </ListItemIcon>
          <ListItemText primary={title} className={"listItemText"} />
        </ListItemButton>
      </Link>
      <Divider />
    </>
  );
};
export default Sidebar;
