import React from "react";

const ShowItem = () => {
  return (
    <div className="w-full relative">
      <div className="overflow-hidden aspect-square w-full mb-4">
        <img
          src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/314621336_3329057110696692_4610310723454356564_n.jpg?stp=cp6_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=CSTCIfOy7VUAX884Z1L&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAx6WeGoqtbZrOSIGWmaAcmDGZ111wIO9EFOofRC8ODLw&oe=63712937"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h3 className="font-bold text-2xl mb-1 capitalize">Title</h3>
      </div>

      <div className="absolute top-2 font-bold left-2 bg-blue-500 w-10 h-10 flex items-center justify-center text-white uppercase">
        39
      </div>
    </div>
  );
};

export default ShowItem;
