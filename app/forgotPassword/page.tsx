"use client";

import { useState, useContext } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockResetIcon from "@mui/icons-material/LockReset";
import { MainContainer } from "./forgotPassword.style";

import Input from "../../components/input";

import { LanguageContext } from "../../hoc/languageProvider";
import {
  IForgotPasswordInputs,
  IForgotPasswordInput,
} from "./forgotPassword.types";

import {
  forgotPasswordSubmit,
  submitEmail,
} from "../../services/auth.services";

import {
  defaultForgotPasswordValues,
  formData,
  schemaEmail,
  schemaRest,
} from "./forgotPassword.data";

const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");

  const context = useContext(LanguageContext);
  const { localString } = context;
  const router = useRouter();

  const formOne = useForm<IForgotPasswordInput>({
    resolver: yupResolver(schemaEmail),
    defaultValues: {
      email: "",
    },
  });

  const formTwo = useForm<IForgotPasswordInputs>({
    resolver: yupResolver(schemaRest(localString)),
    defaultValues: defaultForgotPasswordValues,
  });

  const onEmailSubmit: SubmitHandler<IForgotPasswordInput> = async (data) => {
    const formData = {
      ...data,
    };
    const response = await submitEmail(formData);
    if (response) {
      setSecurityQuestion(response.securityQuestion.question);
      setSecurityAnswer(response.securityAnswer);
      setUserEmail(data.email);
    }
  };
  const onFormSubmit: SubmitHandler<IForgotPasswordInputs> = async (data) => {
    const { securityAnswer: userAnswer, ...tempFormData } = data;
    let formData: { [key: string]: string } = { ...tempFormData };
    formData.email = userEmail;
    if (userAnswer === securityAnswer) {
      const response = await forgotPasswordSubmit(formData);
      formOne.reset({
        email: "",
      });
      formTwo.reset(defaultForgotPasswordValues);
      formTwo.clearErrors("securityAnswer");
      router.push("/");
    } else {
      formTwo.setError("securityAnswer", {
        type: "string",
        message: "Wrong Answer",
      });
    }
  };
  const isDisabled = !(
    Object.keys(formTwo.formState.dirtyFields).length ===
    Object.keys(defaultForgotPasswordValues).length
  );
  const isEmailAvailable = userEmail.length === 0;
  const getQuestion = () => {
    return securityQuestion.length > 0
      ? securityQuestion
      : localString?.waiting;
  };
  return (
    <MainContainer>
      {isEmailAvailable ? (
        <FormProvider {...formOne}>
          <form
            className={"form"}
            onSubmit={formOne.handleSubmit(onEmailSubmit)}
          >
            <Paper elevation={10} square className={"forgotPasswordForm"}>
              <Avatar className="avatar">
                <LockResetIcon />
              </Avatar>
              <div className={"heading"}>
                <Typography component="h1" variant="h2">
                  {localString?.forgotPassword}
                </Typography>
              </div>
              <Input name="email" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!formOne.formState.isDirty}
              >
                {localString?.confirmEmail}
              </Button>
              <Link href="/signIn" className="backToSignIn">
                {localString["backToSignIn"]}
              </Link>
            </Paper>
          </form>
        </FormProvider>
      ) : (
        <FormProvider {...formTwo}>
          <form
            className={"form"}
            onSubmit={formTwo.handleSubmit(onFormSubmit)}
          >
            <Paper elevation={10} square className={"forgotPasswordForm"}>
              <Avatar className="avatar">
                <LockResetIcon />
              </Avatar>
              <div className={"heading"}>
                <Typography component="h1" variant="h2">
                  {localString["forgotPassword"]}
                </Typography>
              </div>
              <p>{getQuestion()}</p>
              {formData.map(
                ({ name, type }: { [key: string]: any }, index: number) => (
                  <Input
                    key={index}
                    name={name}
                    type={type}
                    disabled={isEmailAvailable}
                  />
                )
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isDisabled}
              >
                {localString?.resetPassword}
              </Button>
              <Link href="/signIn" className="backToSignIn">
                {localString["backToSignIn"]}
              </Link>
            </Paper>
          </form>
        </FormProvider>
      )}
    </MainContainer>
  );
};

export default ForgotPassword;
