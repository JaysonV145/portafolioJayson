<template>
  <div class="contenedor-contacto">
    <div class="seccionizquierda">
      <h1 class="tituloSeccion">Contáctame</h1>
      <p class="descseccion">
        Si tienes una idea, un proyecto en mente o simplemente deseas conectar,
        no dudes en escribirme.
      </p>

      <div class="formContacto">
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mensaje" />
          <button><p>Enviar</p></button>
        </form>
      </div>
      <div class="contenedor-info-contacto">
        <h1>información personal</h1>
        <p>
          <span><font-awesome-icon icon="envelope-open" /></span
          >vjaison30@gmail.com
        </p>
        <p>
          <span><font-awesome-icon icon="phone" /></span>+57 3224283163
        </p>
        <p>LinkedIn</p>
      </div>
    </div>
    <div class="fondo-verde"></div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEnvelopeOpen,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faMagnifyingGlass, faArrowLeft, faEnvelopeOpen, faPhone);
export default {
  name: "Habilidades",
  components: {
    FontAwesomeIcon,
  },
  props: {
    showContent: Object,
  },

  data() {
    return {
      showDetails: {
        exp1: false,
        exp2: false,
      },
    };
  },
  methods: {
    toggleDetails(exp) {
      this.showDetails[exp] = !this.showDetails[exp];
    },
  },
};
</script>

<style scoped>
/* Estilos Generales */
.contenedor-contacto {
  position: relative; /* Necesario para posicionar elementos absolutos dentro */
  padding: 2rem;
  background-color: var(--color-blanco);
  color: var(--color-negro);
  text-align: start;
  width: 100%;
  height: 500px;
}

.seccionizquierda {
  margin-left: 180px;
}

.descseccion {
  width: 650px;
  font-size: 18px;
  color: rgb(148, 146, 146);
}

.contenedor-info-contacto {
  position: absolute; /* Permite posicionarlo dentro del contenedor */
  top: 50%; /* Centrado verticalmente */
  right: 0; /* Pegado a la derecha */
  transform: translateY(-50%); /* Ajusta la posición al centro exacto */
  display: flex;
  flex-direction: column; /* Si deseas organizar contenido vertical */
  align-items: start;
  background-color: var(--color-negro);
  padding: 2rem;
  color: var(--color-blanco);
  width: 35%;
  height: 350px;
  z-index: 2;
}

.contenedor-info-contacto span {
  font-size: 25px;
  margin-right: 10px;
}

.fondo-verde {
  position: absolute;
  top: 50%; /* Posición relativa al contenedor principal */
  right: 0; /* Pegado al lado derecho */
  transform: translateY(-50%); /* Centrado vertical */
  background: linear-gradient(135deg, #004e7c, #007f9c);
  width: 20%; /* Ocupa el 10% del ancho */
  height: 100%; /* Asegúrate de que coincida con la altura del contenedor negro */
  z-index: 1; /* Colocado detrás del contenedor negro */
}

/* Título */
.tituloSeccion {
  font-size: 4rem;
  margin-bottom: 2rem;
  color: var(--color-negro);
}

/* Grid de Proyectos */
.proyectos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 800px; /* Limita el ancho máximo */
  margin: 0 auto; /* Centra horizontalmente dentro del contenedor */
}

.formContacto form {
  display: flex;
  width: 30%;
  flex-direction: column;
}

.formContacto form input {
  border: none;
  padding: 25px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(168, 168, 168);
  background-color: var(--color-blanco);
  outline: none;
}

.formContacto form input:focus {
  border: none;
  border-bottom: 1px solid rgb(126, 126, 126); /* Cambia el color al hacer foco */
  transition: border-bottom-color 0.3s ease-in-out; /* Transición suave */
}

.formContacto form button {
  border: none;
  background-color: var(--color-negro);
  color: var(--color-blanco);
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
}

.formContacto form button:hover {
  background-color: #1a1919;
  transition: 0.5s;
}

.formContacto form p {
  font-weight: bold;
}

.formContacto form ::placeholder {
  font-size: 15px;
  font-weight: bold;
}

/* Tarjeta de Proyecto */
.card-proyecto {
  background-color: #181c23;
  width: 370px;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  display: flex;
  flex-direction: column;
}

/* Imagen del Proyecto */
.imagen-proyecto {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: -20px;
}

/* Descripción del Proyecto */
.descripcion-proyecto {
  padding: 1rem;
  flex-grow: 1;
}

.descripcion-proyecto h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-blanco);
}

.descripcion-proyecto p {
  font-size: 1rem;
  color: var(--color-blanco);
  opacity: 0.8;
}

.opcionesProyecto {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Espacio adicional entre botones */
  max-width: 600px; /* Ajusta el ancho del contenedor si es necesario */
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 15px;
}

.opcionesProyecto button {
  display: flex;
  justify-content: center;
  background: #2d3131;
  width: 110px;
  height: 25px;
  border: none;
  border-radius: 10px;
  color: var(--color-blanco);
  padding: 5px;
  cursor: pointer;
}

.opcionesProyecto a {
  color: var(--color-blanco);
  text-decoration: none;
}

.opcionesProyecto button:hover {
  background-color: var(--color-blanco);
  color: var(--color-negro);
  transition: 0.5s;
}

.opcionesProyecto button:hover a {
  color: var(--color-negro); /* Color negro cuando el botón es hover */
  text-decoration: none;
}

.opcionesProyecto span {
  margin-right: 10px;
}

/* Hover en la Tarjeta */
.card-proyecto:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
</style>
