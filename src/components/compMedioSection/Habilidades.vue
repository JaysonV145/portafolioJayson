<template>
  <transition name="fade">
    <div v-if="showContent.hola" class="habilidades">
      <div class="botonTipoHab">
        <button>
          <font-awesome-icon icon="fa-solid fa-laptop-code" class="iconoHab" />
          Habilidades técnicas
        </button>
        <button>
          <font-awesome-icon icon="fa-solid fa-rocket" class="iconoHab" />
          Habilidades blandas
        </button>
      </div>
      <div class="contenedorHabilidades">
        <!-- Carrusel -->
        <div class="carousel">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(card, index) in slides"
              :key="index"
              class="carousel-slide"
            >
              <div class="card">
                <img :src="card.img" :alt="card.title" class="card-image" />
                <h1>{{ card.title }}</h1>
                <hr class="divider" />
                <p class="description">{{ card.description }}</p>
                <button type="submit" class="botonTicket">
                  <div class="icono">
                    <font-awesome-icon
                      icon="arrow-right"
                      class="flechaDerecha"
                    />
                  </div>
                  <span>Proyectos</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Puntos de navegación -->
        <div class="carousel-dots">
          <span
            v-for="(dot, index) in totalSlides"
            :key="index"
            class="dot"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></span>
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
  faRocket,
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
  faRocket
);
export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    showContent: Object,
  },
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          img: "@/assets/html_logo.png",
          title: "HTML",
          description: "Creación de estructuras web accesibles y semánticas.",
        },
        {
          img: "@/assets/js_logo.png",
          title: "JavaScript",
          description:
            "Desarrollo de funcionalidades interactivas con JavaScript.",
        },
        {
          img: "@/assets/css_logo.png",
          title: "CSS",
          description:
            "Creación de diseños responsivos y atractivos usando CSS3.",
        },
        {
          img: "@/assets/vue_logo.png",
          title: "Vue.js",
          description: "Construcción de aplicaciones reactivas con Vue.js.",
        },
        {
          img: "@/assets/bootstrap_logo.png",
          title: "Bootstrap",
          description:
            "Uso de Bootstrap para diseñar interfaces web responsivas.",
        },
        {
          img: "@/assets/voiceflow_logo.png",
          title: "Gihub",
          description: "Desarrollo de flujos de conversación con Voiceflow.",
        },
        {
          img: "@/assets/voiceflow_logo.png",
          title: "Voiceflow",
          description: "Desarrollo de flujos de conversación con Voiceflow.",
        },
        {
          img: "@/assets/voiceflow_logo.png",
          title: "Diseño UX/UI",
          description: "Desarrollo de flujos de conversación con Voiceflow.",
        },
      ],
    };
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.slides.length / 4); // Agrupa en conjuntos de 4
    },
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
    },
    autoSlide() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      }, 10000); // Cambia de slide cada 5 segundos
    },
  },
  mounted() {
    this.autoSlide();
  },
};
</script>

<style scoped>
.habilidades {
  display: flex;
  margin: auto;
  justify-content: center;
  width: 1200px;
  height: 40vh;
  border-radius: 10px;
  margin-left: -110px;
}
.carousel {
  width: 1400px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 25%; /* Mostrar 4 tarjetas a la vez */
  box-sizing: border-box;
  padding: 10px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.dot {
  /**Estos son los puntos del carrusel */
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #333;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #ccc;
}

.botonTipoHab {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 10px;
  left: -110px;
}

.botonTipoHab button {
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 32px;
  width: 160px;
  height: 40px;
  padding: 1px;
  cursor: pointer;
  margin-right: 15px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.botonTipoHab button:hover {
  color: #181c23; /* Cambia el color del texto al hacer hover */
  background-color: var(--color-blanco);
  transform: scale(1.1); /* Agranda el botón suavemente */
  transition: 0.5s;
}

.botonTipoHab button .iconoHab {
  margin-right: 5px;
  transition: transform 0.3s ease;
}

.contenedorHabilidades {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: relative;
  align-items: center;
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
  width: 320px; /**320px inicial */
  height: 300px; /**300px */
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
  width: 35px;
  height: 35px;
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
  margin-bottom: 7px;
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
