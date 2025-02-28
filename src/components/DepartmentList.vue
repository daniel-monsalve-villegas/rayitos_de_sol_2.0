<script setup>
import { ref, onMounted } from "vue";
import { getDepartments } from "@/services/departmentService";
// import { getDepartments } from "../services/departmentService";

const departments = ref([]);

onMounted(async () => {
  try {
    departments.value = await getDepartments();
  } catch (error) {
    console.error("Error al obtener los departamentos:", error);
  }
});
</script>

<template>
  <div class="contenedorrrr">
    <h1>Departamentos</h1>
    <ul>
      <li v-for="dept in departments" :key="dept.id">
        {{ dept.name }} - {{ dept.solarHoursPerDay }} horas solares
      </li>
    </ul>
  </div>
</template>

<style scoped>
.contenedorrrr {
  margin-top: 8rem;
}
</style>