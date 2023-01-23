import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
    
    .cardContainer  {
        margin-bottom:0.5rem;
        padding: 1rem;
        color:#bdbdbd;
        background-color:white;
        border-radius: 0.5rem;
    };

    .cardContent {
        display: flex;
        justify-content: space-between;
    };

    .cardActions{
        padding-top:0.25rem;
        display: flex;
        gap: 0.5rem;
    }

    .bone{
        width:3rem;
        height:2rem;
    }

${theme.breakpoints.down("md")}{
   .cardActions{
        display:none
   }
  }
`
);
