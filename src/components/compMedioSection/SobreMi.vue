<template>
  <transition name="fade">
    <p
      v-if="showContent.sobreMi"
      class="descripcion"
      :class="{ expand: showContent.sobreMi }"
    >
      Soy un desarrollador front-end apasionado por crear experiencias digitales
      intuitivas, innovadoras y visualmente impactantes. Con una sólida base en
      Vue.js y otras tecnologías modernas, me especializo en transformar ideas
      complejas en interfaces de usuario fluidas y funcionales. Mi enfoque está
      en la reactividad, la optimización del rendimiento y la usabilidad,
      asegurándome de que cada proyecto no solo luzca bien, sino que también
      ofrezca una experiencia de usuario excepcional. Mi trabajo abarca desde
      landing pages dinámicas hasta aplicaciones web interactivas, siempre con
      un enfoque en la innovación tecnológica y la resolución de problemas.
      Estoy comprometido con el aprendizaje continuo y la adopción de mejores
      prácticas, lo que me permite entregar código limpio, mantenible y
      escalable. Aquí podrás explorar algunos de mis proyectos más recientes,
      donde combino creatividad con habilidades técnicas para dar vida a
      soluciones digitales que superan expectativas. Si buscas un desarrollador
      dedicado que pueda llevar tus ideas al siguiente nivel, ¡estoy aquí para
      ayudarte!
    </p>
  </transition>
</template>

<script>
export default {
  props: {
    showContent: Object,
  },
};
</script>

<style scoped>
.section {
  margin: 20px 0;
  padding: 20px;
  display: flex;
  text-align: center;
}

.section h1 {
  font-size: 60px;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
</style>
