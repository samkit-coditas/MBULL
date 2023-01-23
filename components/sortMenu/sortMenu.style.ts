import { Menu } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `

        .css-78trlr-MuiButtonBase-root-MuiIconButton-root{
          color: #D6D6D6
        }
        .sortIconActive{
          color:black;
        }
        .sortIcon{
          color: #a4a0a0;
        }
   
    `
);

export const MyMenu = styled(Menu)(
  ({ theme }: any) => `
    .sortActionsContainer{
        display: flex;
        justify-content:center;
        gap:0.5rem;
        padding: 0rem 0.5rem;
    }  
    `
);
