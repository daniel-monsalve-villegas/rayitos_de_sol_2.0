import api from '@/api/axiosInstance'

export const getDashBoardContractor = async () => {
  try {
    const email = localStorage.getItem('userEmail')

    if (!email) {
      throw new Error('No se encontró un email en localStorage')
    }

    const response = await api.get(`/contractor/email/${encodeURIComponent(email)}`)

    return response.data
  } catch (error) {
    console.error('❌ Error al obtener contratista:', error)
    throw error
  }
}
