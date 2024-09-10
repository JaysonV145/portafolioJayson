<template>
  <transition name="fade">
    <div
      v-if="showContent.hola"
      class="habilidades"
      :class="{ expand: showContent.hola }"
    >
      <div class="contenedorHabilidades">
        <!-- Card HTML -->
        <div class="card">
          <img
            class="logoHTML"
            src="@/assets/html_logo.png"
            style="display: flex; justify-content: center; height: 50px"
          />
          <h1>HTML</h1>
          <hr class="divider" />
          <p class="description">
            Creación de estructuras web accesibles y semánticas, optimizadas
            para SEO y compatibilidad con múltiples navegadores.
          </p>
          <button type="submit" class="botonTicket">
            <div class="icono">
              <font-awesome-icon icon="arrow-right" class="flechaDerecha" />
            </div>
            <span>Proyectos</span>
          </button>
        </div>

        <div class="card">
          <img
            class="logoJS"
            src="@/assets/js_logo.png"
            style="display: flex; justify-content: center; height: 50px"
          />
          <h1>Javascript</h1>
          <hr class="divider" />
          <p class="description">
            Desarrollo de funcionalidades interactivas con JavaScript, manejando
            eventos y APIs para mejorar la experiencia del usuario.
          </p>
          <button type="submit" class="botonTicket">
            <div class="icono">
              <font-awesome-icon icon="arrow-right" class="flechaDerecha" />
            </div>
            <span>Proyectos</span>
          </button>
        </div>

        <div class="card">
          <img
            class="logoCSS"
            src="@/assets/css_logo.png"
            style="display: flex; justify-content: center; height: 50px"
          />
          <h1>Css</h1>
          <hr class="divider" />
          <p class="description">
            Creación de diseños responsivos y atractivos usando CSS3, con
            técnicas avanzadas como Flexbox y Grid.
          </p>
          <button type="submit" class="botonTicket">
            <div class="icono">
              <font-awesome-icon icon="arrow-right" class="flechaDerecha" />
            </div>
            <span>Proyectos</span>
          </button>
        </div>

        <div class="card">
          <img
            class="logoJS"
            src="@/assets/vue_logo.png"
            style="display: flex; justify-content: center; height: 50px"
          />
          <h1>Vue.js</h1>
          <hr class="divider" />
          <p class="description">
            Construcción de aplicaciones reactivas con Vue.js, gestionando el
            estado y creando interfaces dinámicas.
          </p>
          <button type="submit" class="botonTicket">
            <div class="icono">
              <font-awesome-icon icon="arrow-right" class="flechaDerecha" />
            </div>
            <span>Proyectos</span>
          </button>
        </div>

        <div class="card">
          <img
            class="logoBootstrap"
            src="@/assets/bootstrap_logo.png"
            style="display: flex; justify-content: center; height: 50px"
          />
          <h1>Bootstrap</h1>
          <hr class="divider" />
          <p class="description">
            Uso de Bootstrap para diseñar interfaces web responsivas y
            coherentes, aprovechando su sistema de cuadrícula y componentes.
          </p>
          <button type="submit" class="botonTicket">
            <div class="icono">
              <font-awesome-icon icon="arrow-right" class="flechaDerecha" />
            </div>
            <span>Proyectos</span>
          </button>
        </div>

        <div class="card">
          <img
            class="logoBootstrap"
            src="@/assets/voiceflow_logo.png"
            style="display: flex; justify-content: center; height: 50px"
          />
          <h1>Voiceflow</h1>
          <hr class="divider" />
          <p class="description">
            Desarrollo de flujos de conversación para chatbots con Voiceflow,
            optimizando la interacción del usuario en aplicaciones de voz y
            texto.
          </p>
          <button type="submit" class="botonTicket">
            <div class="icono">
              <font-awesome-icon icon="arrow-right" class="flechaDerecha" />
            </div>
            <span>Proyectos</span>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRightLong,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faMagnifyingGlass,
  faArrowLeft,
  faPlay,
  faAnglesDown,
  faGithubAlt,
  faArrowRight,
  faMinus,
  faArrowRightLong
);
export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    showContent: Object,
  },
};
</script>

<style scoped>
.habilidades {
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: row;
  width: 1200px;
  height: 40vh;
  border-radius: 10px;
}

.contenedorHabilidades {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
}

.card {
  background-color: #181c23;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 320px;
  height: 300px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative; /* Necesario para posicionar el botón correctamente */
}

.card h1 {
  margin-top: 15px;
  font-size: 22px;
  margin-bottom: -10px;
}

.card img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.card p.description {
  font-size: 14px;
  margin-top: 10px;
}

.divider {
  width: 60px;
  border: none;
  border-top: 3px solid var(--color-blanco);
  margin: 10px 0;
  border-radius: 10px;
}

.botonTicket {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 120px; /**100px inicial */
  height: 30px;
  padding: 1px;
  background: #181c23;
  color: white;
  border: none;
  border-radius: 32px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  left: 15px;
  bottom: 5px;
  z-index: 1;
  border: solid 1px var(--color-blanco);
  overflow: hidden;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.botonTicket:hover {
  color: #181c23;
  transform: scale(1.1); /* Agranda el botón al pasar el cursor */
  transition: 0.5s;
}

.botonTicket:after {
  content: "";
  background: white;
  position: absolute;
  z-index: -1;
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-45deg) scale(0, 1);
  transition: all 0.5s;
}

.botonTicket:hover:after {
  transform: skewX(-45deg) scale(1, 1);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

/*Por si se quiere poner el fondo del boton negro*/
/*.botonTicket:hover .icono {*/
/*  background-color: #000000; /* Cambia el fondo del icono a negro al pasar el cursor */
/* color: var(--color-blanco);
}*/

.botonTicket .icono {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blanco);
  width: 20px; /* Ajusta el ancho del fondo circular */
  height: 20px; /* Ajusta la altura del fondo circular */
  border-radius: 50%; /* Hace el fondo completamente circular */
  color: #181c23;
}
</style>
