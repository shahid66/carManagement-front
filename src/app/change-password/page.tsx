import ChangePasswordForm from "@/components/modules/auth/changePassword/ChangePasswordForm";
import { Suspense } from "react";

const page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <ChangePasswordForm />
      </Suspense>
    </div>
  );
};

export default page;
