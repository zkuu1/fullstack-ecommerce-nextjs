"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import GlobalApi from "../_utils/GlobalApi";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategoryList = async () => {
    try {
      const response = await GlobalApi.getCategory();
      console.log("Category List:", response);

      setCategoryList(response.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[450px] max-w-screen-lg mx-auto">
        <div className="w-full h-[450px] bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen mx-auto px-6 md:px-12 mt-5 ">
      <h2 className="text-blue-custom font-bold text-2xl mb-4 text-center">
        Shop by Category
      </h2>
      
      {/* Grid Layout untuk Menampilkan Kategori */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 p-4">
        {categoryList.length > 0 ? (
          categoryList.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4 bg-blue-100 rounded-lg shadow-md transition-transform group hover:bg-blue-400"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${category.icon?.[0]?.url}`}
                alt={category.name || "Category Image"}
                width={50}
                height={50}
                className="group-hover:scale-125 transition-all rounded-full aspect-square"
              />
              <h2 className="text-center text-base font-semibold">{category.name || "No Name"}</h2>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No categories available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
