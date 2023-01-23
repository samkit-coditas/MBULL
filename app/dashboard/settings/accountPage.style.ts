import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) =>
    `
    height:100%;
    position:relative;

      .header{
        display: flex;
        justify-content:space-between;
      }

      .input{
        background-color:white;
      }

      .inputName{
         width:100%;
      }
      
      .emailAndPhoneNumberContainer{
        display:flex;
        gap:0.5rem;
        width:100%;
        .input{
          flex:1;
        }
      }

      .actionsContainer{
        position: absolute;
        bottom:0;
        right:0;
          .button{
            margin:0.5rem;
      }

    }
  `
);
