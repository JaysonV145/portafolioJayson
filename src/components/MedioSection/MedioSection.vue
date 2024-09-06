<template>
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
      <transition name="fade">
        <ul
          v-if="showContent.experiencia"
          class="descripcion"
          :class="{ expand: showContent.experiencia }"
        >
          <li>Vue.js</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>Voiceflow</li>
        </ul>
      </transition>
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
      <transition name="fade">
        <p
          v-if="showContent.sobreMi"
          class="descripcion"
          :class="{ expand: showContent.sobreMi }"
        >
          ¡Bienvenido!, Soy Jayson Vargas, un apasionado Desarrollador de
          Software, con una gran pasión por la tecnología y la innovación. Mi
          objetivo es crear soluciones digitales que no solo respondan a las
          necesidades actuales, sino que también aborden los desafíos futuros
          con creatividad y agilidad.
        </p>
      </transition>
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
      <transition name="fade">
        <p
          v-if="showContent.hola"
          class="descripcion"
          :class="{ expand: showContent.hola }"
        >
          ¡Hola! Este es un mensaje de prueba.
        </p>
      </transition>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MedioSection",
  setup() {
    const showContent = ref({
      experiencia: false,
      sobreMi: false,
      hola: false,
      activeSection: null,
    });

    // Lógica para alternar la visibilidad de las secciones
    const toggleContent = (section) => {
      if (showContent.value[section]) {
        showContent.value[section] = false;
        showContent.value.activeSection = null;
      } else {
        // Oculta todas las secciones y activa solo la seleccionada
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
/* El estilo permanece igual */
</style>

<style scoped>
/* Estilos originales */
main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  height: 50vh;
  margin-top: 50px;
  justify-content: center;
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
  margin-top: 200px;
  position: relative;
  transform: translateX(-10%);
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
  bottom: -150px;
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

.descripcion {
  display: flex;
  flex-direction: row;
  gap: 90px;
  position: absolute;
  margin-top: 50px;
  right: -800px;
  text-align: right;
  transform: translateX(100%);
  transition: transform 0.5s ease;
  list-style: none;
}

.descripcion.expand {
  transform: scale(1.6);
  max-height: 500px;
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
