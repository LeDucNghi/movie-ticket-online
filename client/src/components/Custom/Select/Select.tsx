import "./Select.scss";

import * as React from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Options } from "@/models";

export interface ICustomSelectProps {
  name?: string;
  label: string;
  handleChange: (value: string) => void;
  options: Options[];
}

export function CustomSelect({
  name,
  label,
  handleChange,
  options,
}: ICustomSelectProps) {
  const [value, setValue] = React.useState("");
  const [defaultValue, setDefaultValue] = React.useState<string | undefined>(
    ""
  );

  const handleSelectChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };

  React.useEffect(() => {
    setDefaultValue(options[0].value);
  }, [options]);

  return (
    <FormControl
      className="select_container"
      variant="standard"
      sx={{ m: 1, minWidth: 120, color: "#fff" }}
    >
      <InputLabel
        className="select_label"
        id="demo-simple-select-standard-label"
      >
        {label}{" "}
      </InputLabel>
      <Select
        className="select_field"
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleSelectChange}
        label={label}
        defaultValue={defaultValue}
        name={name}
      >
        {options.map((option, key) => {
          return (
            <MenuItem key={key} value={option.value}>
              {option.name}{" "}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
