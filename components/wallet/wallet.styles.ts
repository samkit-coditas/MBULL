import { styled } from "@mui/material/styles";
const MainContainer = styled("div")(
  ({ theme }: any) => `
      width:100%;
      height:100%;
        .fundSection{
          padding:1rem;
          display: flex;
          flex-direction:column;
          justify-content:start;
          align-items:start;
            .fundDetails{
              display: flex;
              flex-direction: column;
              justify-content:center;
              align-items:center;
                .fundDetailsAccountBalance{
                  font-size: 2rem;
                  width: 100%;
                  margin: 1rem;
                  box-sizing: border-box;
                }
            };
            .fundActionsContainer{
              display:flex;
              gap: 1rem;
            }
            .fundActions{
            }
        };
${theme.breakpoints.down("md")}{
    .fundActionContainer{
      position:initial;
    }
  }
    `
);
export default MainContainer;
