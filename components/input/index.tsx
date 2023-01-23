import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";

import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import { IInputProps } from "./input.types";
import { LanguageContext } from "../../hoc/languageProvider";

const Input = ({
  name,
  options = [],
  type = "text",
  ...textFieldProps
}: IInputProps) => {
  const { control } = useFormContext();

  const context = useContext(LanguageContext);
  const { localString } = context;

  const isSelect = type === "select";
  return (
    <Controller
      render={({ field, formState: { errors } }) => (
        <TextField
          {...field}
          type={isSelect ? "" : type}
          select={isSelect}
          margin="dense"
          variant="outlined"
          label={localString[name]}
          error={!!errors[name]}
          helperText={errors[name] ? (errors[name]?.message as string) : ""}
          {...textFieldProps}
        >
          {isSelect &&
            (options.length > 0 ? (
              options.map((obj: { [key: string]: string }, index: number) => {
                return (
                  <MenuItem key={index} value={obj.value}>
                    {obj.label}
                  </MenuItem>
                );
              })
            ) : (
              <MenuItem value="">{localString?.waiting}</MenuItem>
            ))}
        </TextField>
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};
export default Input;
