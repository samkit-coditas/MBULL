import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(
  ({ theme }: any) =>
    `
    .header{
        display:flex;
        justify-content: space-between;
        align-items:center;

        .heading{
            height: 4rem;
            width: 24rem;
        }
        .icon{
            width:2rem;
            height:2rem;
        }
    }

    .details{

        .name{
            height: 3rem;
        }

        .emailAndPhoneNumberContainer{

            display: flex;
            gap: 0.5rem;
            width:100%;
            height: 3rem;
        }
    }

  `
);
