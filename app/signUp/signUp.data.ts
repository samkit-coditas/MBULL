import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = (langStrings: any) =>
  yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(12).required(),
    name: yup.string().min(4).required(),
    confirmPassword: yup
      .string()
      .min(6)
      .max(12)
      .required()
      .oneOf([yup.ref("password"), null], langStrings?.passwordError),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, langStrings?.phoneNumberError)
      .min(10)
      .max(10),
    gender: yup.string().required(),
    occupation: yup.string().required(),
    securityQuestion: yup.string().required(),
    securityAnswer: yup.string().required(),
  });

export const initialValues = {
  email: "",
  name: "",
  phoneNumber: "",
  gender: "",
  occupation: "",
  password: "",
  confirmPassword: "",
  securityQuestion: "",
  securityAnswer: "",
};

export const formData: { [key: string]: any } = [
  {
    name: "email",
    className: "full-width-container",
  },
  { name: "name" },
  { name: "phoneNumber" },
  { name: "password", type: "password" },
  { name: "confirmPassword", type: "password" },
  { name: "gender", type: "select", options: true },
  { name: "occupation", type: "select", options: true },
  {
    name: "securityQuestion",
    className: "full-width-container",
    type: "select",
    options: true,
  },
  { name: "securityAnswer", className: "full-width-container" },
];
