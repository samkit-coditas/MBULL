import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  gap:1rem;
`
);
