import Image from "next/image";
import React from "react";
import { CategoryCardType } from "../types/type";

const CategoryCard = ({ imagesrc, title }:CategoryCardType) => {
  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <div className="relative w-full h-full">
        <Image src={imagesrc} fill alt="category image" className="object-cover"/>
      </div>
      <p className="text-center underline">{title}</p>
    </div>
  );
};

export default CategoryCard;
