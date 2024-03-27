/** @format */

import {TextField} from "@mui/material";
import {Control, Controller} from "react-hook-form";

type ITextFieldFormValidation = {
  error?: boolean;
  helperText?: string;
  label?: string;
  control: Control<any, any>;
  defaultValue?: string | number | null;
  name: string;
  required?: boolean;
  type?: string;
  multiline?: boolean;
  rows?: number;
  variant?: "outlined" | "standard" | "filled";
};

export default function TextFieldFormValidation({
  error,
  helperText,
  label,
  control,
  defaultValue,
  name,
  required,
  type,
  multiline,
  rows,
  variant,
}: ITextFieldFormValidation) {
  const redColor = "#d32f2f";

  return (
    <Controller
      render={({field}) => (
        <TextField
          {...field}
          required={required}
          type={type}
          label={label}
          multiline={multiline}
          rows={rows}
          fullWidth
          margin="dense"
          error={error}
          helperText={helperText}
          defaultValue={defaultValue}
          variant={variant}
          InputProps={{
            style: {
              color: error ? redColor : undefined,
            },
          }}
        />
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
    />
  );
}
