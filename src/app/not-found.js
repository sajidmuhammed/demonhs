'use client';
import Link from "next/link";
import { useState } from "react";
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function NotFound() {
  const [animateLock, setAnimateLock] = useState(false);

  const handleContinueClick = () => {
    setAnimateLock(true);
    setTimeout(() => setAnimateLock(false), 500);
  };

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-[url('https://assets.nhs.uk/nhsuk-cms/images/test5_4nG3bKJ.width-1000.png')] flex items-center justify-center px-4 py-10"
    >
      <div className="bg-[#f0f4f5] bg-opacity-90 rounded-2xl shadow-lg w-full max-w-xl p-8 md:p-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <LockClosedIcon
          className={`mx-auto mb-6 h-12 w-12 text-gray-500 transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:text-[#007f3b] ${
            animateLock ? 'animate-bounce' : ''
          }`}
        />
        <button
          onClick={handleContinueClick}
          className="w-full md:w-1/2 py-2 bg-[#007f3b] text-white rounded-md hover:bg-yellow-300 hover:text-black active:scale-95 active:ring-2 active:ring-yellow-400 transition transform duration-150"
        >
          Go to Homepage
        </button>
        <p className="mt-6 text-sm text-gray-600">
          Or{' '}
          <Link
            href="/login"
            className="text-[#007f3b] underline transition duration-200 hover:no-underline hover:text-yellow-300"
          >
            try logging in again
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
