import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
    display: flex;
    height:100vh;
    flex-direction: column;
      .layoutMainContent{
       flex-grow:1;
       overflow:auto;
      }
`
);
