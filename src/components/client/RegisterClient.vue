<script setup>
import { ref, onMounted } from 'vue'
import { getDepartments } from '@/services/departmentService'
import api from '@/api/axiosInstance'
import { useRouter } from 'vue-router'
const router = useRouter()
const departments = ref([])
const formData = ref({
  firstName: '',
  emailClient: '', // Se obtiene después del login con Auth0
  cityClient: '',
  phoneNumber: '',
  neighborhoodClient: '',
  installationTypeClient: null,
  lowIncome: false,
  singleParent: false,
  displaced: false,
  disabled: false,
  elderly: false,
  limitedAccessToServices: false,
  inadequateHousing: false,
  monthlyConsumptionClient: 0,
  contractorId: 1,
})

onMounted(async () => {
  try {
    departments.value = await getDepartments()
    formData.value.emailClient = localStorage.getItem('userEmail') || '' // Cargar email del usuario autenticado
  } catch (error) {
    console.error('❌ Error al obtener los departamentos:', error)
  }
})

const submitForm = async () => {
  const payload = {
    nameClient: formData.value.firstName,
    emailClient: formData.value.emailClient, // Ahora sí se envía el email
    cityClient: formData.value.cityClient, // Ahora sí se envía la ciudad
    department: formData.value.department,
    phoneClient: formData.value.phoneNumber,
    neighborhoodClient: formData.value.neighborhoodClient,
    installationTypeClient: formData.value.installationTypeClient || 'Residencial',
    monthlyConsumptionClient: formData.value.monthlyConsumptionClient || 0,
    lowIncome: formData.value.lowIncome || false,
    singleParent: formData.value.singleParent || false,
    displaced: formData.value.displaced || false,
    disabled: formData.value.disabled || false,
    elderly: formData.value.elderly || false,
    limitedAccessToServices: formData.value.limitedAccessToServices || false,
    inadequateHousing: formData.value.inadequateHousing || false,
    contractorId: 1,
  }

  console.log('📤 Enviando datos al backend:', payload)
  try {
    const response = await api.post('/client', payload)
    console.log('✅ Cliente registrado con éxito:', response.data)
    alert('Cliente registrado con éxito')
    router.push('/')
  } catch (error) {
    console.error('❌ Error al registrar cliente:', error.response?.data || error.message)
    alert('Error al registrar el cliente. Verifica los datos e intenta nuevamente.')
  }
}
</script>

<template>
  <div class="register_client_container">
    <div class="register_client_principal">
      <div class="card">
        <h1>Registro Cliente</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="firstName">Nombre</label>
            <input
              type="text"
              id="firstName"
              v-model="formData.firstName"
              placeholder="Nombre"
              required
            />
          </div>

          <div class="form-group">
            <label for="department">Departamento</label>
            <select id="department" v-model="formData.cityClient">
              <option value="" disabled selected>Selecciona un departamento</option>
              <option v-for="dept in departments" :key="dept.id" :value="dept.name">
                {{ dept.name }} - {{ dept.solarHoursPerDay }} horas solares
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="phoneNumber">Número de contacto</label>
            <input
              type="tel"
              id="phoneNumber"
              v-model="formData.phoneNumber"
              placeholder="Contacto"
              required
            />
          </div>

          <div class="form-group">
            <label for="neighborhoodClient">Barrio</label>
            <input
              type="text"
              id="neighborhoodClient"
              v-model="formData.neighborhoodClient"
              placeholder="Barrio"
              required
            />
          </div>

          <div class="form-footer">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register_client_container {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-cream);
  height: 100%;
  margin-top: 5em;
}
.register_client_principal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4em;
  width: 80%;
}
.card {
  background: var(--color-light-green);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.card h1 {
  text-align: center;
  color: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.form-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
}
.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-primary {
  background-color: var(--color-green);
  color: white;
  width: 70%;
}
.btn-primary:hover {
  color: rgb(0, 0, 0);
  width: 70%;
  background-color: #339b07;
  font-weight: bold;
}
</style>
