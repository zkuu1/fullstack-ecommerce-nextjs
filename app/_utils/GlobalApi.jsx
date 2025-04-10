import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosClient = axios.create({
  baseURL: `${BASE_URL}/api`, // Menggunakan BASE_URL dari .env
  headers: {
    "Content-Type": "application/json",
  },
});

const getCategory = async () => {
  try {
    const response = await axiosClient.get("/categories?populate=*");
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getSliders =  async () => {
  try {
 const response =  await axiosClient.get("/sliders?populate=*");
 console.log("API Response:", response.data);
 return response.data;
} catch (error) {
 throw error;
}
};

const getAllProducts = async () => {
  try {
    const response = await axiosClient.get("/products?populate=*");
    console.log("API Response:", response.data);
    return response.data;  
  } catch (error) {
    throw error;
  }
};



export default {
  getCategory,
  getSliders,
  getAllProducts
};
