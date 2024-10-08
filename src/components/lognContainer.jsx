import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Form, Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import FormInput from "./FormInput";

function LoginContainer() {
  const { registerWithGoogle } = useRegister();
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
      <div className="mt-4 flex justify-end">
        <Link to="/forgotpassword">
          <p className="text-xs text-gray-400">forgot password?</p>
        </Link>
      </div>
      <div className="mt-5 flex justify-center">
        <button
          className="btn mx-auto h-[38px] w-full truncate whitespace-nowrap rounded-full bg-brandColor text-sm font-semibold text-white md:w-[200px]"
          type="submit"
        >
          Login
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <hr className="mr-2 w-full" /> <p className="text-gray-400">or</p>{" "}
        <hr className="ml-2 w-full" />
      </div>
      <div className="mt-3 flex justify-center">
        <button
          className="btn w-full rounded-full md:w-[200px]"
          type="button"
          onClick={registerWithGoogle}
        >
          <img
            src="/img/google-logo.png"
            alt="Google LOGO"
            className="w-[10%]"
          />
          Sign in with Google
        </button>
      </div>
      <div>
        <p className="mt-3 flex justify-end">
          Don't have an account
          <Link to="/register" className="ml-1 text-blue-600 underline">
            Register here
          </Link>
        </p>
      </div>
    </Form>
  );
}

export default LoginContainer;
