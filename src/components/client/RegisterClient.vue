<template>
<div class="register_client_principal">
  <div class="card">
    <h1>Registro cliente</h1>
    <form>
      <div class="form-group">
        <label for="firstName">Nombre</label>
        <input type="text" id="firstName" placeholder="Nombre" required>
      </div>
      <div class="form-group">
        <label for="lastName">Apellido</label>
        <input type="text" id="lastName" placeholder="Apellido" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <label for="department">Departamento</label>
        <select id="department">
    <option value="" disabled selected>Selecciona departamento</option>
    <option value="Amazonas">Amazonas</option>
    <option value="Antioquia">Antioquia</option>
    <option value="Arauca">Arauca</option>
    <option value="Atlántico">Atlántico</option>
    <option value="Bolívar">Bolívar</option>
    <option value="Boyacá">Boyacá</option>
    <option value="Caldas">Caldas</option>
    <option value="Caquetá">Caquetá</option>
    <option value="Casanare">Casanare</option>
    <option value="Cauca">Cauca</option>
    <option value="Cesar">Cesar</option>
    <option value="Chocó">Chocó</option>
    <option value="Córdoba">Córdoba</option>
    <option value="Cundinamarca">Cundinamarca</option>
    <option value="Guainía">Guainía</option>
    <option value="Guaviare">Guaviare</option>
    <option value="Huila">Huila</option>
    <option value="La Guajira">La Guajira</option>
    <option value="Magdalena">Magdalena</option>
    <option value="Meta">Meta</option>
    <option value="Nariño">Nariño</option>
    <option value="Norte de Santander">Norte de Santander</option>
    <option value="Putumayo">Putumayo</option>
    <option value="Quindío">Quindío</option>
    <option value="Risaralda">Risaralda</option>
    <option value="San Andrés y Providencia">San Andrés y Providencia</option>
    <option value="Santander">Santander</option>
    <option value="Sucre">Sucre</option>
    <option value="Tolima">Tolima</option>
    <option value="Valle del Cauca">Valle del Cauca</option>
    <option value="Vaupés">Vaupés</option>
    <option value="Vichada">Vichada</option>
        </select>
      </div>
      <div class="form-group">
        <label for="phoneNumber">Numero de contacto</label>
        <input type="tel" id="phoneNumber" placeholder="Contacto" required>
      </div>
      <div class="form-footer">
        <button type="submit" class="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
</div>
</template>


<style scoped>
.register_client_principal {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
  margin: 0;
}
.card {
  background: var(--color-cream);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.card h1 {
  text-align: center;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: var(--color-light-green);
}

.form-group {
  margin-bottom: 15px;
}
label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}
input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn-primary {
    background-color: #007bff;
    color: white;
}
.btn-link {
    background: none;
    color: #007bff;
    text-decoration: underline;
}
</style>