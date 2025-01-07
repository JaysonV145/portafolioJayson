<template>
  <div class="contenedor-proyectos">
    <h1 class="tituloSeccion">Proyectos</h1>
    <div class="proyectos-grid">
      <!-- Card 1 -->
      <div class="card-proyecto">
        <img
          src="../assets/imagen_kattas.jpg"
          alt="Proyecto 1"
          class="imagen-proyecto"
        />
        <div class="descripcion-proyecto">
          <h1>Katta's Web</h1>
          <p class="descripcion">Interfaz de página front-end y back-end.</p>
        </div>
        <div class="opcionesProyecto">
          <button>
            <span><font-awesome-icon icon="pager" /> </span>Página web
          </button>
          <button>
            <span><font-awesome-icon icon="pen-fancy" /></span>UI design
          </button>
          <button>
            <span><font-awesome-icon icon="file-code" /></span>Python
          </button>
          <button>
            <a
              href="https://github.com/JaysonV145/proyecto_katta-s"
              target="_blank"
              ><span><font-awesome-icon icon="up-right-from-square" /></span
              >Proyecto</a
            >
          </button>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="card-proyecto">
        <img
          src="../assets/imagen_ia_proyecto.jpg"
          alt="Proyecto 1"
          class="imagen-proyecto"
        />
        <div class="descripcion-proyecto">
          <h1>Asistente virtual</h1>
          <p class="descripcion">Text to speech.</p>
        </div>
        <div class="opcionesProyecto">
          <button>
            <span><font-awesome-icon icon="robot" /></span>IA
          </button>
          <button>
            <span><font-awesome-icon icon="pen-fancy" /> </span>Voiceflow
          </button>
          <button>
            <span><font-awesome-icon icon="up-right-from-square" /></span
            >Proyecto
          </button>
        </div>
      </div>
      <div class="card-proyecto">
        <img
          src="../assets/imagen_proyecto_wordpress.jpg"
          alt="Proyecto 1"
          class="imagen-proyecto"
        />
        <div class="descripcion-proyecto">
          <h1>Katta's Web</h1>
          <p class="descripcion">Interfaz de página front-end y back-end.</p>
        </div>
        <div class="opcionesProyecto">
          <button>
            <span><font-awesome-icon icon="pager" /> </span>Wordpress
          </button>
          <button>
            <span><font-awesome-icon icon="pen-fancy" /></span>Airtable
          </button>
          <button>
            <span><font-awesome-icon icon="file-code" /></span>Make
          </button>
          <button>
            <a
              href="https://github.com/JaysonV145/proyecto_katta-s"
              target="_blank"
              ><span><font-awesome-icon icon="up-right-from-square" /></span
              >Proyecto</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRightLong,
  faFileCode,
  faFontAwesome,
  faMagnifyingGlass,
  faPager,
  faPenFancy,
  faRobot,
  faRocket,
  faSquareUpRight,
  faUpRightFromSquare,
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
  faPager,
  faUpRightFromSquare,
  faPenFancy,
  faRobot,
  faFileCode
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
/* Estilos Generales */
.contenedor-proyectos {
  padding: 2rem; /**Espacio de abajo de cada card */
  background-color: var(--color-negro);
  color: var(--color-blanco);
  text-align: center;
}

/* Título */
.tituloSeccion {
  font-size: 4rem;
  margin-bottom: 2rem;
  color: var(--color-blanco);
}

/* Grid de Proyectos */
.proyectos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 800px; /* Limita el ancho máximo */
  margin: 0 auto; /* Centra horizontalmente dentro del contenedor */
}
/* Tarjeta de Proyecto */
.card-proyecto {
  background-color: #181c23;
  width: 370px;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  display: flex;
  flex-direction: column;
}

/* Imagen del Proyecto */
.imagen-proyecto {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: -20px;
}

/* Descripción del Proyecto */
.descripcion-proyecto {
  padding: 1rem;
  flex-grow: 1;
}

.descripcion-proyecto h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-blanco);
}

.descripcion-proyecto p {
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.8;
}

.opcionesProyecto {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Espacio adicional entre botones */
  max-width: 600px; /* Ajusta el ancho del contenedor si es necesario */
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 15px;
}

.opcionesProyecto button {
  display: flex;
  justify-content: center;
  background: #2d3131;
  width: 110px;
  height: 25px;
  border: none;
  border-radius: 10px;
  color: var(--color-blanco);
  padding: 5px;
  cursor: pointer;
}

.opcionesProyecto a {
  color: var(--color-blanco);
  text-decoration: none;
}

.opcionesProyecto button:hover {
  background-color: var(--color-blanco);
  color: var(--color-negro);
  transition: 0.5s;
}

.opcionesProyecto button:hover a {
  color: var(--color-negro); /* Color negro cuando el botón es hover */
  text-decoration: none;
}

.opcionesProyecto span {
  margin-right: 10px;
}

/* Hover en la Tarjeta */
.card-proyecto:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
</style>
