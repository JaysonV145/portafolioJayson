<template>
  <main>
    <div class="tituloHabilidades">
      <h1>Mis habilidades</h1>
    </div>
    <div class="titulo-inicio">
      <h1>Html</h1>
      <diV class="habilidadesGeneral">
        <span>Html</span>
      </diV>
    </div>

    <div class="titulo-inicio">
      <h1>CSS</h1>
      <button class="botonverMas" @click="toggleContent('sobreMi')">
        {{ showContent.sobreMi ? "Ver menos" : "Ver más" }}
      </button>
      <transition name="fade">
        <p v-if="showContent.sobreMi" class="descripcion">
          ¡Bienvenido!, Soy Jayson Vargas, un apasionado Desarrollador de
          Software, con una gran pasión por la tecnología y la innovación. Mi
          objetivo es crear soluciones digitales que no solo respondan a las
          necesidades actuales, sino que también aborden los desafíos futuros
          con creatividad y agilidad.
        </p>
      </transition>
    </div>

    <div class="titulo-inicio">
      <h1>JavaScript</h1>
      <button class="botonverMas" @click="toggleContent('hola')">
        {{ showContent.hola ? "Ver menos" : "Ver más" }}
      </button>
      <transition name="fade">
        <p v-if="showContent.hola" class="descripcion">
          ¡Hola! Este es un mensaje de prueba.
        </p>
      </transition>
    </div>
  </main>
</template>

<script>
const show = ref(true);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Carousel from "@/components/Carousel.vue";
import { ref } from "vue";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "MedioSection",
  components: {
    FontAwesomeIcon,
    Carousel,
  },
  setup() {
    const showContent = ref({
      experiencia: false,
      sobreMi: false,
      hola: false,
    });

    /**Aquí, recibe el nombre de la sección como argumento y cambia el estado true a false o viceversa */
    const toggleContent = (section) => {
      showContent.value[section] = !showContent.value[section];
    };
    return { showContent, toggleContent };
  },
};
</script>

<style scoped>
main {
  padding: 0;
  margin: 0;
  height: 100vh;
}

.tituloHabilidades h1 {
  font-size: 80px;
}

.titulo-inicio {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Centra el contenido verticalmente */
  align-items: center;
  text-align: center;
  width: 400px;
  color: white;
  margin-top: 90px;
  position: relative;
  transform: translateX(-10%); /*Centrado */
}

.titulo-inicio h1 {
  font-size: 80px;
  margin: 0;
}

.botones-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Espacio entre los botones */
}

.botonverMas {
  position: relative;
  justify-content: space-between;
  border: none;
  width: 300px;
  padding: 15px;
  background-color: var(--color-verde);
  color: var(--color-blanco);
  cursor: pointer;
  margin-top: 10px; /* Espacio entre el título y el botón */
}

.botonVerMas,
.botonverMas span {
  transition: 0.4s ease-in-out all;
  position: relative;
  justify-content: center;
  text-align: center;
  right: 0%;
}

.botonVerMas,
.botonverMas .icono {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
  left: -20px;
  transition: 0.3 ease-in-out all;
  opacity: 0;
}

.botonVerMas,
.botonverMas svg {
  color: var(--color-blanco);
  width: 35px;
  height: 35px;
}

.botonverMas:hover {
  background-color: var(--color-verde-hover);
  transition: 0.5s;
}

.botonVerMas:hover .icono {
  left: calc(100% - 50px);
  opacity: 1;
}

.botonVerMas:hover span {
  right: 50px;
}
.descripcion {
  margin-top: 50px; /* Espacio entre los botones y la descripción */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s, transform 0.8s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(50%);
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
  transition: 0.6s ease all;
}

.botonDestino:hover rect {
  stroke-dashoffset: 0;
}
</style>
