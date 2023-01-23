import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const MySwipeableDrawer = styled(SwipeableDrawer)(
  ({ theme }: any) => `

  .css-9emuhu-MuiPaper-root-MuiDrawer-paper{
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    height: 75%;
  }

  .stockInformationContainer{

    .stockInformationItems{
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0 1rem;
    };

    .dark{
      background-color: #D6D6D6;
    }

  }
  `
);
