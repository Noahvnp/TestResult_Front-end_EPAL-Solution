import React from "react";
import { MdNavigateNext } from "react-icons/md";

const CategoryCard = ({ data }) => {
  return (
    <div className="grid grid-cols-4 place-items-center gap-10">
      {data.map((category) => (
        <div key={category.id}>
          <div className="relative">
            <img
              src={category.img}
              alt=""
              className="h-[357px] w-[268px] rounded-md object-cover brightness-75"
            />
            <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-3 text-center text-inkLighter">
              <span className="text-2xl font-bold">{category.title}</span>
              <button className="flex items-center justify-center rounded-3xl border border-inkLighter px-4 py-1 text-sm font-bold">
                Xem ngay <MdNavigateNext size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
