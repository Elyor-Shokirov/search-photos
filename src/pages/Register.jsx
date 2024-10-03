import React from "react";
import { useActionData } from "react-router-dom";
import RegisterContainer from "../components/registerContainer";

import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let registerFormData = await request.formData();
  let formProps = Object.fromEntries(registerFormData);
  return formProps;
};

function Register() {
  const { registerWithGoogle } = useRegister();
  const registerActionData = useActionData();
  console.log(registerActionData);

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
