import React, { useEffect } from "react";
import { useActionData } from "react-router-dom";
import RegisterContainer from "../components/registerContainer";

import { toast } from "react-toastify";
import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let registerFormData = await request.formData();
  let formProps = Object.fromEntries(registerFormData);
  if (formProps.password === formProps.confirm_password) {
    return formProps;
  } else {
    toast.warning("Password is not equal !");
    return null;
  }
};

function Register() {
  const { registerWithGoogle, registerWithEmail } = useRegister();
  const registerActionData = useActionData();

  useEffect(() => {
    if (registerActionData) {
      registerWithEmail(
        registerActionData.first_name,
        registerActionData.last_name,
        registerActionData.email,
        registerActionData.password,
      );
    }
  }, [registerActionData]);
  return (
    <>
      <div className="bg-loginPageBg bg-cover">
        <div className="flex h-screen flex-col items-center justify-center gap-10 p-[20px] md:px-3">
          <div className="z-90 card w-full bg-white shadow-2xl md:w-[500px]">
            <div className="card-body">
              <div className="flex justify-center">
                <h2 className="card-title mt-2 text-center">
                  Create an account
                </h2>
              </div>
              <RegisterContainer forBtnGoogle={registerWithGoogle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
