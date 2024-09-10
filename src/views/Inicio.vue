<template>
  <div class="containerPrincipal">
    <TitleSection></TitleSection>
    <div id="medioSection" class="animate__animated animate__slideInUp">
      <MedioSection></MedioSection>
    </div>
  </div>
</template>

<!--Mala práctica: <script src="../view-logic/Home.js"></script>
-->

<script>
import Home from "../view-logic/Home.js";

import TitleSection from "../components/TitleSection.vue";
import MedioSection from "../components/compMedioSection/MedioSection.vue";
import Carousel from "@/components/Carousel.vue";
import ProjectSection from "@/components/ProjectSection.vue";

export default {
  components: {
    TitleSection,
    MedioSection,
    ProjectSection,
  },
  mounted() {
    const MedioSection = document.querySelector("#medioSection");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            MedioSection.classList.add("animate__slideInUp");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(medioSection);
  },
};
</script>

<style scoped>
.containerPrincipal {
  flex-direction: column;
  margin-bottom: 50px;
  width: 100%;
  height: 100%; /* Asegura que el contenedor ocupe la altura completa de la ventana */
  color: white; /* Asegura que el texto sea visible sobre la imagen de fondo */
}

.containerPrincipal > * {
  /** Aplican espacio con el * a cada hijo de containerPrincipal/ */
  margin-top: 200px; /* Espacio entre cada componente */
}
</style>
