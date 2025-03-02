import api from '@/api/axiosInstance'

/**
 * Obtiene la información del cliente a partir de su email almacenado en localStorage.
 * @returns {Promise<Object>} - Datos del cliente obtenidos desde el backend.
 * @throws {Error} - Si no hay email en localStorage o si la petición falla.
 */
export const getDashboardClient = async () => {
  try {
    // Obtener el email del usuario desde localStorage
    const email = localStorage.getItem('userEmail')

    // Verificar si el email está disponible
    if (!email) {
      throw new Error('No se encontró un email en localStorage')
    }

    // Construir la URL con el email codificado
    const url = `/client/email/${encodeURIComponent(email)}`

    // Realizar la solicitud al backend
    const response = await api.get(url)

    // Retornar los datos obtenidos
    return response.data

  } catch (error) {
    console.error('Error en getDashboardClient:', error)
    throw error // Relanzar el error para manejarlo en otro lugar
  }
}
