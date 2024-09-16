<template>
  <h1 class="titulo-general">¡Conóceme!</h1>
  <main>
    <!-- Sección Experiencia -->

    <div v-if="!showContent.sobreMi && !showContent.hola" class="titulo-inicio">
      <h1 :class="{ 'titulo-active': showContent.experiencia }">Experiencia</h1>
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
    <div
      v-if="!showContent.experiencia && !showContent.hola"
      class="titulo-inicio"
    >
      <h1 :class="{ 'titulo-active': showContent.sobreMi }">Sobre mí</h1>
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
    <div
      v-if="!showContent.experiencia && !showContent.sobreMi"
      class="titulo-inicio"
    >
      <h1 :class="{ 'titulo-active': showContent.hola }">Habilidades</h1>
      <button
        class="botonverMas"
        :class="{ active: showContent.hola }"
        @click="toggleContent('hola')"
      >
        {{ showContent.hola ? "Ver menos" : "Ver más" }}
      </button>
      <Habilidades :showContent="showContent" />
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import Experiencia from "./Experiencia.vue";
import SobreMi from "./SobreMi.vue";
import Habilidades from "./Habilidades.vue";

export default {
  name: "MedioSection",
  components: {
    Experiencia,
    SobreMi,
    Habilidades,
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
.titulo-general {
  font-size: 60px;
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
  top: -150px;
  color: var(--color-blanco); /* Cambia esto según tu esquema de colores */
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
  background-color: rgba(255, 255, 255, 0.1);
}

.titulo-inicio h1 {
  font-size: 60px;
  margin: 0;
}

.titulo-active {
  position: absolute;
  top: -50px;
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
  bottom: -700px; /**Cambiar */
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
