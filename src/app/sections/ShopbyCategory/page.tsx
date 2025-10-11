"use client";

import CategoryCard from "@/app/lib/components/CategoryCard";
// import { Categorydata } from "@/app/lib/data/data";
import { CategoryCardType } from "@/app/lib/types/type";
import { apiClient } from "@/app/utils/apiClient";
import React, { useEffect, useState } from "react";

const ShopbyCategory = () => {
  const [categorydata , setCategoryData] = useState([])
  const renderCategoryCards = (item: CategoryCardType, index: number) => {
    return (
      <div key={index} className="w-1/6 h-[20vw]">
        <CategoryCard image={item.image} name={item.name} />
      </div>
    );
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await apiClient("/categories");
        console.log("categories", categories);
        setCategoryData(categories)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col gap-5 mt-20 px-20">
      <h2 className="text-center text-24">Shop by Category</h2>
      <div className=" flex w-full justify-center gap-10">
        {categorydata.map(renderCategoryCards)}
      </div>
    </div>
  );
};

export default ShopbyCategory;
