import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

export default function LoginPage() {
  return (
    <>
      <AuthLayout
        tittle="Sign in to our platform
"
      >
        <FormLogin />
      </AuthLayout>
    </>
  );
}
