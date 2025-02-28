import api from "@/api/axiosInstance";

export const getDashBoardContractor = async () => {
  try {
    const response = await api.get("/contractor/1");
    return response.data;
  } catch (error) {
    console.error("Error al obtener departamentos:", error);
    throw error;
  }
};
