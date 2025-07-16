'use client'

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { IoPersonCircle } from "react-icons/io5";
import Link from "next/link";
import { useAuthUser } from '../common/AuthContext';
import useLogoutUser from "../../hooks/useLogout";
import LoginLink from "../common/LoginLink";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);
  const {user} = useAuthUser();
  
  const { logout, isLogoutLoading } = useLogoutUser();

  const toggleMenu = () => {
    if (menuOpen) {
      setAnimatingOut(true);
      setTimeout(() => {
        setShowMenu(false);
        setAnimatingOut(false);
        setMenuOpen(false);
      }, 500);
    } else {
      setShowMenu(true);
      setMenuOpen(true);
    }
  };

  return (
    <header className="w-full bg-[#005eb8] text-white">
      <div className="px-4 md:px-12 lg:px-20 xl:px-40 pb-3">
        <div className="flex justify-between pt-5 pb-5 items-center border-b border-gray-400">
          <div
            className="bg-white w-[70px] h-[45px] text-center flex items-center justify-center
                      hover:bg-amber-300 text-blue-800 hover:text-white
                      transform transition duration-300 ease-in-out
                      hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <Link prefetch={true} href={'/'} className="text-[10px] md:text-[15px] tracking-widest">NHS</Link>
          </div>
          {!user ? (
              <>
                <LoginLink href="/auth/physician_login" label="Physician Login" />
                <LoginLink href="/auth/patient_login" label="Patient Login" />
              </>
            ) : (
              <>
                {user?.userType === 'physician' ? (
                  <LoginLink href="/doctor_dashboard" label="Physician Dashboard" />
                ) : (
                  <LoginLink href="/patient_dashboard" label="Patient Dashboard" />
                )}
              </>
          )}


          <div className="hidden md:flex items-center gap-6">
            <div className="relative w-[250px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white pl-4 pr-14 py-2 border border-gray-300 rounded-md 
                shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-black cursor-pointer"
              />
              <button
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1.5 rounded-md hover:bg-gray-300 transition cursor-pointer"
              >
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
              </button>
            </div>

               <div className="flex items-center">
                              {user ? (
                                <>
                  <span className={`text-lg mr-2 font-semibold ${
                    user.userType === 'patient' || user.userType === 'physician' ? 'text-yellow-200' : 'text-green-200'
                  }`}>
                    {user.fullName}
                  </span>
                  <button disabled={isLogoutLoading} onClick={logout} className="text-white mr-2 font-semibold">
                    {isLogoutLoading ? 'Logging out..' : 'Logout'}</button>
                  </>
                ) : (
                  <Link
                    prefetch={true}
                    href="/auth/login"
                    className="text-white text-lg mr-2 underline hover:text-amber-300 transition duration-200 hover:scale-105"
                  >
                    My account
                  </Link>
                )}

              <Link prefetch={true} href="/auth/signup" className="group">
                <IoPersonCircle className="bg-white text-blue-800 w-7 h-7 rounded-full transition-transform duration-200 group-hover:scale-110 group-hover:text-amber-400" />
              </Link>
            </div>
          </div>

          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex justify-center gap-10 font-medium text-[16px] border-b border-gray-400 pb-3 mb-3">
          {[
            "Health A to Z",
            "NHS services",
            "Live Well",
            "Mental health",
            "Care and support",
            "Pregnancy",
          ].map((item, idx) => (
            <Link
              key={idx}
              href="#"
              className="underline transition-all duration-200 ease-in-out hover:no-underline hover:text-yellow-300 hover:scale-105"
            >
              {item}
            </Link>
          ))}
        </nav>

        {showMenu && (
          <nav
            className={`md:hidden flex flex-col gap-4 pb-4 px-2 ${
              animatingOut ? "fade-slide-up" : "fade-slide-down"
            }`}
          >
            {[
              "Health A to Z",
              "NHS services",
              "Live Well",
              "Mental health",
              "Care and support",
              "Pregnancy",
            ].map((item, idx) => (
              <Link
                key={idx}
                href="#"
                className="underline py-2 text-center text-white transition duration-200 hover:text-yellow-300 hover:scale-105"
              >
                {item}
              </Link>
            ))}

            <div className="relative w-full mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white pl-4 pr-14 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-black"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1.5 rounded-md hover:bg-gray-300 transition duration-200 hover:scale-105"
              >
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="flex items-center justify-center mt-4 group transition duration-200 hover:scale-105">
                          {user ? (
                            <>
                  <span className={`text-lg mr-2 font-semibold ${
                    user.userType === 'patient' || user.userType === 'physician' ? 'text-yellow-200' : 'text-green-200'
                  }`}>
                    {user.fullName}
                  </span>
                  <button onClick={logout} className="text-white mr-2 font-semibold">Logout</button>
                  </>
                ) : (
                  <Link
                    prefetch={true}
                    href="/auth/login"
                    className="text-white text-lg mr-2 underline hover:text-amber-300 transition duration-200 hover:scale-105"
                  >
                    My account
                  </Link>
                )}
              <Link href="/signup" className="group">
                <IoPersonCircle className="bg-white text-blue-800 w-7 h-7 rounded-full transition duration-200 group-hover:scale-110 group-hover:text-amber-400" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
