import "./Wrapper.scss";

import * as React from "react";

export interface IWrapperProps {
  title: string;
  children: JSX.Element;

  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

export function Wrapper({
  title,
  children,
  style,
  contentStyle,
}: IWrapperProps) {
  return (
    <div style={style} className="wrapper_container">
      <div className="wrapper_title">{title}</div>

      <div style={contentStyle} className="wrapper_content">
        {children}
      </div>
    </div>
  );
}
