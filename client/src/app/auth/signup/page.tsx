import { AuthForm } from "@/app/components/AuthForm/AuthForm";
import { SignUp } from "../_components/SignUp";

export default function page() {
  return (
    <AuthForm page="isSignUp" headerCate="welcome" headerTitle="to bolero">
      <SignUp />
    </AuthForm>
  );
}
