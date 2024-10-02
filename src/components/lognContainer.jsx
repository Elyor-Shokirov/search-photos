import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Form, Link } from "react-router-dom";
import FormInput from "./FormInput";

function LoginContainer() {
  return (
    <Form method="post">
      <div className="flex flex-col gap-4">
        <FormInput
          login
          type="text"
          placeholder="Email"
          name="email"
          icon={<MdOutlineEmail />}
        />
        <FormInput
          login
          type="text"
          placeholder="Password"
          name="password"
          icon={<RiLockPasswordLine />}
        />
      </div>
      <div className="flex justify-end mt-4">
        <Link to="/forgotpassword">
          <p className="text-xs text-gray-400">forgot password?</p>
        </Link>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className=" btn bg-brandColor h-[38px] rounded-full w-full md:w-[200px]  text-white text-sm font-semibold whitespace-nowrap truncate mx-auto"
          type="submit">
          Login
        </button>
      </div>
      <div className="flex justify-between items-center mt-4">
        <hr className=" w-full mr-2" /> <p className="text-gray-400">or</p>{" "}
        <hr className="w-full ml-2" />
      </div>
      <div className="flex justify-center mt-3">
        <button className="btn w-full md:w-[200px] rounded-full">
          <img
            src="/public/img/google-logo.png"
            alt="Google LOGO"
            className="w-[10%]"
          />
          Sign in with Google
        </button>
      </div>
      <div>
        <p className="flex justify-end mt-3">
          Don't have an account
          <Link to="/register" className="ml-1 underline text-blue-600">
            Register here
          </Link>
        </p>
      </div>
    </Form>
  );
}

export default LoginContainer;
