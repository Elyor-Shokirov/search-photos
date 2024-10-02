import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine, RiUser2Line, RiUser3Line } from "react-icons/ri";
import { Form, Link } from "react-router-dom";
import FormInput from "./FormInput";

function RegisterContainer() {
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
      <div className="flex justify-end mt-4"></div>
      <div className="flex justify-center mt-5">
        <button
          className=" btn bg-brandColor h-[38px] rounded-full w-full md:w-[200px]  text-white text-sm font-semibold whitespace-nowrap truncate mx-auto"
          type="submit">
          Register
        </button>
      </div>
      <div className="flex justify-between items-center mt-4">
        <hr className=" w-full mr-2" /> <p className="text-gray-400">or</p>{" "}
        <hr className="w-full ml-2" />
      </div>
      <div className="flex justify-center mt-3">
        <button className="btn w-full md:w-[200px] rounded-full">
          <img
            src="/img/google-logo.png"
            alt="Google LOGO"
            className="w-[10%]"
          />
          Sign in with Google
        </button>
      </div>
      <div>
        <p className="flex justify-end mt-3">
          You have an account
          <Link to="/login" className="ml-1 underline text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
    </Form>
  );
}

export default RegisterContainer;
