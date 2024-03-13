import SigninForm from "@/app/components/SigninForm";
import Link from "next/link";
const SignInPage = ({ searchParams }) => {
  console.log("search Params", searchParams);
  return (
    <div className="flex items-center justify-center flex-col">
      <SigninForm callbackUrl={searchParams.callbackUrl} />
      <Link href={"/auth/forgotPassword"}> Forgot Password? </Link>
    </div>
  );
};

export default SignInPage;
