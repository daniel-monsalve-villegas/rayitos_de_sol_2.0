import api from '@/api/axiosInstance'

export const getDashboardClient = async () => {
  try {
    const email = localStorage.getItem('userEmail')

    if (!email) {
      throw new Error('No se encontró un email en localStorage')
    }

    const url = `/client/email/${encodeURIComponent(email)}`

    const response = await api.get(url)
    console.log("📄 Datos del servidor:", response.data);
    return response.data

  } catch (error) {
    console.error('❌ Error al obtener cliente:', error)
    throw error
  }
}
