"use client";

import { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CreateIcon from "@mui/icons-material/Create";
import InputAdornment from "@mui/material/InputAdornment";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Input from "../../components/input";
import {
  checkEmail,
  getQuestions,
  signUpSubmit,
} from "../../services/auth.services";
import { ISignUpInputs } from "./signUp.types";
import { formData, initialValues, schema } from "./signUp.data";
import { LanguageContext } from "../../hoc/languageProvider";
import { MainContainer } from "./signUp.style";

const SignUp = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const [securityOuestionsArray, setsecurityOuestionsArray] = useState([]);

  const captchaRef = useRef<any>(null);
  const router = useRouter();

  const context = useContext(LanguageContext);
  const { localString } = context;

  const methods = useForm<ISignUpInputs>({
    resolver: yupResolver(schema(localString)),
    defaultValues: initialValues,
  });
  const {
    reset,
    setError,
    clearErrors,
    handleSubmit,
    trigger,
    formState: { errors, dirtyFields },
  } = methods;

  useEffect(() => {
    getSecurityQuestions();
  }, []);

  const getSecurityQuestions = async () => {
    const response = await getQuestions();
    if (response?.data) {
      const tempSecQuestionsArray = response?.data?.data.map((obj: any) => ({
        value: obj._id,
        label: obj.question,
      }));
      setsecurityOuestionsArray(tempSecQuestionsArray);
    }
  };

  const onEmailBlur: (data: string) => void = async (data: string) => {
    const trigRes = await trigger("email");
    if (trigRes) {
      const response = await checkEmail(data);
      if (response?.data?.data?.exists) {
        setError("email", {
          type: "focus",
          message: localString?.emailError,
        });
      } else {
        clearErrors("email");
      }
    }
  };

  const onSubmit: SubmitHandler<ISignUpInputs> = async (data) => {
    const token = captchaRef.current.getValue();
    setCaptchaToken(token);
    captchaRef.current.reset();
    const formData = {
      ...data,
      captcha: captchaToken,
    };
    const response = await signUpSubmit(formData);

    reset(initialValues);
    router.push("/");
  };

  const onCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    if (token) setCaptchaToken(token as string);
  };

  const getOptions: any = {
    gender: [
      { value: "male", label: localString?.male },
      { value: "female", label: localString?.female },
      { value: "other", label: localString?.other },
    ],
    occupation: [
      { value: "business", label: localString?.business },
      { value: "salaried", label: localString?.salaried },
      { value: "selfEmployed", label: localString?.selfEmployed },
      { value: "student", label: localString?.student },
      { value: "other", label: localString?.other },
    ],
    securityOuestion: securityOuestionsArray,
  };

  const InputProps = {
    endAdornment: (
      <InputAdornment position="end">
        {dirtyFields.email ? (
          errors.email ? (
            <CancelIcon color="warning" />
          ) : (
            <CheckCircleIcon color="success" />
          )
        ) : (
          ""
        )}
      </InputAdornment>
    ),
  };

  const isFieldEmail = (name: string) => name === "email";

  const isFieldSecurityQuestions = (name: string) =>
    name === "securityQuestion";

  const isDisabled = !(
    Boolean(captchaToken) &&
    Object.keys(dirtyFields).length === Object.keys(initialValues).length
  );

  return (
    <MainContainer>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
          <Paper elevation={10} square className={"signUpForm"}>
            <div className={"heading"}>
              <Avatar className="avatar">
                <CreateIcon />
              </Avatar>
              <Typography component="h1" variant="h2">
                {localString?.signUp}
              </Typography>
            </div>
            {formData.map(
              ({ name, className, options, type }: any, index: number) => (
                <Input
                  key={index}
                  InputProps={isFieldEmail(name) ? InputProps : undefined}
                  onBlur={
                    isFieldEmail(name)
                      ? (e: any) => {
                          onEmailBlur(e.target.value);
                        }
                      : undefined
                  }
                  name={name}
                  className={className}
                  options={
                    options && isFieldSecurityQuestions(name)
                      ? securityOuestionsArray
                      : getOptions[name]
                  }
                  type={type}
                />
              )
            )}
            <div className={"captcha-container"}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY || ""}
                ref={captchaRef}
                onChange={onCaptchaChange}
                size="normal"
              />
            </div>
            <div className={"full-width-container"}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isDisabled}
              >
                {localString?.signUp}
              </Button>
            </div>
            <Link href="/signIn" className="backToSignIn">
              {localString["backToSignIn"]}
            </Link>
          </Paper>
        </form>
      </FormProvider>
    </MainContainer>
  );
};

export default SignUp;
