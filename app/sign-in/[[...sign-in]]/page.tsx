import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return <SignIn signUpFallbackRedirectUrl="/new-user" />;
};

export default SignInPage;
