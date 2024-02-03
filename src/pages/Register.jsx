import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

export default function RegisterPage() {
  return (
    <>
      <AuthLayout
        tittle="Sign Up to our platform
"
      >
        <FormRegister />
      </AuthLayout>
    </>
  );
}
