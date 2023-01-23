import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
    
    .cardContainer  {
        margin-bottom:0.5rem;
        padding: 1rem;
        cursor:pointer;
        color:#bdbdbd;
        background-color:white;
        border-radius: 0.5rem;
    };

    .selectedCardContainer{   
        margin-bottom:0.5rem;
        padding: 1rem;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
        cursor:pointer;
        background-color:white;
        border-radius: 0.5rem;
    }

    .cardContent {
        display: flex;
        justify-content: space-between;
    };

    .cardActions{
        padding-top:0.25rem;
        display: flex;
        gap: 0.5rem;
    }

    .button:hover{
        box-shadow: rgba(66,165,245, 0.63) 2px 2px 2px 2px;
    }

    .buyButton:hover{
        background-color: #00ff00;
    }

    .sellButton:hover{
        background-color: #ff0000;
    }

    .positivePriceChange {
        color: #00ff00;
    };

    .negativePriceChange {
        color: #ff0000;
    }

${theme.breakpoints.down("md")}{
   .cardActions{
        display:none
   }
  }
`
);
