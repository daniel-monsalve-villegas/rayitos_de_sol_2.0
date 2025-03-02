import api from "@/api/axiosInstance"; 

/**
 * Obtiene la lista de contratistas desde el backend.
 * @returns {Promise<Object[]>} - Un array de objetos con los datos de los contratistas.
 * @throws {Error} - Lanza un error si la petición falla.
 */
export const getContractors = async () => {
  try {
    // Realizar la solicitud GET a la API para obtener los contratistas
    const response = await api.get("/contractors"); 

    // Retornar los datos obtenidos
    return response.data;
  } catch (error) {
    console.error("❌ Error al obtener los contratistas:", error);
    throw error; // Relanzar el error para que pueda ser manejado externamente
  }
};
