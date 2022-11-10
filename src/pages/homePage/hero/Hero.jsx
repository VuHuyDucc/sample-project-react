import React from "react";
import { db } from "../../../configs/firebase-config";
import useFetchListData from "../../../hooks/useFetchListData";
import HeroShowInfor from "./HeroShowInfor";

const Hero = () => {
  const [categories] = useFetchListData(db, "categories");
  const [products] = useFetchListData(db, "products");
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative w-full aspect-video">
            <div className="overflow-hidden w-full h-full">
              <img
                src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/314354639_6140071692709338_3024193746524369767_n.jpg?stp=dst-jpg_s600x600&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ss4m2TECOOMAX9v7DZ6&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBw-NeiXYImgAUXsIb09r_nZFLDBqWh9MtRLfoBlvfe0Q&oe=63701E84"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <span className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20"></span>

            <div className="absolute bottom-4 left-6 text-white z-30">
              <p className="mb-3 rounded bg-white bg-opacity-30 px-3 py-2 text-sm font-bold duration-300 hover:bg-opacity-40 cursor-pointer">
                Categories
              </p>
              <h1 className="text-3xl mb-1">Name</h1>
              <span className="text-lg text-gray-400">$300</span>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <HeroShowInfor
              color="#6366f1"
              title="Quản lý danh mục"
              total={categories.length}
              to="/categories"
            />
            <HeroShowInfor
              color="#d946ef"
              title="Quản lý sản phẩm"
              total={products.length}
              to="/products"
            />
            <HeroShowInfor
              color="#f43f5e"
              title="Quản lý người dùng"
              total="25"
              to="/users"
            />
            <HeroShowInfor
              color="#06b6d4"
              title="Quản lý đơn hàng"
              total="30"
              to="/bills"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
