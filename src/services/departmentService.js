import api from "@/api/axiosInstance"; 
// import api from "../api/axiosInstance"; 

export const getDepartments = async () => {
  try {
    const response = await api.get("/departments"); // Llama a la API
    return response.data;
  } catch (error) {
    console.error("Error al obtener departamentos:", error);
    throw error;
  }
};