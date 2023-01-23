import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import FaceIcon from "@mui/icons-material/Face";
import TranslateIcon from "@mui/icons-material/Translate";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PercentIcon from "@mui/icons-material/Percent";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export const IconMap: {
  [key: string]: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
} = {
  account: FaceIcon,
  language: TranslateIcon,
  wallet: AccountBalanceWalletIcon,
  upwardArrow: ArrowUpwardIcon,
  downwardArrow: ArrowDownwardIcon,
  companyName: SortByAlphaIcon,
  lastTradedPrice: CurrencyRupeeIcon,
  dayChange: PercentIcon,
};
