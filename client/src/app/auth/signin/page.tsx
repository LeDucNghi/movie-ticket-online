import { AuthForm } from "@/app/components/AuthForm/AuthForm";
import { Metadata } from "next";
import { SignIn } from "@/app/auth/_components/SignIn";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function page() {
  return (
    <AuthForm page="isSignIn" headerCate="hello" headerTitle="welcome back">
      <SignIn />
    </AuthForm>
  );
}
