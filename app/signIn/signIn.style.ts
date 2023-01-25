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
      .login-loader {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
      }
      
      .lds-ellipsis div {
        position: absolute;
        top: 27px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
      }
      
      .lds-ellipsis div:nth-child(1) {
        left: 6px;
        animation: lds-ellipsis1 0.6s infinite;
      }
      
      .lds-ellipsis div:nth-child(2) {
        left: 6px;
        animation: lds-ellipsis2 0.6s infinite;
      }
      
      .lds-ellipsis div:nth-child(3) {
        left: 26px;
        animation: lds-ellipsis2 0.6s infinite;
      }
      
      .lds-ellipsis div:nth-child(4) {
        left: 45px;
        animation: lds-ellipsis3 0.6s infinite;
      }
      
      @keyframes lds-ellipsis1 {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
      
      @keyframes lds-ellipsis3 {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }
      
      @keyframes lds-ellipsis2 {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(19px, 0);
        }
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
