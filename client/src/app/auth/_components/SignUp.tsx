"use client";

import { Checkboxes } from "@/components/Custom/Checkbox/Checkbox";
import { CustomSelect } from "@/components/Custom/Select/Select";
import { CustomTextfield } from "@/components/Custom/Textfield/Textfield";
import { CitiesOption, Day, Month } from "@/constants";
import { useAuth } from "@/hooks";
import { FormikValue, SignIn, SignUp } from "@/models";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as React from "react";
import * as Yup from "yup";

export interface ISignUpProps {}

export function SignUp(props: ISignUpProps) {
  const { signin } = useAuth();

  const initialValues: SignUp = {
    username: "",
    password: "",
    birth: "",
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

            <div className="form_date">
              <Field
                component={CustomSelect}
                label="Day"
                handleChange={handleChange}
                options={Day}
              />

              <Field
                component={CustomSelect}
                label="Month"
                handleChange={handleChange}
                options={Month}
              />

              <Field
                component={CustomSelect}
                label="Year"
                handleChange={handleChange}
                options={CitiesOption}
              />
            </div>

            <div className="form_button">
              <button type="submit" className="form_button">
                Sign Up
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
