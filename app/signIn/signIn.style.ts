import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) => `
    display:flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
    background-image: url("/Background.png");

      .formContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        height:85%;
        background-color:transparent;
      }

      .avatar {
        margin: 20px;
        background-color: ${theme.palette.primary.main};
      }

      form {
        width: 100%;
        margin: 20px 0;
      }

      .recaptchaContainer {
        margin: 20px 0;
        display: flex;
        justify-content: center;
      }

      .links{
        display:flex;
        justify-content:space-between;
      }

      .forgotPassword {
        text-decoration:none;
        font-size:large;
        color: ${theme.palette.primary.main};
      }

      .createAccount {
        text-decoration:none;
        font-size:large;
        color: ${theme.palette.primary.main};
      }
  
${theme.breakpoints.down("md")} {

      form {
        max-width: 450px;
        margin: 40px auto;
      }

      .recaptchaContainer {
        max-width: 450px;
      }

      .formContainer {
        max-width: 500px;
        margin: 0 auto;
      }

      .links {
        max-width: 450px;
      }

}
`
);
