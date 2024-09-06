<template>
  <main>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      rel="stylesheet"
    />

    <div class="titulo-inicio">
      <h2>¡Hola! Soy</h2>
      <!--Soy desarrollador de software-->
      <h1 class="nombreTexto">Jayson Vargas</h1>
      <h2 class="parrafoBienvenida">Desarrollador de software</h2>
    </div>

    <div class="planetaInicio" alt="FotoPersonal">
      <img src="@/assets/planeta_sin_fondo.png" />
    </div>

    <div class="botonesInicio">
      <button type="submit" class="botonTicket">
        <div class="icono">
          <font-awesome-icon icon="arrow-left" class="iconoFlecha" />
        </div>
        <span>¡Contáctame!</span>
      </button>
      <button type="submit" class="botonDestino">
        <span>¿Quién soy yo?</span>
        <svg>
          <rect x="0" y="0" fill="none"></rect>
        </svg>
      </button>
    </div>

    <div
      class="scrollVerMas animate__animated animate__bounce"
      @click="scrollToMedioSection"
    >
      <font-awesome-icon
        icon="angles-down"
        class="iconoScroll"
      ></font-awesome-icon>
      <p>Scrollea para ver más</p>
    </div>

    <MedioSection ref="medioSection" />

    <div class="contenedorBotonIniciar">
      <button
        type="submit"
        class="botonIniciar animate__animated animate__swing"
        @click="scrollToMedioSection"
      >
        <div class="icono">
          <font-awesome-icon icon="play" class="iconoFlecha" />
        </div>
      </button>
    </div>

    <div class="redesSociales">
      <a href="https://github.com/JaysonV145" target="_blank">
        <i class="fa-brands fa-github"></i
      ></a>
      <a href="https://www.linkedin.com/in/jayson-vargas" target="_blank">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="https://wa.link/8eu07e" target="_blank"
        ><i class="fa-brands fa-whatsapp"></i
      ></a>
      <a href="mailto:vjaison30@gmail.com" target="_blank"
        ><i class="fa-regular fa-envelope"></i
      ></a>
    </div>
    <!--Datalist hace que esten las opciones abajo como del historial
    <input list="planetas" />

      <option>saturno</option>
      <option>urano</option>
      <option>marte</option>
      <option>centaurus</option>
    </datalist>-->
  </main>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import MedioSection from "./MedioSection/MedioSection.vue";
import MainLayout from "./MainLayout.vue";

library.add(faMagnifyingGlass, faArrowLeft, faPlay, faAnglesDown, faGithubAlt);
/*library.add(faArrowLeft);*/

