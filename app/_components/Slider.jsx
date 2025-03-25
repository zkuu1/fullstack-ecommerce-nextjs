"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GlobalApi from "../_utils/GlobalApi";

function Slider() {
  const [sliderList, setSliderList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSliderList = async () => {
    try {
      const response = await GlobalApi.getSliders();
      console.log("Sliders List:", response);

      setSliderList(response.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching sliders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSliderList();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px] max-w-screen-lg mx-auto">
        <div className="w-[1000px] h-[400px] bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <Carousel>
        <CarouselContent>
          {sliderList.map((slider, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              {slider.icon?.[0]?.url ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${slider.icon[0].url}`}
                  alt={slider.title || "Slider Image"}
                  width={1000}
                  height={400}
                  priority
                  className="rounded-lg object-cover"
                />
              ) : (
                <p className="text-center">No Image Available</p>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Slider;
