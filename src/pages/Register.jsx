import React from "react";
import { useActionData } from "react-router-dom";
import RegisterContainer from "../components/registerContainer";

export const action = async ({ request }) => {
  let registerFormData = await request.formData();
  let formProps = Object.fromEntries(registerFormData);
  return formProps;
};

function Register() {
  const registerActionData = useActionData();
  console.log(registerActionData);

  return (
    <>
      <div className=" bg-loginPageBg bg-cover 	">
        <div className="flex  justify-center items-center h-screen gap-10 flex-col p-[20px] md:px-3">
          <div className="card w-full md:w-[500px] shadow-2xl z-90 bg-white">
            <div className="card-body">
              <div className="flex justify-center">
                <h2 className="card-title text-center mt-2">
                  Create an account
                </h2>
              </div>
              <RegisterContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
