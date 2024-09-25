<template>
  <transition name="fade">
    <div v-if="showContent.experiencia" class="habilidades">
      <main>
        <section id="experiencia">
          <div class="experienciaContenido">
            <h2 class="cargoTitulo">
              Desarrollador de Software - Meltec Comunicaciones
            </h2>
            <p class="fechaExperiencia">Abril 2024 - Actualidad</p>
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
.habilidades {
  display: flex;
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
  height: 50vh; /* Altura ajustable según tus necesidades */
  background-color: #f9f9f9; /* Color de fondo suave */
}

main {
  display: flex;
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
  height: 50vh; /* Altura ajustable según tus necesidades */
  background-color: #f9f9f9; /* Color de fondo suave */
}

#experiencia {
  width: 100%; /* Ancho completo para la sección */
}

.experienciaContenido {
  display: flex;
  flex-direction: column; /* Organizar en columna */
  align-items: flex-start; /* Alinear a la izquierda */
  text-align: left; /* Texto alineado a la izquierda */
  margin: 0; /* Eliminar márgenes por defecto */
  padding: 20px; /* Espaciado interno */
  background-color: white; /* Color de fondo blanco para el contenido */
  border-radius: 5px; /* Bordes redondeados */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

.cargoTitulo {
  font-size: 24px; /* Tamaño del título */
  font-weight: bold; /* Negrita para el título */
  margin-bottom: 5px; /* Espaciado debajo del título */
}

.fechaExperiencia {
  font-size: 16px; /* Tamaño del texto de fecha */
  color: #666; /* Color gris para la fecha */
}
</style>
