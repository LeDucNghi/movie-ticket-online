"use client";

import "./FilterItem.scss";

import * as React from "react";

import { Checkboxes } from "../Custom/Checkbox/Checkbox";

interface FilterItems {
  id: number;
  genreName: string;
  value: string;
}

export interface IFilterItemProps {
  items: FilterItems;
  style?: React.CSSProperties;

  checkboxStyle?: React.CSSProperties;
}

export function FilterItem({ items, style, checkboxStyle }: IFilterItemProps) {
  const [filter, setFilter] = React.useState("");

  // React.useEffect(() => {
  //   console.log("🚀 ~ file: FilterItem.tsx:19 ~ FilterItem ~ filter:", filter);
  // }, [filter]);

  return (
    <div className="filter_wrapper" style={style}>
      <Checkboxes
        name={items.genreName}
        value={items.value}
        handleChange={setFilter}
        type="radio"
        typeName="radio"
      />
    </div>
  );
}
