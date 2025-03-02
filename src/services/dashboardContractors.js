import api from '@/api/axiosInstance'

/**
 * Obtiene la información del contratista a partir de su email almacenado en localStorage.
 * @returns {Promise<Object>} - Datos del contratista obtenidos desde el backend.
 * @throws {Error} - Si no hay email en localStorage o si la petición falla.
 */
export const getDashBoardContractor = async () => {
  try {
    // Obtener el email del usuario desde localStorage
    const email = localStorage.getItem('userEmail')

    // Verificar si el email está disponible
    if (!email) {
      throw new Error('No se encontró un email en localStorage')
    }

    // Realizar la solicitud al backend con el email codificado
    const response = await api.get(`/contractor/email/${encodeURIComponent(email)}`)

    // Retornar los datos obtenidos
    return response.data
  } catch (error) {
    console.error(error)
    throw error // Relanzar el error para manejarlo en otro lugar
  }
}
