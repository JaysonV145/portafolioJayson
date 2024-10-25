<template>
  <transition name="fade">
    <div v-if="showContent.experiencia" class="habilidades">
      <main>
        <section id="experiencia">
          <div class="experienciaContenido">
            <h2 class="cargoTitulo">Desarrollador de Software</h2>
            <p>Meltec Comunicaciones</p>
            <p class="fechaExperiencia">Abril 2024 - Octubre 2024</p>
          </div>

          <div class="experienciaContenido">
            <h2 class="cargoTitulo">Desarrollador de Software</h2>
            <p>Meltec Comunicaciones</p>
            <p class="fechaExperiencia">Abril 2024 - Octubre 2024</p>
          </div>
        </section>
      </main>
    </div>
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
main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
}

.habilidades {
  display: flex;
  align-items: center;
  justify-content: center;
}

#experiencia {
  width: 100%;
}

.experienciaContenido {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 0;
  padding: 20px 30px;
  position: relative; /* Posicionamiento relativo para cada contenedor */
  border-right: 2px solid #ccc; /* Línea vertical en el lado derecho */
}

.cargoTitulo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.fechaExperiencia {
  font-size: 16px;
  color: #666;
}

/* Agregar espacio entre los elementos de experiencia */
.experienciaContenido + .experienciaContenido {
  margin-top: 20px;
}
</style>
