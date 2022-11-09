import React from "react";
import IconBar from "../icon/IconBar";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full py-3 bg-white border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="admin.html" className="text-2xl font-bold text-slate-900">
            GoldBees
          </a>
          <div className="flex items-center">
            <div className="relative p-2 ml-10 bg-gray-300 rounded-full cursor-pointer overf low-hidden group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 duration-300 group-hover:text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full translate-x-1/4"></div>
            </div>

            <button
              id="btn-sidebar"
              className="ml-6 cursor-pointer text-slate-700"
            >
              <IconBar></IconBar>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
