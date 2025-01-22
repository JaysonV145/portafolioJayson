<template>
  <header class="space-header">
    <h1 class="title">Jayson Vargas</h1>
    <nav class="navegacion">
      <!-- Botón hamburguesa para pantallas pequeñas -->
      <button class="menu-hamburguesa" @click="toggleMenu">
        <font-awesome-icon icon="fa-solid fa-bars" class="hamburger-icon" />
      </button>

      <ul :class="{ 'menu-visible': isMenuVisible }">
        <li><a href="#Inicio" class="nav_link">Inicio</a></li>
        <li><a href="#SobreMi" class="nav_link">Sobre mí</a></li>
        <li><a href="#proyectos" class="nav_link">Proyectos</a></li>
        <li><a href="#habilidades" class="nav_link">Habilidades</a></li>
        <li><a href="#contacto" class="nav_link">Contacto</a></li>
        <li class="search-container">
          <input type="text" class="busqueda" placeholder="Buscar..." />
          <font-awesome-icon icon="magnifying-glass" class="busquedaIcono" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass, faBars);

export default {
  name: "Header",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      isMenuVisible: false, // Controla la visibilidad del menú
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible; // Alterna la visibilidad del menú
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.space-header {
  display: flex;
  z-index: 9;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: var(--color-negro);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
}

.logo img {
  height: 50px;
}

.title {
  position: fixed;
  left: 0;
  margin: 0;
  margin-left: 20px;
  padding: 0;
  font-size: 24px;
}

.navegacion {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navegacion ul {
  font-family: Arial, serif;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.navegacion li {
  font-family: Arial, serif;
  margin: 0 15px;
}

.navegacion a {
  font-family: Arial, serif;
  text-decoration: none;
  color: gray;
  transition: color 0.3s;
}

.navegacion a.router-link-active {
  font-weight: bold;
  color: white;
}

.navegacion a:hover {
  color: white;
}

.navegacion .search-container {
  position: relative;
  left: 350px;
}

.navegacion .busqueda {
  position: relative;
  padding-left: 30px;
  border: solid 2px gray;
  border-radius: 15px;
  padding: 9px;
  background-color: transparent;
  color: white;
}

.navegacion .busquedaIcono {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  margin-left: -30px;
  font-size: 17px;
  cursor: pointer;
}

.menu-hamburguesa {
  display: none; /* Oculto por defecto */
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  position: absolute; /* Permite ajustar la posición con left */
  left: 290px; /* Mueve el botón hacia la izquierda */
}

.hamburger-icon {
  width: 30px;
  font-size: 24px; /* Tamaño del ícono */
  color: var(--color-blanco);
  display: block;
  margin: 6px auto;
  transition: all 0.3s ease;
}

.menu-hamburguesa:hover .hamburger-icon {
  transform: scale(1.1); /* Efecto al pasar el ratón */
}

@media (max-width: 480px) {
  .navegacion ul {
    display: none;
    flex-direction: column;
    background-color: var(--color-negro);
    width: 100%;
    padding: 20px;
    position: absolute;
    top: 100px;
    left: 0;
  }

  .navegacion .menu-visible {
    display: flex; /* Muestra el menú si está visible */
  }

  .menu-hamburguesa {
    display: block; /* Muestra el botón hamburguesa */
  }
}
</style>
