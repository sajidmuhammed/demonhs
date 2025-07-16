'use client';

import { useState } from 'react';
import Link from 'next/link';

const ForgotPassword = ({ forgotpasswordtype }) => {
    
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Forgot your password?
        </h1>

        {submitted ? (
          <p className="text-green-600 text-center">
            If an account with that email exists, we've sent a password reset link.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 mb-2">Enter your email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#007f3b] text-white rounded-md hover:bg-yellow-300 hover:text-black transition duration-150"
            >
              Send reset link
            </button>
          </form>
        )}

        <p className="mt-6 text-sm text-center text-gray-600">
          Remembered your password?{' '}
          <Link
            href={`/auth/${forgotpasswordtype}`}
            className="text-[#007f3b] hover:text-yellow-300 font-semibold"
            aria-label="Return to login page"
            >
            Go back to login
            </Link>
        </p>
      </div>
  );
}

export default ForgotPassword;