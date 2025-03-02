<script setup>
import { ref, onMounted } from "vue";
import api from "@/api/axiosInstance";
import { useRouter } from "vue-router";

const router = useRouter();
const formData = ref({
  nameContractor: "",
  emailContractor: "", // Se obtiene después del login con Auth0
  phoneContractor: "",
  locationContractor: "",
  expertiseContractor: "",
  nitEnterprise: ""
});

onMounted(() => {
  formData.value.emailContractor = localStorage.getItem("userEmail") || ""; // Cargar email del usuario autenticado
});

const submitForm = async () => {
  const payload = { ...formData.value };
  console.log("📤 Enviando datos al backend:", payload);
  try {
    const response = await api.post("/contractor", payload);
    console.log("✅ Contratista registrado con éxito:", response.data);
    alert("Contratista registrado con éxito");
    router.push("/");
  } catch (error) {
    console.error("❌ Error al registrar contratista:", error.response?.data || error.message);
    alert("Error al registrar el contratista. Verifica los datos e intenta nuevamente.");
  }
};
</script>

<template>
  <div class="register_contractor_container">
    <div class="register_contractor_principal">
      <div class="card">
        <h1>Registro Contratista</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nameContractor">Nombre</label>
            <input type="text" id="nameContractor" v-model="formData.nameContractor" placeholder="Nombre" required>
          </div>
          
          <div class="form-group">
            <label for="phoneContractor">Número de contacto</label>
            <input type="tel" id="phoneContractor" v-model="formData.phoneContractor" placeholder="Contacto" required>
          </div>
          
          <div class="form-group">
            <label for="locationContractor">Ubicación</label>
            <input type="text" id="locationContractor" v-model="formData.locationContractor" placeholder="Ciudad, País" required>
          </div>
          
          <div class="form-group">
            <label for="expertiseContractor">Especialización</label>
            <input type="text" id="expertiseContractor" v-model="formData.expertiseContractor" placeholder="Área de especialización" required>
          </div>
          
          <div class="form-group">
            <label for="nitEnterprise">NIT de la Empresa</label>
            <input type="text" id="nitEnterprise" v-model="formData.nitEnterprise" placeholder="NIT" required>
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
.register_contractor_container {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-cream);
  height: 100%;
  margin-top: 5em;
}
.register_contractor_principal {
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
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  background-color: #339b07;
  font-weight: bold;
}
</style>
