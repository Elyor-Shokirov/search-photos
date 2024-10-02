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
      <div className=" bg-loginPageBg bg-cover 	">
        <div className="flex  justify-center items-center h-screen gap-10 flex-col p-[20px] md:px-3">
          <div className="card w-full md:w-[500px] shadow-2xl z-90 bg-white">
            <div className="card-body">
              <div className="text-center flex justify-center">
                <img
                  src="/img/logo_photoaparat.png"
                  alt="Logo"
                  className="w-[50%]"
                />
              </div>
              <div className="flex justify-center">
                <h2 className="card-title text-center mt-2">LOGIN</h2>
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
