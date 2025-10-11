import Image from "next/image";
import React from "react";
import { CategoryCardType } from "../types/type";

const CategoryCard = ({ image, name }:CategoryCardType) => {
  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <div className="relative w-full h-full">
        <Image src={image} fill alt="category image" className="object-cover"/>
      </div>
      <p className="text-center underline">{name}</p>
    </div>
  );
};

export default CategoryCard;
