import { TextFieldProps } from "@mui/material/TextField";
export type IInputProps = {
  name: string;
  type?: "text" | "password" | "select";
  options?: { value: string; label: string }[];
} & TextFieldProps;
