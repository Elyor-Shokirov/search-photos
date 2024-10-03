import React from "react";
import { useActionData } from "react-router-dom";
import LoginContainer from "../components/lognContainer";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let userName = formData.get("email");
  let password = formData.get("password");
  return {
    userName,
    password,
  };
};
function SignIn() {
  const loginActionData = useActionData();
  console.log(loginActionData);
  return (
    <div>
      <div className="bg-loginPageBg bg-cover">
        <div className="flex h-screen flex-col items-center justify-center gap-10 p-[20px] md:px-3">
          <div className="z-90 card w-full bg-white shadow-2xl md:w-[500px]">
            <div className="card-body">
              <div className="flex justify-center text-center">
                <img
                  src="/img/logo_photoaparat.png"
                  alt="Logo"
                  className="w-[50%]"
                />
              </div>
              <div className="flex justify-center">
                <h2 className="card-title mt-2 text-center">LOGIN</h2>
              </div>
              <LoginContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
