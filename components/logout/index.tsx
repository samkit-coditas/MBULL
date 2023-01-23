import { useContext } from "react";
import Link from "next/link";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { LanguageContext } from "../../hoc/languageProvider";
import { MainContainer } from "./logout.style";
import { signOut } from "../../services/auth.services";
import { ToasterContext } from "../../hoc/toasterProvider";
import { ILogoutProps } from "./logout.types";

export const Logout = ({ cancelLogout }: ILogoutProps) => {
  const { localString } = useContext(LanguageContext);
  const { showToaster } = useContext(ToasterContext);

  const logout = async () => {
    const res = await signOut();
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    showToaster("Sign Out Successfull!!!");
    cancelLogout();
  };
  return (
    <MainContainer>
      <Paper elevation={10} className="logout">
        <p>{localString?.logoutConfirm}</p>
        <div className="button-container">
          <Link href="/signIn">
            <Button variant="contained" onClick={logout} className={"yes"}>
              {localString?.yes}
            </Button>
          </Link>
          <Button variant="contained" onClick={cancelLogout} className={"no"}>
            {localString?.no}
          </Button>
        </div>
      </Paper>
    </MainContainer>
  );
};
