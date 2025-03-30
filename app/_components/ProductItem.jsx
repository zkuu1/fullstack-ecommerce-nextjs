import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
    return (
        <div className="p-4 md:p-6 flex flex-col items-center justify-center gap-4 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full max-w-xs md:max-w-md mx-auto bg-white">
            {product.images?.length > 0 ? (
                <Image 
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${product.images[0].url}`} 
                    width={500}
                    height={200}
                    alt={product.name || "Product Image"}
                    className="h-[180px] w-[180px] md:h-[200px] md:w-[200px] object-contain"
                />
            ) : (
                <p>No Image Available</p>
            )}
            
            <h2 className="font-bold text-lg md:text-2xl text-center">{product.name}</h2>
            
            <p className="text-sm md:text-base text-gray-600 text-center max-w-xs md:max-w-md">
                {product.description}
            </p>

            <div className="flex gap-3 items-center">
                {/* Hanya tampilkan MRP jika ada */}
                {product.mrp && (
                    <h2 className="font-bold line-through text-gray-500 text-sm md:text-base">
                        Rp.{product.mrp}
                    </h2>
                )}
                
                {product.sellingPrice && (
                    <h2 className="font-bold text-blue-600 text-base md:text-lg">
                        Rp.{product.sellingPrice}
                    </h2>
                )}
            </div>
            
            <Button variant="outline" className="hover:bg-blue-600 text-blue-400 w-full md:w-auto"> 
                Add To Cart
            </Button>
        </div>
    );
};

export default ProductItem;
