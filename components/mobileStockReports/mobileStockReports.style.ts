import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
      padding:0.5rem;
      
      .header{
        padding:0.5rem;
  
         .stockSnapShot{
            display: flex;
            gap:0.5rem;
            padding:0.5rem 0;
            .positiveDayChange{
              color: #00ff00;
            }
            .negativeDayChange{
              color: #ff0000;
            }
          }
      }
  
      .actionsContainer{
        display: flex;
        width:100%;
        gap: 1rem;
        justify-content:center;
        padding:1rem;
      }
  
      .chartButton{
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 0.5rem;
        cursor:pointer;
      }
      `
);
