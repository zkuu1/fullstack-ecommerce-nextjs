import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import Products from "./_components/Products";
import banner from "/public/assets/banner.png";
import Footer from "./_components/Footer";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategory();
  const productList = await GlobalApi.getAllProducts();

  return (
    <div className="p-10 px-5 md:px-16">
      {/* SLIDER */}
      <Slider sliderList={sliderList} />

      {/* CATEGORY LIST */}
      <CategoryList categoryList={categoryList} />

      {/* PRODUCT LIST */}
      <Products productList={productList} />

      {/* BANNER */}
      <Image className="w-full h-[400px] object-contain" src={banner} alt="banner" width={1000} height={300} />

         {/* FOOTER */}
      <Footer />
   
    </div>
  );
}
