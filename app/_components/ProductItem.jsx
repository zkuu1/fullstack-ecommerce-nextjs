import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
    return (
        <div className=" p-2 md:p-6 flex flex-col items-center justify-center gap-5 border rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
            {product.images?.length > 0 ? (
                <Image 
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${product.images[0].url}`} 
                    width={150}
                    height={100}
                    alt={product.name || "Product Image"}
                />
                
            ) : (
                <p>No Image Available</p>
            )}
           <h2>{product.name}</h2>
           <h2>{product.description}</h2>
           <h2>{product.mrp}</h2>
           <Button variant="outline" className="hover:bg-blue-400"> Add To Chart</Button>
        </div>
    );
};

export default ProductItem;
