import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `

  display: flex;
  height:100%;

    .sidebar{
      flex:1;
      border-right: 1px solid ${theme.palette.secondary.main};
    };

    .main{
      padding:2rem;
      flex:4;
    };
    `
);
