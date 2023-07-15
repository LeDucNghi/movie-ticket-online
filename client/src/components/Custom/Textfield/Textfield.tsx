import "./Textfield.scss";

import * as React from "react";

import { ErrorMessage, FormikFormProps } from "formik";

import FormControl from "@mui/material/FormControl";
import { FormikFieldProps } from "@/models";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export interface ICustomTextfieldProps {
  type: "text" | "password";

  id?: string;
  value?: string;
  fieldName?: string;
  label: string;
  hasIcons: boolean;
  icons?: JSX.Element;
  placeholder?: string;

  field?: FormikFieldProps;
  form?: FormikFormProps;

  handleChange?: (value: string) => any;
  handleBlur?: any;

  style?: React.CSSProperties;
  width?: string;
  iconsColor?: string;

  className?: string;
}

export function CustomTextfield({
  id,
  label,
  hasIcons,
  type,
  fieldName,
  style,
  handleChange,
  handleBlur,
  width,
  className,
  field,
  form,
  value,
  icons,
  iconsColor,
  placeholder,
}: ICustomTextfieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState<string>("");
  const [fieldType, setFieldType] = React.useState<string>(type);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
    if (fieldType === "password") setFieldType("text");
    else setFieldType("password");
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    if (handleChange) {
      handleChange(fieldValue);
    }
  }, [fieldValue]);

  return (
    <>
      <FormControl
        className={className ? className : "textfield_container"}
        style={style}
        sx={{ m: 1, width: width ? width : "25ch" }}
        variant="standard"
      >
        <InputLabel
          className="input_label"
          htmlFor={id ? id : "standard-adornment-password"}
        >
          {label}{" "}
        </InputLabel>
        <Input
          name={field ? field.name : fieldName}
          onBlur={field ? field.onBlur : handleBlur}
          onChange={
            field ? field.onChange : (e) => setFieldValue(e.target.value)
          }
          defaultValue={
            field && field.values ? field.values[field.name] : value
          }
          type={fieldType}
          id={id}
          autoFocus={true}
          autoComplete="no"
          className="input_field"
          placeholder={placeholder}
          color="success"
          endAdornment={
            hasIcons && type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  style={{
                    color: iconsColor ? iconsColor : `#fff`,
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : hasIcons && type !== "password" ? (
              <InputAdornment position="end">
                <IconButton
                  style={{
                    color: iconsColor ? iconsColor : `#fff`,
                  }}
                >
                  {icons}
                </IconButton>
              </InputAdornment>
            ) : null
          }
        />
      </FormControl>

      {form && field && (
        <ErrorMessage
          render={(message) => <div className="error_message">{message} </div>}
          name={field!.name}
        />
      )}
    </>
  );
}
