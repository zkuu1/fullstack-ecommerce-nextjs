import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

function Slider() {

    const Slider = () => {
      const [sliderList, setSliderList] = useState([]);
    }

    return(
        <Carousel>
        <CarouselContent>
            {sliderList.map((slider, index) => (
                  <CarouselItem key={slider.attributes.image.data.attributes.url}
                  width={1000}
                    height={400}
                  ></CarouselItem>
            ))}
        
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
    )
}

export default Slider;