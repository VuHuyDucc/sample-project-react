import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const Navigation = forwardRef(({ closeSidebarBtnRef }) => {
  return (
    <header class="sticky top-0 left-0 z-50 w-full py-3 bg-white border-b border-gray-200">
      <div class="container">
        <div class="flex items-center justify-between">
          <a href="admin.html" class="text-2xl font-bold text-slate-900">
            GoldBees
          </a>

          <div className="flex items-center gap-1">
            <div class="relative p-2 ml-10 bg-gray-300 rounded-full cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 text-gray-500 duration-300 group-hover:text-gray-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <div class="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full translate-x-1/4"></div>
            </div>

            <button class="ml-6 cursor-pointer text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 pointer-events-none"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Navigation;
