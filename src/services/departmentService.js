import api from "@/api/axiosInstance"; 

/**
 * Obtiene la lista de departamentos desde el backend.
 * @returns {Promise<Object[]>} - Un array de objetos con los datos de los departamentos.
 * @throws {Error} - Lanza un error si la petición falla.
 */
export const getDepartments = async () => {
  try {
    // Realizar la solicitud GET a la API para obtener los departamentos
    const response = await api.get("/departments"); 

    // Retornar los datos obtenidos
    return response.data;
  } catch (error) {
    console.error("❌ Error al obtener los departamentos:", error);
    throw error; // Relanzar el error para que pueda ser manejado externamente
  }
};