export default {
  name: "TitleSection",
  components: {
    FontAwesomeIcon,
    MedioSection,
  },
  methods: {
    scrollToMedioSection() {
      const medioSection = this.$refs.medioSection.$el;
      medioSection.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.titulo-inicio {
  width: 1000px;
  position: relative;
  bottom: 50px; /**Posición del titulo inicial */
  margin-left: -100px;
  margin-bottom: 90px; /**Separacion con botón */
  color: white;
}

.titulo-inicio h2 {
  font-size: 80px;
  margin-bottom: -60px;
}

.titulo-inicio .nombreTexto {
  font-size: 150px;
  font-weight: 400;
  margin-bottom: -60px;
}

.parrafoBienvenida {
  color: white;
}

.planetaInicio {
  display: flex;
  position: absolute;
  justify-content: center;
  right: -100px; /**Se mueve hacia la derecha la imagen */
  top: 30px;
}

.planetaInicio img {
  height: 700px;
}

.botonesInicio {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 50px;
  position: relative;
  bottom: 80px; /**Posicion de los botones, cercanos al título */
  right: 100px;
}

.botonTicket {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: var(--color-verde);
  color: var(--color-blanco);
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  overflow: hidden;
}

.botonTicket span {
  transition: 0.4s ease-in-out all;
  font-size: 15px;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  right: 0%;
}

.botonTicket:hover span {
  right: 50px;
}

.botonTicket .icono {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  right: 10px;
  transform: scale(0.45); /* Centra verticalmente el icon y tambien el tamaño */
  transition: 0.4s ease-in-out all; /*Transición de vuelta*/

  opacity: 0; /** Lo vuelve invisible*/
}

.botonTicket:hover .icono {
  transition: 0.4s ease-in-out all; /**Transición al pasar el mouse */
  right: 60px;
  opacity: 1;
}

.botonTicket svg {
  color: var(--color-blanco);
  width: 35px;
  height: 35px;
}

.botonTicket:hover {
  background-color: var(--color-verde-hover);
  transition: 0.5s;
}

.botonDestino {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  padding: 15px;
  background-color: transparent;
  color: var(--color-blanco);
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  transition: 0.3 ease all;
}

.botonDestino span {
  position: relative;
  z-index: 2;
  transition: 0.3s ease all;
}

.botonDestino svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  fill: none;
}

.botonDestino rect {
  width: 100%;
  height: 50px;
  stroke: var(--color-blanco);
  stroke-width: 2px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: 1.3s ease all; /*Tiempo de transición del botón*/
}

.botonDestino:hover rect {
  stroke-dashoffset: 0.8;
}

.fraseInicial {
  color: var(--color-blanco);
  overflow: hidden;
  display: inline-block;
  position: absolute;
  width: 219px;
  text-align: justify;
  font-size: 12px;
  right: 15px;
  bottom: 1px;
}

.fraseInicial h3 {
  opacity: 0.7;
}

.fraseInicial .botonesFrase {
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  cursor: pointer;
  color: var(--color-blanco);
  opacity: 0.7;
  transition: 0.3 ease all;
  margin-top: 30px;
  margin-bottom: 15px; /*MODIFICAR*/
}

.fraseInicial .botonesFrase ul {
  list-style: none;
  display: flex;
  position: relative;
  padding: 0;
  margin: 0;
}

.scrollVerMas {
  display: flex;
  position: absolute;
  left: 100px;
  cursor: pointer;
  bottom: 25px;
}

.scrollVerMas .iconoScroll {
  height: 30px;
  margin-right: 15px;
  animation: animacionBotonScroll 2s infinite; /**Duración animacion */
}

@keyframes animacionBotonScroll {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(
      0
    ); /**Los porcentajes son como paradas en la animación, en estos momentos el elemento no se moverá y estara en su posición original */
  }
  40% {
    transform: translateY(
      -15px
    ); /**En este punto la animación, el elemento se moverá 10px hacia arriba */
  }
  60% {
    transform: translateY(
      -10px
    ); /**El elemento se moverá hacia arriba 5 pixeles, este es un rebote mas pequeño */
  }
}

.contenedorBotonIniciar {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  bottom: 10px;
  left: 50%;
}

.botonIniciar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 30px;
  background-color: var(--color-verde);
  color: var(--color-blanco);
  cursor: pointer;
  text-align: center;
  width: 50px; /* Ajusta el ancho del botón */
  height: 50px; /* Ajusta la altura del botón */
  border-radius: 50%; /* Hace que el botón sea circular */
  overflow: hidden;
}

.botonIniciar:hover {
  animation: jello-horizontal 0.9s both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

.botonIniciar:hover span {
  right: 50px;
}

.botonIniciar .icono {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  transform: scale(0.45); /* Centra verticalmente el icon y tambien el tamaño */
}

.botonIniciar svg {
  /**Tamaño icono */
  color: var(--color-blanco);
  width: 35px;
  height: 35px;
}

.botonIniciar:hover {
  background-color: var(--color-verde-hover);
  transition: 0.5s;
}

.redesSociales {
  display: flex;
  position: relative;
  justify-content: end;
  bottom: 310px;
  left: 110px;
}

.redesSociales i {
  color: var(--color-blanco);
  opacity: 0.7;
  margin-right: 25px;
  font-size: 20px;
  cursor: pointer;
}

.redesSociales a {
  background-color: transparent;
}
</style>
