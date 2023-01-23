import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:50;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color:rgba(0,0,0,0.63);
.logout{
  display:flex;
  flex-direction:column;
  gap:2rem;
  padding:2rem;
}
.yes{
  flex:1;
}
.no{
  flex:2
}
.button-container{
  display:flex;
  gap:2rem;
  justify-content:space-evenly;
}
a{
  text-decoration:none;
}
p{
  font-size:larger;
  font-weight:700;
  color:${theme.palette.secondary.dark}
}
`
);
