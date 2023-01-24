import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
export const MainContainer = styled("div")(
  ({ theme }: any) => `
  positon:fixed;
  .menuItem{
    display:flex;
    gap:0.5rem;
    font-size:medium;
  }
  .menu{
    background-color: ${theme.palette.primary.light};
    top: 70px;
  }
  .heading{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:0.5rem;
    cursor:pointer;
    margin-left: 20px;
  }
  .menuButton{
    margin-right: 20px;
  }
  .appBar {
    background-color: ${theme.palette.primary.main};
  }
  .toolBar{
    display:flex;
    justify-content:space-between;
    padding:0;
  }
  .icon{
    height:50px;
    width:80px;
  }
`
);
export const MenuContainer = styled(MenuItem)(
  ({ theme }: any) => `
    display:flex;
    align-items:center;
    gap:0.5rem;
    font-size:large;
    padding: 0.5rem 1rem;
  `
);
