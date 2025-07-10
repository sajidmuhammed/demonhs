
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
     className="w-full min-h-screen bg-[#f0f4f5] flex items-center justify-center px-4 py-10 bg-cover bg-no-repeat bg-center"
     style={{
            backgroundImage: "url('https://assets.nhs.uk/nhsuk-cms/images/test5_4nG3bKJ.width-1000.png')",
     }}
     >
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Forgot your password?</h1>

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
              onChange={e => setEmail(e.target.value)}
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
          <Link href="/login" className="text-[#007f3b] hover:text-yellow-300 font-semibold">
            Go back to login
          </Link>
        </p>
      </div>
    </section>
  );
}


