'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function Login() {
  const [animateLock, setAnimateLock] = useState(false);

  const handleContinueClick = () => {
    setAnimateLock(true);
    setTimeout(() => setAnimateLock(false), 500);
  };

  return (
    <>
      <section className="relative w-full min-h-screen bg-[#f0f4f5] flex items-center justify-center px-4 py-5 overflow-hidden">
        <div className="hidden md:block z-10">
         <img
  src="/assets/images/doctor_3.webp"
  alt=""
  aria-hidden="true"
  className="absolute top-8 left-6 w-[20%] h-[20%] rounded-full object-cover shadow-lg ring-2 ring-white animate-floating"
/>
<img
  src="/assets/images/doc_4.jpg"
  alt=""
  aria-hidden="true"
  className="absolute bottom-8 right-10 w-[20%] h-[20%] rounded-full object-cover shadow-lg ring-2 ring-white animate-floating delay-200"
/>
<img
  src="/assets/images/doc_2.jpg"
  alt=""
  aria-hidden="true"
  className="absolute bottom-[-28px] left-10 transform -translate-y-1/2 w-[20%] h-[20%] rounded-full object-cover shadow ring-2 ring-white animate-floating delay-300"
/>
<img
  src="/assets/images/download.jpg"
  alt=""
  aria-hidden="true"
  className="absolute top-[-25px] right-10 transform translate-y-1/2 w-[20%] h-[20%] rounded-full object-cover shadow ring-2 ring-white animate-floating delay-500"
/>

        </div>

        {/* Login Box */}
        <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden z-20">
          {/* Left Image */}
          <div
            className="relative w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none 
                       transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            style={{
              backgroundImage:
                "url('https://assets.nhs.uk/nhsuk-cms/images/test5_4nG3bKJ.width-1000.png')",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white drop-shadow-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 0a6 6 0 1112 0v2H6v-2zM12 11V7a4 4 0 10-8 0v4"
                />
              </svg>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              Login
              <LockClosedIcon
                className={`h-6 w-6 text-gray-500 transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:text-[#007f3b] ${
                  animateLock ? 'animate-bounce' : ''
                }`}
              />
            </h2>

            <form>
              <div className="mb-4">
                <label className="block mb-1 text-gray-600">Username</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-2">
                <label className="block mb-1 text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="text-right mb-6">
                <Link
                  prefetch={true}
                  href="/auth/forgotpassword/login"
                  className="text-[#007f3b] hover:text-yellow-300 font-semibold text-sm"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                onClick={handleContinueClick}
                type="button"
                className="w-full py-2 bg-[#007f3b] text-white rounded-md hover:bg-yellow-300 hover:text-black active:scale-95 active:ring-2 active:ring-yellow-400 transition transform duration-150"
              >
                Continue
              </button>

              <p className="mt-4 text-center text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link
                  prefetch={true}
                  href="/signup"
                  className="text-[#007f3b] hover:text-yellow-300 font-semibold"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
