import React, { useState } from "react";
import { Form } from "react-router-dom";
import FormInput from "./FormInput";

function EditContainer({ user }) {
  const firtNameSplit = user.displayName.split(" ")[0];
  const lastNameSplit = user.displayName.split(" ")[1];

  return (
    <Form method="PUT">
      <div className="gap-2 md:flex">
        <label className="form-control mb-5 w-full max-w-xs">
          <div className="label">
            <span className="label-text">First Name</span>
          </div>
          <FormInput
            login
            type="text"
            placeholder="First name"
            name="first_name"
            defaultValue={firtNameSplit}

            // onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Last Name</span>
          </div>
          <FormInput
            login
            type="text"
            placeholder="Last name"
            name="last_name"
            defaultValue={lastNameSplit}
          />
        </label>
      </div>
      <div className="mt-5 gap-2 md:flex">
        <label className="form-control mb-5 w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <FormInput
            login
            type="password"
            placeholder="password"
            name="password"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Confirm Password</span>
          </div>
          <FormInput
            login
            type="password"
            placeholder="Password"
            name="confirm_password"
          />
        </label>
      </div>
      <div className="mt-5 gap-2 md:flex">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <FormInput
            login
            type="email"
            placeholder="email"
            name="email"
            defaultValue={user.email}
          />
        </label>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="btn w-full bg-brandColor text-white md:w-[200px]"
        >
          Save Info
        </button>
      </div>
    </Form>
  );
}

export default EditContainer;
