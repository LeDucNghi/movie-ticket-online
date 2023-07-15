"use client";

import "./Checkbox.scss";

import * as React from "react";

export interface ICheckboxProps {
  name: string;
  value: string;

  type?: "checkbox" | "radio";
  typeName?: string;

  handleChange: (value: string) => any;

  style?: React.CSSProperties;
}

export function Checkboxes({
  name,
  value,

  type,
  typeName,

  handleChange,

  style,
}: ICheckboxProps) {
  const handleFilterChange = () => {
    handleChange(value);
  };

  return (
    <label className="container" style={style}>
      <input onChange={handleFilterChange} name={typeName} type={type} />
      <div className="checkmark"></div>

      {name}
    </label>
  );
}
