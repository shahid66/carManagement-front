import LoginForm from "@/components/modules/auth/login/LoginForm";
import { Suspense } from "react";

const page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Suspense fallback={<>Loading...</>}>

      <LoginForm />
      </Suspense>
    </div>
  );
};

export default page;
