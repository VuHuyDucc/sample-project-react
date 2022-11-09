import React, { forwardRef } from "react";

const Sidebar = forwardRef(({ ref }) => {
  return (
    <div
      class="fixed top-0 right-0 h-[100vh] bg-blue-700 z-[100] py-5 duration-300 min-w-[320px] text-white translate-x-full"
      ref={ref}
    >
      <div class="flex items-center justify-between px-4 mb-5">
        <span class="text-xl font-bold"> GoldenBees </span>
        <button class="cursor-pointer" id="btn-close-sidebar">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="w-full mt-6">
        <div class="flex items-center justify-between">
          <span class="flex items-center justify-center w-10 h-10 text-lg font-bold text-blue-600 bg-white">
            10
          </span>
          <span class="block pr-6 mb-1 text-xl text-right opacity-80">
            Sản phẩm
          </span>
        </div>
        <ul class="flex flex-col w-full">
          <li class="w-full duration-300 bg-blue-400 bg-opacity-0 hover:bg-opacity-30">
            <div class="flex items-center gap-3 py-2 px-7">
              <a
                href="./admin-product.html"
                class="block w-full text-lg text-right"
              >
                Thêm sản phẩm
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </li>
          <li class="w-full duration-300 bg-blue-400 bg-opacity-0 hover:bg-opacity-30">
            <div class="flex items-center gap-3 py-2 px-7">
              <a href="#" class="block w-full text-lg text-right">
                Cập nhật sản phẩm
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          </li>
          <li class="w-full duration-300 bg-blue-400 bg-opacity-0 hover:bg-opacity-30">
            <div class="flex items-center gap-3 py-2 px-7">
              <a href="#" class="block w-full text-lg text-right">
                Xóa sản phẩm
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>

      <div class="w-full mt-6">
        <div class="flex items-center justify-between">
          <span class="flex items-center justify-center w-10 h-10 text-lg font-bold text-blue-600 bg-white">
            10
          </span>
          <span class="block pr-6 mb-1 text-xl text-right opacity-80">
            User
          </span>
        </div>
        <ul class="flex flex-col w-full">
          <li class="w-full duration-300 bg-blue-400 bg-opacity-0 hover:bg-opacity-30">
            <div class="flex items-center gap-3 py-2 px-7">
              <a href="#" class="block w-full text-lg text-right">
                Thêm user{" "}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </li>
          <li class="w-full duration-300 bg-blue-400 bg-opacity-0 hover:bg-opacity-30">
            <div class="flex items-center gap-3 py-2 px-7">
              <a href="#" class="block w-full text-lg text-right">
                Cập nhật user
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          </li>
          <li class="w-full duration-300 bg-blue-400 bg-opacity-0 hover:bg-opacity-30">
            <div class="flex items-center gap-3 py-2 px-7">
              <a href="#" class="block w-full text-lg text-right">
                Xóa user{" "}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full mt-6">
        <div class="flex items-center justify-between">
          <span class="flex items-center justify-center w-10 h-10 text-lg font-bold text-blue-600 bg-white">
            10
          </span>
          <span class="block pr-6 mb-1 text-xl text-right opacity-80">
            Danh mục
          </span>
        </div>
        <ul class="flex flex-col w-full">
          <li class="w-full duration-300 bg-blue-400 bg-opacity-0 hover:bg-opacity-30">
            <div class="flex items-center gap-3 py-2 px-7">
              <a
                href="./admin-category.html"
                class="block w-full text-lg text-right"
              >
                Thêm danh mục
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </li>
          <li class="w-full duration-300 bg-blue-400 bg-opacity-0 hover:bg-opacity-30">
            <div class="flex items-center gap-3 py-2 px-7">
              <a href="#" class="block w-full text-lg text-right">
                Cập nhật danh mục
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          </li>
          <li class="w-full duration-300 bg-blue-400 bg-opacity-0 hover:bg-opacity-30">
            <div class="flex items-center gap-3 py-2 px-7">
              <a href="#" class="block w-full text-lg text-right">
                Xóa danh mục
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;
