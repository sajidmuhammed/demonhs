import Link from "next/link";

export default function Signup() {
  return (
    <section className="w-full min-h-screen bg-[#f0f4f5] flex items-center justify-center px-4 py-5">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">

        <div
          className="w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none 
                     transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1"
          style={{
            backgroundImage: "url('https://assets.nhs.uk/nhsuk-cms/images/test5_4nG3bKJ.width-1000.png')",
          }}
        >
        </div>

        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center lg:text-left">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-1 text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="button"
              className="w-full py-2 bg-[#007f3b] text-white rounded-md hover:bg-yellow-300 hover:text-black active:scale-95 active:ring-2 active:ring-yellow-400 transition transform duration-150"
            >
              Sign Up
            </button>

            <p className="mt-4 text-center text-gray-600 text-sm">
              Already have an account?{' '}
              <Link prefetch={true} href="/login" className="text-[#007f3b] hover:text-yellow-300 font-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
