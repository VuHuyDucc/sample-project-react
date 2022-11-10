import React from "react";
import IconPen from "../../../components/icon/IconPen";
import IconTrash from "../../../components/icon/IconTrash";

const CategoryItem = () => {
  return (
    <div className="flex">
      <div className="overflow-hidden basis-[40%] flex-shrink-0 aspect-square">
        <img
          src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/193751762_10101850943282286_7870343905562059893_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QAjLK0ES7h0AX_0Y6Bq&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfCcOtWhefuySEHpavBZO__4Uxs9yHI2ZqTVjmrxpWwHoA&oe=6393457A"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 bg-white shadow">
        <div className="px-3 overflow-hidden py-2 flex flex-col h-full">
          <p className="overflow-hidden text-ellipsis capitalize text-xl mb-2 whitespace-nowrap">
            name
          </p>
          <p className="text-zinc-700 font-medium">Tổng sản phẩm: 30</p>
          <div className="mt-auto flex items-center gap-3 text-white font-bold">
            <button className="w-10 h-10 bg-blue-500 cursor-pointer rounded flex items-center justify-center duration-300 hover:bg-blue-400">
              <IconPen></IconPen>
            </button>
            <button className="w-10 h-10 bg-red-500 cursor-pointer rounded flex items-center justify-center duration-300 hover:bg-red-400">
              <IconTrash></IconTrash>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
