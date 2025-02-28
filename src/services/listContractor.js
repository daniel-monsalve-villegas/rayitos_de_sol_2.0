import api from "@/api/axiosInstance";

export const getContractors = async () => {
  try {
    const response = await api.get("/contractors"); // Llama a la API
    return response.data;
  } catch (error) {
    console.error("Error al obtener departamentos:", error);
    throw error;
  }
};
