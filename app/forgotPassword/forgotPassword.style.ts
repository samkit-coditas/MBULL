import { styled } from "@mui/material/styles";
export const MainContainer = styled("div")(
  ({ theme }: any) => `
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height: 100vh;
    width: 100vw;
    text-align: center;
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
    .forgotPasswordForm {
      width: 100%;
      padding: 20px;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
    }
    .avatar {
      background-color: ${theme.palette.primary.main};
    }
    .heading { 
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
    button {
      margin: 20px 0;
    }
    .backToSignIn{
      text-decoration:none;
      color: ${theme.palette.primary.main};
    }
    ${theme.breakpoints.down("md")} {
      .form {
        max-width: 450px;
        margin: 0 auto;
      }
      .forgotPasswordForm {
        max-width: 400px;
      }
      .heading {
        max-width: 400px;
      }
      button {
        max-width: 200px;
      }
    }
  
`
);
