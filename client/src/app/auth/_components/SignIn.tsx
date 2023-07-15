"use client";

import "../../components/AuthForm/AuthForm.scss";

import * as React from "react";
import * as Yup from "yup";

import { Field, Form, Formik } from "formik";

import { CustomTextfield } from "@/components/Custom/Textfield/Textfield";
import { FormikValue, SignIn } from "@/models";
import { useAuth } from "@/hooks";
import Link from "next/link";
import { Checkboxes } from "@/components/Custom/Checkbox/Checkbox";

export interface ISignInProps {}

export function SignIn(props: ISignInProps) {
  const { signin } = useAuth();

  const initialValues: FormikValue = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required 🤧"),
    password: Yup.string().required("This field is required 🤧"),
  });

  const handleSubmit = (values: SignIn) => {
    console.log("🚀 ~ file: SignIn.tsx:28 ~ handleSubmit ~ values:", values);
    signin(values);
  };

  const handleChange = (value: string) => {
    console.log(
      "🚀 ~ file: AuthForm.tsx:19 ~ handleGetFormValue ~ value:",
      value
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      // onSubmit={(values) => signin(values)}
    >
      {(formikProps) => {
        return (
          <Form autoComplete="off" className="auth_form_wrapper">
            <Field
              component={CustomTextfield}
              hasIcons={false}
              type="text"
              width="100%"
              label="Username"
              name="username"
              placeholder="Please enter your username..."
            />

            <Field
              component={CustomTextfield}
              name="password"
              type="password"
              width="100%"
              label="Password"
              hasIcons
              placeholder="Please enter your password..."
              id="standard-adornment-password"
            />

            <div className="form_checkgroup">
              <Checkboxes
                type="checkbox"
                name="Remember Password"
                handleChange={handleChange}
                value="remember password"
                style={{
                  width: "auto",
                  fontSize: "0.8rem",
                  paddingRight: "0.5rem",
                }}
              />

              <Link rel="preload" as="style" href="/auth/forget">
                forget password
              </Link>
            </div>

            <div className="form_button">
              <button type="submit" className="form_button">
                Sign In
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
