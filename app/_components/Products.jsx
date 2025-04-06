"use client";

import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import ProductItem from "./ProductItem";

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProductList = async () => {
        try {
            const response = await GlobalApi.getAllProducts();
            console.log("Products List:", response);

            setProductList(response.data || []); // Menyimpan data ke state
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductList();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading products...</p>;
    }

    return (
        <div className="mt-10 w-full max-w-screen mx-auto px-6 md:px-12">
            <h2 className="text-blue-custom font-bold text-2xl mb-4 text-center">
                Our Popular Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {productList.map((product, index) => (
                        <ProductItem key={index} product={product} />
                    ))}
            </div>

        </div>
    );
};

export default Products;
