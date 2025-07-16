"use client";

import { LockClosedIcon } from "@heroicons/react/24/solid";
import InputField from "../../../components/reusableFields/InputField";
import ErrorMessage from "../../../components/reusableFields/ErrorMessage";
import { useForm } from "react-hook-form";
import { emailValidation, passwordValidation } from "../../../helpers/validation";
import { useState } from "react";
import Link from "next/link";
import useHandleLogin from "../../../hooks/useHandleLogin";

const PhysicianLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { handleLoginSubmit, isLoading } = useHandleLogin();

  const [animateLock, setAnimateLock] = useState(false);

  const triggerLockAnimation = () => {
    setAnimateLock(true);
    setTimeout(() => setAnimateLock(false), 800);
  };

  const onSubmit = async (data) => {
    handleLoginSubmit(data, 'physician', reset);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl space-y-6"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center flex items-center justify-center gap-2">
        Physician Login
        <LockClosedIcon
          className={`h-6 w-6 text-gray-500 transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:text-[#007f3b] ${
            animateLock ? "animate-bounce" : ""
          }`}
        />
      </h2>

      <div>
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", emailValidation)}
        />
        <ErrorMessage message={errors.email?.message} />
      </div>

      <div>
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", passwordValidation)}
        />
        <ErrorMessage message={errors.password?.message} />
      </div>

      <div className="text-right">
        <Link
          href="/auth/forgotpassword/physician_login"
          className="text-sm text-blue-500 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        onClick={triggerLockAnimation} 
        type="submit"
        className={`w-full py-2 mt-2 text-white rounded-md hover:bg-yellow-300 hover:text-black active:scale-95 active:ring-2 active:ring-yellow-400 transition transform duration-150 ${
          isLoading ? 'bg-red-500' : 'bg-[#007f3b]'
        }`}
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>

      <p className="mt-4 text-center text-gray-600 text-sm">
        Don't have an account?{" "}
        <Link
          prefetch={true}
          href="/auth/physician_signup"
          className="text-[#007f3b] hover:text-yellow-300 font-semibold"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default PhysicianLogin;
