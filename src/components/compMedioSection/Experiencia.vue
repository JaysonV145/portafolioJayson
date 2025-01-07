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
            <h2 class="cargoTitulo">Desarrollador Full Stack</h2>
            <p>Turit</p>
            <p class="fechaExperiencia">Abril 2024 - Octubre 2024</p>
          </div>
          <div class="experienciaContenido">
            <h2 class="cargoTitulo">Desarrollador Full Stack</h2>
            <p>Turit</p>
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

.experiencia {
  display: flex;
  align-items: center;
  justify-content: center;
}

#experiencia {
  width: 800px;
  display: flex; /* Cambia a flex para colocar en filas horizontales */
  gap: 80px; /* Espacio entre cada columna */
  position: absolute;
  left: -130px;
}

.experienciaContenido {
  flex: 1; /* Distribuye el ancho de cada columna de manera uniforme */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 20px 30px;
  border-right: 2px solid #ccc;
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
