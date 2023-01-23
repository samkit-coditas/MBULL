import * as yup from "yup";

export const schemaRest = (langstring: { [key: string]: string }) =>
  yup.object().shape({
    newPassword: yup.string().min(6).max(12).required(),
    confirmNewPassword: yup
      .string()
      .min(6)
      .max(12)
      .required()
      .oneOf([yup.ref("newPassword"), null], langstring?.passwordError),
    securityAnswer: yup.string().required(),
  });
export const schemaEmail = yup.object().shape({
  email: yup.string().email().required(),
});
export const defaultForgotPasswordValues = {
  newPassword: "",
  confirmNewPassword: "",
  securityAnswer: "",
};

export const formData: { [key: string]: string }[] = [
  { name: "securityAnswer" },
  { name: "newPassword", type: "password" },
  { name: "confirmNewPassword", type: "password" },
];
