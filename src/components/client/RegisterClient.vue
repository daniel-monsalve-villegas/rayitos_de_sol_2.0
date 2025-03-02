<template>
  <div class="register_client_container">
    <div class="register_client_principal">
      <div class="card">
        <h2 class="form__tittle">Registro Cliente</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="firstName">Nombre</label>
            <input type="text" id="firstName" v-model="formData.firstName" placeholder="Nombre" required />
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
            <input type="tel" id="phoneNumber" v-model="formData.phoneNumber" placeholder="Contacto" required />
          </div>

          <div class="form-group">
            <label for="neighborhoodClient">Barrio</label>
            <input type="text" id="neighborhoodClient" v-model="formData.neighborhoodClient" placeholder="Barrio" required />
          </div>

          <div class="form-group">
            <label for="monthlyConsumptionClient">Consumo Mensual (kWh)</label>
            <input type="number" id="monthlyConsumptionClient" v-model.number="formData.monthlyConsumptionClient" required />
          </div>

          <div class="checkbox-group">
            <label><input type="checkbox" v-model="formData.lowIncome" /> Bajos ingresos</label>
            <label><input type="checkbox" v-model="formData.singleParent" /> Madre/padre soltero</label>
            <label><input type="checkbox" v-model="formData.displaced" /> Desplazado</label>
            <label><input type="checkbox" v-model="formData.disabled" /> Discapacitado</label>
            <label><input type="checkbox" v-model="formData.elderly" /> Adulto mayor</label>
            <label><input type="checkbox" v-model="formData.limitedAccessToServices" /> Acceso limitado a servicios</label>
            <label><input type="checkbox" v-model="formData.inadequateHousing" /> Vivienda inadecuada</label>
          </div>

          <div class="form-footer">
            <button class="btn btn-primary" type="submit" :disabled="isSubmitting">
              {{ isSubmitting ? "Enviando..." : "Enviar" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getDepartments } from '@/services/departmentService'
import api from '@/api/axiosInstance'
import { useRouter } from 'vue-router'

const router = useRouter()
const departments = ref([])
const isSubmitting = ref(false) // Estado para el botón

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
  isSubmitting.value = true // Cambia el estado a "Enviando..." y deshabilita el botón

  const payload = {
    nameClient: formData.value.firstName,
    emailClient: formData.value.emailClient,
    cityClient: formData.value.cityClient,
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
  } finally {
    isSubmitting.value = false // Restaura el estado a "Enviar"
  }
}
</script>

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
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.contact__button {
  background: var(--color-green);
  color: var(--color-white);
  border: none;
  padding: 0.7rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
}
.contact__button:hover {
  background: var(--color-dark-green);
}

.card h1 {
  text-align: center;
  color: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-weight: bold;
}

.form__tittle{
  display: flex;
  justify-content: center;
  margin: 1em;
  font-size: 1.3em;
  font-weight: bold;
  color: var(--color-dark-green)
}

.form-group {
  margin-bottom: 15px;
}
label {
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--color-green);
  font-size: 0.93em;
  width: 100%;
}
input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #00000062;
  border-radius: 4px;
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas */
  gap: 1em; /* Espaciado entre elementos */
  align-items: center; /* Alinea los elementos verticalmente */
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 0.5em; /* Espaciado entre checkbox y texto */
}

.checkbox-group label input {
  width: 16px;
  height: 16px;
}

.checkbox-group label:nth-child(7) {
  grid-column: span 2; /* Último checkbox ocupa toda la fila */
}

/* Responsive: una sola columna en pantallas pequeñas */
@media screen and (max-width: 600px) {
  .checkbox-group {
    grid-template-columns: 1fr; /* 1 columna */
  }

  .checkbox-group label:nth-child(7) {
    grid-column: span 1; /* Último checkbox ocupa una sola columna en móvil */
  }
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
