import CategoryCard from "@/app/lib/components/CategoryCard";
import { Categorydata } from "@/app/lib/data/data";
import { CategoryCardType } from "@/app/lib/types/type";
import React from "react";

const ShopbyCategory = () => {
  const renderCategoryCards = (item: CategoryCardType, index: number) => {
    return (
      <div key={index} className="w-1/6 h-[20vw]">
        <CategoryCard imagesrc={item.imagesrc} title={item.title} />
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-5 mt-20 px-20">
        <h2 className="text-center text-24">Shop by Category</h2>
        <div className=" flex w-full justify-center gap-10">{Categorydata.map(renderCategoryCards)}</div>
    </div>
  )
};

export default ShopbyCategory;
