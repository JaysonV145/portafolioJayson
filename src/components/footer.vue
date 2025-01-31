<template>
  <footer>
    <div class="footer-container">
      <div class="logoFooter">
        <h1>Jayson</h1>
      </div>
      <div class="contact-info">
        <h3>Contacto</h3>
        <p>
          Email: <a href="mailto:vjaison30@gmail.com">vjaison30@gmail.com</a>
        </p>
        <p>Teléfono: <a href="tel:+573224283163">+57 3224283163</a></p>
      </div>
      <div class="nav-links">
        <h3>Enlaces</h3>
        <ul>
          <li><a href="#Inicio" class="nav_link">Inicio</a></li>
          <li><a href="#SobreMi" class="nav_link">Sobre mí</a></li>
          <li><a href="#proyectos" class="nav_link">Proyectos</a></li>
          <li><a href="#habilidades" class="nav_link">Habilidades</a></li>
          <li><a href="#contacto" class="nav_link">Contacto</a></li>
        </ul>
      </div>
      <div class="social-media">
        <h3>Servicios</h3>
        <ul>
          <li>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank"
              >Desarrollo Web</a
            >
          </li>
          <li>
            <a href="https://github.com/tu-usuario" target="_blank"
              >Diseño UX</a
            >
          </li>
          <li>
            <a href="https://github.com/tu-usuario" target="_blank"
              >Diseño UI</a
            >
          </li>
          <li>
            <a href="https://github.com/tu-usuario" target="_blank"
              >Automatización</a
            >
          </li>
          <li>
            <a href="https://github.com/tu-usuario" target="_blank"
              >Soluciones con IA</a
            >
          </li>
        </ul>
      </div>
    </div>
    <p class="footer-credits">© 2024 Jayson. Todos los derechos reservados.</p>
    <hr class="footer-divider" />
    <div class="footer-icons">
      <span>
        <a href="https://github.com/JaysonV145" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-github" /></a
      ></span>
      <span
        ><a href="https://www.linkedin.com/in/jayson-vargas/" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a
      ></span>
      <span
        ><a href="tel:+573224283163" target="_blank"
          ><font-awesome-icon icon="fa-solid fa-phone" /></a
      ></span>
    </div>
  </footer>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEnvelopeOpen,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faMagnifyingGlass,
  faArrowLeft,
  faEnvelopeOpen,
  faPhone,
  faGithub,
  faLinkedin,
  faLinkedinIn
);
export default {
  name: "Habilidades",
  components: {
    FontAwesomeIcon,
  },
  props: {
    showContent: Object,
  },

  data() {
    return {
      showDetails: {
        exp1: false,
        exp2: false,
      },
    };
  },
  methods: {
    toggleDetails(exp) {
      this.showDetails[exp] = !this.showDetails[exp];
    },
  },
};
</script>

<style scoped>
footer {
  background-color: var(--color-negro);
  color: var(--color-blanco);
  padding: 10px 20px; /* Más espacio para mejorar la visualización */
  text-align: center;
  position: relative;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  align-items: center; /* Centrar verticalmente */
  flex-wrap: wrap;
  gap: 20px; /* Espacio entre los elementos */
}

.footer-container div {
  margin: 10px;
  flex: 1; /* Asegura que cada sección ocupa el mismo espacio */
  min-width: 200px; /* Ancho mínimo para evitar colapsos */
}

.footer-container a {
  color: var(--color-blanco);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-container a:hover {
  color: var(--color-blanco);
}

.footer-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-divider {
  border: none;
  border-top: 1px solid var(--color-blanco);
  margin: 20px 0;
}

.footer-credits {
  margin-top: 20px;
  font-size: 0.9em;
}

.footer-icons {
  display: flex;
  justify-content: center;
  gap: 15px; /* Espacio entre iconos */
}

.footer-icons a {
  text-decoration: none; /* Elimina el subrayado */
  color: inherit; /* Mantiene el color del texto o del icono original */
}

.footer-icons span {
  border: 1px solid var(--color-blanco);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px; /* Tamaño uniforme del círculo */
  height: 50px; /* Tamaño uniforme del círculo */
  font-size: 18px;
}

.footer-icons span:hover {
  background-color: var(--color-blanco);
  color: var(--color-negro);
  transition: 0.5s;
}

.social-media {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar verticalmente */
  font-weight: 390;
}

.logoFooter {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 480px) {
  footer {
    background-color: var(--color-negro);
    color: var(--color-blanco);
    padding: 1px 1px; /* Más espacio para mejorar la visualización */
    text-align: center;
    position: relative;
  }

  .footer-container div {
    margin: 10px;
    min-width: 200px; /* Ancho mínimo para evitar colapsos */
  }

  .footer-container {
    display: flex;
    justify-content: space-around;
    align-items: center; /* Centrar verticalmente */
    flex-wrap: wrap;
    gap: 1px; /* Espacio entre los elementos */
  }
  .footer-credits {
    margin-top: 10px;
    font-size: 0.9em;
  }
}
</style>
