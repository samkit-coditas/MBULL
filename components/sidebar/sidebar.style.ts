import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  .logout{
    align-self:start;
    margin-left:0.5rem;
    display:flex;
    gap:1rem;
  }
  .list{
    padding: 0;
  }
  .link {
    text-decoration: none;
  }
  .active{
    color: black;
  } 
  .icon{
    color: ${theme.palette.secondary.main};
  }
  .listItemText{
    color: ${theme.palette.secondary.main}
  }
    `
);
