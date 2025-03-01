<template>
  <div class="intro-container">
    <h1
      v-if="!showContent.experiencia && !showContent.sobreMi"
      class="titulo-general"
    >
      ¡Conóceme!
    </h1>
    <p
      v-if="!showContent.experiencia && !showContent.sobreMi"
      class="descripcionIntro"
    >
      A continuación, te invito a explorar más sobre mí y mi trayectoria
      profesional. Cada sección refleja mi experiencia, habilidades y la pasión
      que tengo por el desarrollo de software.
    </p>
  </div>
  <main>
    <!-- Sección Experiencia -->

    <div v-if="!showContent.sobreMi && !showContent.hola" class="titulo-inicio">
      <h1 :class="{ 'titulo-active': showContent.experiencia }">Experiencia</h1>
      <p v-if="!showContent.experiencia" class="seccion-descripcion">
        He tenido el privilegio de trabajar en diversos proyectos que me han
        permitido adquirir habilidades valiosas y contribuir de manera
        significativa en el desarrollo de soluciones innovadoras. A
        continuación, detallo mis experiencias más relevantes.
      </p>
      <button
        class="botonverMas"
        :class="{ active: showContent.experiencia }"
        @click="toggleContent('experiencia')"
      >
        {{ showContent.experiencia ? "Ver menos" : "Ver más" }}
      </button>
      <Experiencia :showContent="showContent" />
    </div>

    <!-- Sección Sobre mí -->
    <div v-if="!showContent.experiencia" class="titulo-inicio">
      <h1 :class="{ 'titulo-active': showContent.sobreMi }">Sobre mí</h1>
      <p v-if="!showContent.sobreMi" class="seccion-descripcion">
        Soy un apasionado desarrollador de software que se esfuerza por combinar
        creatividad y técnica para resolver problemas complejos. Mi enfoque está
        en la innovación y el aprendizaje continuo, lo que me permite adaptarme
        a las necesidades cambiantes del sector tecnológico.
      </p>
      <button
        class="botonverMas"
        :class="{ active: showContent.sobreMi }"
        @click="toggleContent('sobreMi')"
      >
        {{ showContent.sobreMi ? "Ver menos" : "Ver más" }}
      </button>
      <SobreMi :showContent="showContent" />
    </div>

    <!-- Sección Habilidades -->
  </main>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ref } from "vue";
import Experiencia from "./Experiencia.vue";
import SobreMi from "./SobreMi.vue";

export default {
  name: "MedioSection",
  components: {
    Experiencia,
    SobreMi,
  },
  setup() {
    const showContent = ref({
      experiencia: false,
      sobreMi: false,
      hola: false,
      activeSection: null,
    });

    const toggleContent = (section) => {
      if (showContent.value[section]) {
        showContent.value[section] = false;
        showContent.value.activeSection = null;
      } else {
        Object.keys(showContent.value).forEach((key) => {
          showContent.value[key] = false;
        });
        showContent.value[section] = true;
        showContent.value.activeSection = section;
      }
    };

    return { showContent, toggleContent };
  },
};
</script>

<style scoped>
.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -50px; /* Mueve el contenido hacia arriba */
  margin-bottom: 80px;
}
.titulo-general {
  font-size: 60px;
  text-align: center;
  color: var(--color-blanco);
  margin-bottom: 0; /* Elimina el margen inferior del título */
  position: relative;
  right: 40px;
}

.descripcionIntro {
  font-size: 14px;
  color: var(--color-blanco);
  text-align: center;
  line-height: 1.6;
  max-width: 800px; /* Limita el ancho del texto para que no sea tan amplio */
  margin: 0 auto; /* Centra el párrafo horizontalmente */
  margin-top: 0; /* Acerca el texto al título */
}

main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  height: 50vh;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 0 auto;
  transition: transform 0.5s ease;
}

.titulo-inicio {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 400px;
  color: white;
  position: relative;
  right: 40px; /**Cambiar y modificar, esto es lo que esta cambiando todo */
}

.titulo-inicio h1 {
  font-size: 60px;
  margin: 0;
}

.titulo-active {
  position: absolute;
  top: -80px;
  left: -100px;
  animation: slideDown 0.6s ease forwards;
  transform-origin: top;
}

.botonverMas {
  border: none;
  width: 300px;
  padding: 15px;
  background-color: var(--color-verde);
  color: var(--color-blanco);
  cursor: pointer;
  margin-top: 10px;
  transition: transform 0.4s ease, background-color 0.5s;
}

.botonverMas.active {
  position: relative;
  left: -150px;
  top: -150px; /**Cambiar */
  transform: scale(1.1);
  background-color: var(--color-verde-hover);
  animation: slideDown 2s ease forwards;
}

@keyframes slideDown {
  0% {
    transform: scale(1.1) translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: scale(1.1) translateY(0);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>
