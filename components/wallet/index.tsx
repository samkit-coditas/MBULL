import { useContext, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import MainContainer from "./wallet.styles";
import CustomModal from "../customModal";
import AddFundsForm from "../forms/addFunds";

import { getFunds } from "../../services/user.service";
import { LanguageContext } from "../../hoc/languageProvider";
const Wallet = () => {
  const [open, setOpen] = useState(false);
  const [accountBalance, setAccountBalance] = useState(0);

  const { localString } = useContext(LanguageContext);

  const addFunds = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const getAccountBalance = async () => {
    const response = await getFunds();
    setAccountBalance(response?.balance);
  };

  useEffect(() => {
    getAccountBalance();
  }, [open]);

  return (
    <MainContainer>
      <CustomModal
        open={open}
        title={localString["add funds"]}
        content={<AddFundsForm closeCallback={onClose} />}
        closeCallback={() => setOpen(false)}
      />
      <Box className="fundSection">
        <Box className="fundDetails">
          <Typography component="h1" variant="h2">
            {localString["available balance"]}
          </Typography>
          <Box className="fundDetailsAccountBalance">
            {" "}
            <span>&#8377;</span> <span>{accountBalance}</span>
          </Box>
        </Box>
        <Box className="fundActionsContainer">
          <Button
            variant="contained"
            className="fundActions"
            onClick={addFunds}
          >
            {localString["add funds"]}
          </Button>
          <Button variant="contained" className="fundActions">
            {localString["withdraw"]}
          </Button>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default Wallet;
