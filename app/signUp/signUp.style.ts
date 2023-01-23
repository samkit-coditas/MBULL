import { styled } from "@mui/material/styles";
export const MainContainer = styled("div")(
  ({ theme }: any) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    .form {
      max-width: 50%;
      }
      .signUpForm {
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 0.5rem;
        row-gap: 0.3rem;
      }
      .avatar {
        background-color: ${theme.palette.primary.main};
      }
      .heading {
        grid-column: 1 / 3;
        display: grid;
        place-items: center;
      }
      .captcha-container {
        grid-column: 1 / 3;
        display: grid;
        place-items: center;
      }

      .full-width-container {
        grid-column: 1 / 3;
      }
      .backToSignIn{
        text-decoration:none;
        grid-column: 1 / 3;
        display: grid;
        place-items: center;
        color: ${theme.palette.primary.main};
      }
      ${theme.breakpoints.down("md")} {
        .form {
          max-width: 75%;
        };
      };
      ${theme.breakpoints.down("sm")}) {
        .form {
          max-width: 100%;
        };
        .signUpForm {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(4, auto);
        };
      };
      
  
`
);
