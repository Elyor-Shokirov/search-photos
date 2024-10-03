import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine, RiUser2Line, RiUser3Line } from "react-icons/ri";
import { Form, Link } from "react-router-dom";
import FormInput from "./FormInput";

function RegisterContainer({ forBtnGoogle }) {
  return (
    <Form method="post">
      <div className="flex flex-col gap-4">
        <FormInput
          login
          type="text"
          placeholder="First name"
          name="firs_name"
          icon={<RiUser3Line />}
        />
        <FormInput
          login
          type="text"
          placeholder="Last Name"
          name="last_name"
          icon={<RiUser2Line />}
        />
        <FormInput
          login
          type="text"
          placeholder="Email"
          name="email"
          icon={<HiOutlineMail />}
        />
        <FormInput
          login
          type="text"
          placeholder="Password"
          name="password"
          icon={<RiLockPasswordLine />}
        />
        <FormInput
          login
          type="text"
          placeholder="Confirm password"
          name="confirm_password"
          icon={<RiLockPasswordLine />}
        />
      </div>
      <div className="mt-4 flex justify-end"></div>
      <div className="mt-5 flex justify-center">
        <button
          className="btn mx-auto h-[38px] w-full truncate whitespace-nowrap rounded-full bg-brandColor text-sm font-semibold text-white md:w-[200px]"
          type="submit"
        >
          Register
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <hr className="mr-2 w-full" /> <p className="text-gray-400">or</p>{" "}
        <hr className="ml-2 w-full" />
      </div>
      <div className="mt-3 flex justify-center">
        <button
          type="button"
          onClick={forBtnGoogle}
          className="btn w-full rounded-full md:w-[200px]"
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
          You have an account
          <Link to="/login" className="ml-1 text-blue-600 underline">
            Sign In
          </Link>
        </p>
      </div>
    </Form>
  );
}

export default RegisterContainer;
