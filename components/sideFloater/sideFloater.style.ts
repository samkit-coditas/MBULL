import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Drawer)(
  ({ theme }: any) =>
    `
    .MuiPaper-root{
      width:100%;
      padding:0.5rem;
      display: flex;
      flex-direction:column;

      .mainContent{
        width: 100%;
        flex:1;
        background-color:pink;
      }
    }
  
    `
);
