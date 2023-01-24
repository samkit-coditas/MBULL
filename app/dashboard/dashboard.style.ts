import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
  display: flex;
  box-sizing: border-box;
  height:100%;
  background-color: ${theme.palette.background.default};

  
    .stockListContainer{
      flex: 1;
      display:flex;
      flex-direction:column;
      padding: 0rem 1rem;

        .stockListUtilityContainer{
          display: flex;
          padding: 0.5rem 0rem;

          .css-1ikfz74-MuiInputBase-root-MuiInput-root::before{
            border-bottom: 1px solid #D6D6D6;
          }

        };
        

        .stockCardsContainer {
          overflow-y: scroll;

          ::-webkit-scrollbar {
          display:none;
        }
        };
    };

    .stockReportsContainer{
      flex:3 ;
      padding:1rem;
      display:flex;
      flex-direction:column;
      gap:0.75rem;

        .stockChartTitle{
          color: ${theme.palette.secondary.main};
        };


        .dashboardStockChartContainer{
          flex:9;
        }

        .stockInformationContainer{
          flex:3;
          margin: 0.5rem 0;
          padding: 0.5rem;
          display:flex;
          overflow-y: scroll;
          background-color:white;
          border-radius:0.5rem;

          ::-webkit-scrollbar {
              display:none;
          }
    
          .stockInformationItems{
            padding:0.5rem;
            display: flex;
            gap:1rem;
            align-items:baseline;

              .stockInformationItemsTitle{
                font-size: 0.75rem;
                color:#bdbdbd;
              }
              .stockInformationItemsValue{
                font-size:1rem;
                font-weight: 300;
              }
          };
        };

        .stockReportEmpty{
          height:100%;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          color:${theme.palette.secondary.dark};
        }

        .stockChartSkeleton{
          widht:100%;
          height:70%;
          transform: scale(1, 0.8)
        }
    };



${theme.breakpoints.down("md")}{
   flex-direction:column;

    .divider{
      display:none;
    };

    .stockListContainer{
      margin: 0.5rem;
    };

    .stockReportsContainer{
      margin: 0.5rem;
      display:none;
    };
    
  }
`
);
