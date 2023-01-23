import { useContext } from "react";

import Button from "@mui/material/Button";
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


import { IStockCardProps } from "./stockCard.types";
import { MainContainer } from "./stockCard.style";
import { LanguageContext } from "../../hoc/languageProvider";

const StockCard = ({
  data,
  currentStockNseCode,
  onCardSelection,
}: IStockCardProps) => {
  const { localString } = useContext(LanguageContext);

  let { companyName, lastTradedPrice, dayChange, nseCode } = data;

  const isChangePositive = dayChange >= 0;
  const isActive = nseCode === currentStockNseCode;

  return (
    <MainContainer>
      <Box
        onClick={() => onCardSelection(data)}
        className={isActive ? "selectedCardContainer" : "cardContainer"}
      >
        <Box>
          <Stack
            direction="row"
            className="cardContent"
            data-testid="stockCard"
          >
            <Typography className="text" component="h2" variant="h6" gutterBottom>
              {companyName}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography component="h2" variant="h6">{lastTradedPrice}</Typography>
              <Typography
                className={
                  isChangePositive
                    ? "positivePriceChange"
                    : "negativePriceChange"
                }
                component="h2" variant="h6"
              >
                {isChangePositive ? `+${dayChange}` : dayChange}
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box className="cardActions">
          <Button className="button buyButton" variant="contained" size="small">
            {localString["buy"]}
          </Button>
          <Button variant="contained" className="button sellButton" size="small">
            {localString["sell"]}
          </Button>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default StockCard;
