<template>
  <main>
    <div class="titulo-inicio">
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

    <div v-if="!showContent.experiencia" class="titulo-inicio">
      <h1>Sobre mí</h1>
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

    <div
      v-if="!showContent.experiencia && !showContent.sobreMi"
      class="titulo-inicio"
    >
      <h1>Habilidades</h1>
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
    });

    // Lógica para alternar la visibilidad de las secciones
    const toggleContent = (section) => {
      // Si la sección ya está activa, solo la desactiva
      if (showContent.value[section]) {
        showContent.value[section] = false;
      } else {
        // Desactiva todas las demás secciones al activar una nueva
        Object.keys(showContent.value).forEach((key) => {
          showContent.value[key] = false;
        });
        showContent.value[section] = true;
      }
    };

    return { showContent, toggleContent };
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas de igual tamaño */
  gap: 10px; /* Espacio entre los elementos */
  height: 50vh;
  margin-top: 50px;
  justify-content: center;
}

.titulo-inicio {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Centra el contenido verticalmente */
  align-items: center;
  text-align: center;
  width: 400px;
  color: white;
  margin-top: 200px;
  position: relative;
  transform: translateX(-10%); /* Centrado */
}

.titulo-inicio h1 {
  font-size: 60px;
  margin: 0;
}

.titulo-active {
  position: absolute;
  top: -50px;
  left: -150px;
  animation: slideDown 0.6s ease forwards; /* Aplica la misma animación al título */
  transform-origin: top; /* Ajusta el punto de inicio de la animación */
}

.botonverMas {
  border: none;
  width: 300px;
  padding: 15px;
  background-color: var(--color-verde);
  color: var(--color-blanco);
  cursor: pointer;
  margin-top: 10px; /* Espacio entre el título y el botón */
  transition: transform 0.4s ease, background-color 0.5s;
}

.botonverMas.active {
  position: absolute;
  left: -150px;
  bottom: -90px;
  transition: bottom 0.5s ease 0.3s;
  transform: scale(1.1); /* Agranda el botón al hacer clic */
  background-color: var(--color-verde-hover);
  animation: slideDown 2s ease forwards;
}

.titulo-inicio.active h1 {
  animation: slideDown 0.6s ease forwards; /* Aplica la misma animación al título */
}

@keyframes slideDown {
  0% {
    transform: scale(1.1) translateY(-20px); /* Empieza un poco más arriba */
    opacity: 0; /* Empieza invisible */
  }
  100% {
    transform: scale(1.1) translateY(0); /* Termina en su posición final */
    opacity: 1; /* Termina visible */
  }
}

.descripcion {
  display: flex;
  flex-direction: row; /* Alinea los elementos en una columna */
  gap: 90px; /* Espacio entre cada elemento (ajusta según prefieras) */
  position: absolute;
  margin-top: 50px; /* Espacio entre los botones y la descripción */
  right: -800px;
  text-align: right; /* Alinea el contenido de texto a la derecha */
  transform: translateX(100%); /* Mueve el contenido a la derecha */
  transition: transform 0.5s ease; /* Suaviza la transición al moverse */
  list-style: none;
}

.descripcion.expand {
  transform: scale(1.6); /* Agranda el contenido al mostrarlo */
  max-height: 500px; /* Controla el tamaño máximo de expansión */
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
