<template>
  <div class="containerPrincipal">
    <div id="Inicio" class="titleSection custom-margin-title">
      <TitleSection />
    </div>
    <div
      id="SobreMi"
      class="animate__animated animate__slideInU custom-margin-sobreMi"
    >
      <SobreMi />
    </div>
    <div
      id="habilidades"
      class="animate__animated animate__slideInUp custom-margin-habilidades"
    >
      <Habilidades />
    </div>
    <div id="experiencia" class="custom-margin-experiencia">
      <Experiencia />
    </div>
    <div id="proyectos" class="custom-margin-proyectos">
      <Proyectos />
    </div>
    <div id="contacto" class="custom-margin-contacto">
      <Contacto />
    </div>
    <div id="footer" class="custom-margin-footer"><Footer /></div>
  </div>
</template>

<script>
import TitleSection from "../components/TitleSection.vue";
import SobreMi from "../components/SobreMi.vue";
import Habilidades from "@/components/Habilidades.vue";
import Experiencia from "@/components/Experiencia.vue";
import Contacto from "@/components/Contacto.vue";
import Proyectos from "@/components/Proyectos.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    TitleSection,
    SobreMi,
    Habilidades,
    Experiencia,
    Proyectos,
    Contacto,
    Footer,
  },
  mounted() {
    const medioSection = document.querySelector("#medioSection");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            medioSection.classList.add("animate__slideInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(medioSection);
  },
};
</script>

<style scoped>
.containerPrincipal {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: white;
}

#Inicio {
  scroll-margin-top: 250px; /* Para que se vea bien y quede bien ubicado el scroll */
  padding: 1px 0; /* Espaciado interno para cada sección */
}

#SobreMi,
#habilidades,
#experiencia,
#proyectos,
#contacto,
#footer {
  scroll-margin-top: 100px; /* Para que se vea bien y quede bien ubicado el scroll */
  padding: 20px 0; /* Espaciado interno para cada sección */
}

/* Márgenes personalizables */
.custom-margin-title {
  margin-top: 250px; /* Cambia este valor según necesites */
}

@media (max-width: 480px) {
  .custom-margin-title {
    margin-bottom: -100px; /* Minimiza aún más el espacio */
  }
}

.custom-margin-habilidades {
  margin-top: 20px; /* Cambia este valor según necesites */
}

.custom-margin-experiencia {
  margin-top: 110px; /* Cambia este valor según necesites */
}

.custom-margin-proyectos {
  margin-top: 1px;
}

.custom-margin-contacto {
  margin-top: 1px;
}

.custom-margin-footer {
  margin-top: 1px;
}

.custom-margin-sobreMi {
  margin: 0; /**Margen importante de separación con el TITLSECTION */
}
</style>
