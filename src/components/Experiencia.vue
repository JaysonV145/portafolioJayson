<template>
  <div class="contenedor-experiencia">
    <h1 class="tituloSeccion">Experiencia</h1>
    <div class="experiencia-grid">
      <!-- Primera Experiencia -->
      <div
        class="tarjeta-experiencia izquierda"
        :class="{ expandida: showDetails.exp1 }"
      >
        <div class="info-basica">
          <h1>Desarrollador Full Stack</h1>
          <p class="empresa">Turit</p>
          <p class="fecha">Oct 2024 - Dic 2024</p>
          <button @click="toggleDetails('exp1')">
            {{ showDetails.exp1 ? "Ocultar" : "Ver Detalles" }}
          </button>
        </div>
        <transition name="fade">
          <div v-if="showDetails.exp1" class="detalles">
            <h1 class="tituloFunciones">Funciones y logros</h1>
            <div class="funciones-container">
              <div
                v-for="(funcion, index) in funciones"
                :key="index"
                class="funcion-item"
              >
                <div class="funcion-icono">
                  <FontAwesomeIcon :icon="funcion.icon" />
                  <!-- Aquí puedes usar FontAwesome o cualquier librería de íconos -->
                </div>
                <div class="funcion-texto">
                  <p>{{ funcion.descripcion }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Línea Divisoria -->
      <div class="linea-divisoria"></div>

      <!-- Segunda Experiencia -->
      <div
        class="tarjeta-experiencia derecha"
        :class="{ expandida: showDetails.exp2 }"
      >
        <div class="info-basica">
          <h1>Desarrollador de Software</h1>
          <p class="empresa">Meltec Comunicaciones</p>
          <p class="fecha">Abr 2024 - Oct 2024</p>
          <button @click="toggleDetails('exp2')">
            {{ showDetails.exp2 ? "Ocultar" : "Ver Detalles" }}
          </button>
        </div>
        <transition name="fade">
          <div v-if="showDetails.exp2" class="detalles">
            <h1 class="tituloFunciones">Funciones y logros</h1>
            <div class="funciones-container">
              <!-- Iterar sobre las funciones de la segunda experiencia -->
              <div
                v-for="(funcion, index) in funcionesExp2"
                :key="index"
                class="funcion-item"
              >
                <div class="funcion-icono">
                  <FontAwesomeIcon :icon="funcion.icon" />
                </div>
                <div class="funcion-texto">
                  <p>{{ funcion.descripcion }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRightLong,
  faBolt,
  faCogs,
  faDesktop,
  faFileAlt,
  faFontAwesome,
  faMagnifyingGlass,
  faNetworkWired,
  faPuzzlePiece,
  faRobot,
  faRocket,
  faSquareUpRight,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faMagnifyingGlass,
  faArrowLeft,
  faPlay,
  faAnglesDown,
  faGithubAlt,
  faArrowRight,
  faMinus,
  faArrowRightLong,
  faLaptopCode,
  faRocket,
  faSquareUpRight,
  faCogs,
  faDesktop,
  faBolt,
  faPuzzlePiece,
  faFileAlt,
  faNetworkWired,
  faTools,
  faRobot
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
      funciones: [
        {
          titulo: "Automatización de flujos de trabajo",
          descripcion:
            "Optimicé procesos internos usando GoHighlevel, Make y Zapier, mejorando la eficiencia.",
          icon: "fa-cogs", // Ejemplo de icono
        },
        {
          titulo: "Desarrollo web responsivo",
          descripcion:
            "Diseñé y desarrollé sitios web modernos usando HTML, CSS, JavaScript y Bootstrap.",
          icon: "fa-desktop",
        },
        {
          titulo: "Automatización administrativa",
          descripcion:
            "Automatizé tareas repetitivas con Google Apps Script, incrementando la eficiencia operativa.",
          icon: "fa-bolt",
        },
        {
          titulo: "Soluciones no-code",
          descripcion:
            "Desarrollé sitios dinámicos con WordPress, Bubble.io y Shopify.",
          icon: "fa-puzzle-piece",
        },
        {
          titulo: "Documentación de proyectos",
          descripcion:
            "Mantengo y documenté proyectos para asegurar su integridad y actualización continua.",
          icon: "fa-file-alt",
        },
      ],
      funcionesExp2: [
        {
          descripcion:
            "Desarrollé y mantuve aplicaciones web con HTML, CSS, JavaScript, Vue.js y Bootstrap, creando interfaces intuitivas y eficientes.",
          icon: "fa-laptop-code",
        },
        {
          descripcion:
            "Diseñé y desarrollé una intranet con Vue.js desde cero, mejorando la comunicación y gestión de proyectos internos.",
          icon: "fa-network-wired",
        },
        {
          descripcion:
            "Implementé una aplicación con AppSheet para optimizar procesos internos mediante herramientas no-code.",
          icon: "fa-cogs",
        },
        {
          descripcion:
            "Creé un bot conversacional en Voiceflow, integrado con APIs externas, para agilizar procesos de soporte y asistencia.",
          icon: "fa-robot",
        },
        {
          descripcion:
            "Automaticé tareas manuales usando herramientas como Make, optimizando la eficiencia operativa.",
          icon: "fa-tools",
        },
      ],
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
/* Estilos Generales */
.contenedor-experiencia {
  background-color: #fff;
  padding: 2rem;
  text-align: center;
}

.tituloSeccion {
  color: var(--color-negro);
  font-size: 4rem;
  margin-bottom: 2rem;
}

/* Grid de Experiencias */
.experiencia-grid {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  height: 100%;
}

/* Tarjetas de Experiencia */
.tarjeta-experiencia {
  color: var(--color-negro);
  width: 50%;
  padding: 2rem;
  background: #fff;
  text-align: left;
  position: relative;
  transition: all 0.3s ease;
}

.info-basica h1 {
  font-size: 3rem;
}

.info-basica p {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #555;
}

button {
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  border: none;
  background: linear-gradient(135deg, #004e7c, #007f9c);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: var(--color-negro);
}

/* Línea Divisoria */
.linea-divisoria {
  width: 2px;
  background: var(--color-negro);
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.detalles {
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
}

.detalles ul li {
  margin-bottom: 15px;
}

.tituloFunciones {
  font-weight: bold;
}

.expandida {
  background: #fff;
}

/* Animaciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.funciones-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas */
  gap: 20px;
}

.funcion-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
}

.funcion-item:hover {
  transform: translateY(-7px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.funcion-icono {
  font-size: 24px;
  color: var(--color-gris-fondo);
  margin-right: 15px;
}

.funcion-texto h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
}

.funcion-texto p {
  font-size: 16px;
  color: #333;
}

.botonTicket {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 120px; /**100px inicial */
  height: 30px;
  padding: 1px;
  margin-bottom: 7px;
  background: var(--color-negro);
  color: var(--color-blanco);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  bottom: 5px;
  z-index: 1;
  border: solid 1px var(--color-negro);
  overflow: hidden;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.botonTicket:hover {
  color: var(--color-blanco);
  transform: scale(1.1); /* Agranda el botón al pasar el cursor */
  transition: 0.5s;
}

.botonTicket:hover:after {
  transform: skewX(-45deg) scale(1, 1);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.botonTicket .icono {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blanco);
  width: 20px; /* Ajusta el ancho del fondo circular */
  height: 20px; /* Ajusta la altura del fondo circular */
  border-radius: 50%; /* Hace el fondo completamente circular */
  color: var(--color-negro);
}

.experienciaCards:hover .cargo-titulo,
.experienciaCards:hover .empresa-experiencia,
.experienciaCards:hover .fecha-experiencia {
  transition: color 0.3s ease, letter-spacing 0.3s ease;
}

.cargo-titulo {
  color: var(--color-negro);
  font-size: 35px;
  font-weight: 200;
  margin-bottom: 5px;
}

.empresa-experiencia {
  color: var(--color-negro);
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 5px;
}

.fecha-experiencia {
  font-size: 16px;
  color: var(--color-negro);
}
</style>
