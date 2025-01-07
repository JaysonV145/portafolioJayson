<template>
  <footer>
    <div class="footer-container">
      <div class="logoFooter">
        <h1>Jayson</h1>
      </div>
      <div class="contact-info">
        <h3>Contacto</h3>
        <p>
          Email: <a href="mailto:tuemail@example.com">vjaison30@gmail.com</a>
        </p>
        <p>Teléfono: <a href="tel:+573224283163">+57 3224283163</a></p>
      </div>
      <div class="nav-links">
        <h3>Enlaces</h3>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
      <div class="social-media">
        <h3>Servicios</h3>
        <a href="https://linkedin.com/in/tu-perfil" target="_blank"
          >Desarrollo Web</a
        >
        <a href="https://github.com/tu-usuario" target="_blank">Diseño UX</a>
        <a href="https://github.com/tu-usuario" target="_blank">Diseño UI</a>
        <a href="https://github.com/tu-usuario" target="_blank"
          >Automatización</a
        >
        <a href="https://github.com/tu-usuario" target="_blank"
          >Soluciones con IA</a
        >
      </div>
    </div>
    <p class="footer-credits">© 2024 Jayson. Todos los derechos reservados.</p>
    <hr class="footer-divider" />
    <div class="footer-icons">
      <span> <font-awesome-icon icon="fa-brands fa-github" /></span>
      <span><font-awesome-icon icon="fa-brands fa-linkedin-in" /></span>
      <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
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
  padding: 20px;
  text-align: center;
  position: relative;
}
.footer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.footer-container div {
  margin: 10px;
}
.footer-container a {
  color: var(--color-blanco);
  text-decoration: none;
  transition: color 0.3s;
}
.footer-container a:hover {
  color: var(--color-verde);
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
}

.footer-icons span {
  border: 1px solid var(--color-blanco);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 20px; /* Tamaño uniforme del círculo */
  height: 20px; /* Tamaño uniforme del círculo */
  font-size: 18px;
  padding: 15px;
  margin-right: 15px;
}

.footer-icons span:hover {
  background-color: var(--color-blanco);
  color: var(--color-negro);
  transition: 0.5s;
}

.social-media {
  display: flex;
  flex-direction: column;
}

.logoFooter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
