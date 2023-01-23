"use client";

import { useContext, useRef, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Input from "../../components/input";

import { ISignInInputs } from "./signIn.types";
import { MainContainer } from "./signIn.style";

import { LanguageContext } from "../../hoc/languageProvider";
import { SignInContext } from "../../hoc/signInProvider";
import { ToasterContext } from "../../hoc/toasterProvider";

import { signIn } from "../../services/auth.services";


const SignIn = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const signInContext = useContext(SignInContext);
  const { localString } = useContext(LanguageContext);
  const { showToaster } = useContext(ToasterContext);

  const captchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();

  const schema = Yup.object({
    email: Yup.string()
      .email(localString["invalid-email-message"])
      .required(localString["email-required-message"]),
    password: Yup.string()
      .min(4, localString["short-password-message"])
      .max(20, localString["long-password-message"])
      .required(localString["password-required-message"]),
  });

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const methods = useForm<ISignInInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<ISignInInputs> = async (data) => {
    try {
      const token = captchaRef.current?.getValue();
      setCaptchaToken(token as string);
      captchaRef.current?.reset();

      const formData = {
        ...data,
        captcha: captchaToken,
      };

      const response = await signIn(formData);
      if (response) {
        const { accessToken, refreshToken } = response;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        showToaster("Sign In Successfull!!!");
        navigateTo("/dashboard");

        signInContext.onSignIn();
      }
      reset({
        email: "",
        password: "",
      });
    } catch (e: any) {
      if (e.response) {
        showToaster(e?.response?.data.error.message);
      } else {
        showToaster(e.message);
      }
    }
  };

  const onCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    if (token) setCaptchaToken(token as string);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible)
  }



  return (
    <MainContainer>
      <Paper elevation={10} className="formContainer">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h2">
          {localString["sign-in-title"]}
        </Typography>
        <Box>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>

              <Input name="email" fullWidth />

              <Input
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                fullWidth

                InputProps={
                  {
                    endAdornment: (
                      <InputAdornment position="end">

                        <IconButton onClick={togglePasswordVisibility}>
                          {
                            isPasswordVisible ?
                              <VisibilityOffIcon />
                              :
                              <VisibilityIcon />
                          }
                        </IconButton>

                      </InputAdornment>
                    ),
                  }
                }
              />

              <Box className="recaptchaContainer">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY || ""}
                  ref={captchaRef}
                  onChange={onCaptchaChange}
                  size="normal"
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!captchaToken}
                className="button"
              >
                {localString["sign-in"]}
              </Button>
            </form>
          </FormProvider>

          <div className="links">
            <Link href="/forgotPassword" className="forgotPassword">
              {localString["forgot-password"]}
            </Link>

            <Link href="/signUp" className="createAccount">
              {localString["sign-up"]}
            </Link>
          </div>
        </Box>
      </Paper>
    </MainContainer>
  );
};

export default SignIn;
