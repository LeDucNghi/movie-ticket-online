"use client";

import "./AuthForm.scss";

import Link from "next/link";

export interface IAuthFormProps {
  children: JSX.Element;

  headerCate: string;
  headerTitle: string;

  page: "isSignIn" | "isSignUp" | "isForget";
}

export function AuthForm({
  children,
  headerCate,
  headerTitle,
  page,
}: IAuthFormProps) {
  return (
    <div className="auth_form_container">
      <div className="form_header">
        <span className="header_cate">{headerCate}</span>

        <h2 className="header_title">{headerTitle}</h2>
      </div>

      <div className="account_form">{children}</div>

      <div className="form_option">
        {page === "isSignIn"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        &nbsp;
        <Link
          rel="preload"
          href={page === "isSignIn" ? "/auth/signup" : "/auth/signin"}
        >
          {page === "isSignIn" ? "Sign Up now" : "Sign In"}
        </Link>{" "}
      </div>

      {/* <Divider >Or</Divider> */}
    </div>
  );
}
