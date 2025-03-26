import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";

export default async function Home() {

  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategory();


  return (
    <><Slider sliderList={sliderList}></Slider>
    
    <CategoryList categoryList={categoryList}></CategoryList></>
  );
}
