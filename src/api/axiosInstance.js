/**
 * @file Configuración de Axios para realizar peticiones a la API del backend.
 * @module api
 */

import axios from "axios";

/**
 * Instancia de Axios configurada con la base URL y encabezados predeterminados.
 *
 * @constant {import("axios").AxiosInstance}
 */
const api = axios.create({
  /**
   * URL base de la API del backend.
   * @type {string}
   */
  baseURL: "http://localhost:8080/api/v1", 

  /**
   * Encabezados HTTP predeterminados para todas las peticiones.
   */
  headers: {
    "Content-Type": "application/json",
  },

  /**
   * Credenciales de autenticación básica (usuario y contraseña).
   * ⚠️ **Nota:** No se recomienda almacenar credenciales en código fuente.
   */
  auth: {
    username: "usuario",
    password: "12345",
  },
});

export default api;
