import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
  height:100%;
  .stockChartContainer {
      height:100%;
      display : flex;
      background-color:white;
      border-radius: 0.5rem; 
      padding:0.5rem;

        .stockChart{
        flex:3 ;
        };
        
        .stockChartFilterActionsContainer {
        padding:0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        }
  }
 
  ${theme.breakpoints.down("md")}{

    
    .stockChartContainer{
      flex-direction: column;

    .stockChartFilterActionsContainer{
      display: flex;
      flex-direction:row;
      .stockChartFilterActionButton{
        min-width: 0.5rem;
      }
    }
  };

}
`
);
