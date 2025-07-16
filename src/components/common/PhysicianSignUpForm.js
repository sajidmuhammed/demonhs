"use client";

import { LockClosedIcon } from "@heroicons/react/24/solid";
import InputField from "../reusableFields/InputField";
import {
  nameValidation,
  emailValidation,
  phoneValidation,
  dobValidation,
  experienceValidation,
  specialtyValidation,
  passwordValidation,
  confirmPasswordValidation,
  descriptionValidation,
} from "../../helpers/validation";
import ErrorMessage from "../reusableFields/ErrorMessage";
import useSignupForm from "../../hooks/useFormSignUp";
import Link from "next/link";
import useHandleSignup from "../../hooks/useHandleSignUpSubmit";

const PhysicianSignupForm = () => {

  const {
    register,
    handleSubmit,
    errors,
    watch,
    animateLock,
    triggerLockAnimation,
    reset,
    } = useSignupForm();
    const { handleSignupSubmit, isLoading } = useHandleSignup();

    const onSubmit = async (data) => {
        handleSignupSubmit(data, 'physician', reset);
    };

    const handleButtonClick = () => {
        triggerLockAnimation();
    };

    const password = watch("password");

    return (
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl space-y-6"
        >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center lg:text-left flex items-center justify-center gap-2">
            Physician Signup
            <LockClosedIcon
            className={`h-6 w-6 text-gray-500 transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:text-[#007f3b] ${
                animateLock ? "animate-bounce" : ""
            }`}
            />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
            <InputField
                type="text"
                name="fullName"
                placeholder="Full Name"
                {...register("fullName", nameValidation)}
            />
            <ErrorMessage message={errors.fullName?.message} />
            </div>

            {/* Email */}
            <div>
            <InputField
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", emailValidation)}
            />
            <ErrorMessage message={errors.email?.message} />
            </div>

            {/* Phone */}
            <div>
            <InputField
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onlyNumbers={true}
                {...register("phone", phoneValidation)}
                />
            <ErrorMessage message={errors.phone?.message} />
            </div>

            {/* Date of Birth */}
            <div>
            <InputField
                type="date"
                name="dob"
                {...register("dob", dobValidation)}
            />
            <ErrorMessage message={errors.dob?.message} />
            </div>

            {/* Experience */}
            <div>
            <InputField
                type="number"
                name="experience"
                placeholder="Years of Experience"
                {...register("experience", experienceValidation)}
            />
            <ErrorMessage message={errors.experience?.message} />
            </div>

            {/* Specialty */}
            <div>
            <InputField
                type="text"
                name="specialty"
                placeholder="Specialty"
                {...register("specialty", specialtyValidation)}
            />
            <ErrorMessage message={errors.specialty?.message} />
            </div>

            {/* Password */}
            <div>
            <InputField
                type="password"
                name="password"
                placeholder="Password"
                {...register("password", passwordValidation)}
            />
            <ErrorMessage message={errors.password?.message} />
            </div>

            {/* Confirm Password */}
            <div>
            <InputField
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                {...register("confirm_password", confirmPasswordValidation(password))}
            />
            <ErrorMessage message={errors.confirm_password?.message} />
            </div>
        </div>

        {/* Description */}
        <div>
            <textarea
            name="description"
            placeholder="Brief Description"
            {...register("description", descriptionValidation)}
            rows={4}
            className="input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            />
            <ErrorMessage message={errors.description?.message} />
        </div>

         <button
            onClick={handleButtonClick}
            type="submit"
            className={`w-full py-2 mt-2 text-white rounded-md hover:bg-yellow-300 hover:text-black active:scale-95 active:ring-2 active:ring-yellow-400 transition transform duration-150 ${
            isLoading ? 'bg-red-500' : 'bg-[#007f3b]'
            }`}
            disabled={isLoading}
        >
            {isLoading ? 'Submitting...' : 'Submit'}
        </button>
        <p className="mt-4 text-center text-gray-600 text-sm">
              Already have an account?{' '}
              <Link prefetch={true} href="/auth/physician_login" className="text-[#007f3b] hover:text-yellow-300 font-semibold">
                Login
              </Link>
        </p>
        </form>
    );
};

export default PhysicianSignupForm;
