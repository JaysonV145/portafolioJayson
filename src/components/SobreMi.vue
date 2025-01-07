<template>
  <div class="contenedor-contacto">
    <div class="lado-izquierdo">
      <!--<p class="sobreMi">Sobre mí</p>-->
      <h1 class="titulo">Perfil profesional</h1>
      <hr class="divider" />
      <p class="descripcion">
        Soy un desarrollador de software apasionado por diseñar y construir
        experiencias digitales impactantes y funcionales. Me especializo en
        crear interfaces intuitivas, optimizar el rendimiento y brindar
        soluciones innovadoras. Mi compromiso con la excelencia garantiza
        productos visualmente atractivos y con una experiencia de usuario
        excepcional.
      </p>

      <div class="botonesCV">
        <div class="btn-4" @click="descargarCV">
          <div class="button-wrapper">
            <div class="text"><span>Descargar CV</span></div>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <button class="botonCV">
          <div class="icono">
            <font-awesome-icon icon="arrow-left" class="iconoFlecha" />
          </div>
          <span>Servicios</span>
        </button>
      </div>
    </div>
    <div class="lado-derecho">
      <h1 class="tituloDerecho">Formación académica</h1>
      <div class="tarjetas">
        <div
          class="tarjeta"
          v-for="(estudio, index) in estudios"
          :key="'estudio-' + index"
        >
          <FontAwesomeIcon :icon="estudio.icono" class="icono" />
          <h2>{{ estudio.titulo }}</h2>
          <p>{{ estudio.nivel }}</p>
          <p>{{ estudio.descripcion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLaptopCode,
  faRocket,
  faPaintBrush,
  faGraduationCap,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faLaptopCode, faRocket, faPaintBrush, faGraduationCap, faLanguage);

export default {
  name: "SobreMi",
  components: {
    FontAwesomeIcon,
  },
  methods: {
    descargarCV() {
      // Crear un enlace dinámico para la descarga
      const link = document.createElement("a");
      link.href = "/CV Jayson.pdf"; // Ruta al archivo del CV (ajústalo según tu estructura de archivos)
      link.download = "CV_Jayson.pdf"; // Nombre con el que se descargará el archivo
      link.click(); // Simular un clic para descargar el archivo
    },
  },
  data() {
    return {
      estudios: [
        {
          titulo: "Desarrollador de Software",
          descripcion: "Julio 2022 - Octubre 2024",
          nivel: "SENA - Tecnología en Análisis y Desarrollo de Software",
          icono: "graduation-cap",
        },
        {
          titulo: "Curso de Inglés Intermedio a Avanzado",
          descripcion: "Junio 2024 - Actualidad",
          nivel: "Smart Academia de Idiomas",
          icono: "language",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contenedor-contacto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Arial", sans-serif;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.lado-izquierdo {
  display: flex;
  flex-direction: column;
}

.sobreMi {
  position: relative;
  font-size: 1.2rem;
  color: var(--color-negro);
  max-width: 90%;
  text-transform: uppercase;
}

.titulo {
  font-size: 60px;
  color: var(--color-negro);
  margin-bottom: 1rem;
  font-weight: 500;
}

.descripcion {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  max-width: 90%;
}

.divider {
  width: 250px;
  border: none;
  border-top: 3px solid var(--color-negro);
  margin: 10px 0;
  border-radius: 10px;
}

.botonesCV {
  display: flex;
}

.botonCV {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--color-negro);
  width: 180px;
  padding: 15px;
  border: 1px solid var(--color-negro);
  border-radius: 15px;
  cursor: pointer;
  margin-left: 15px;
  overflow: hidden;
}

.botonCV span {
  transition: 0.4s ease-in-out all;
  font-size: 15px;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  right: 0%; /**No borrar esto porque esto es como un suavizante para que el span se vaya lento */
}

.botonCV:hover span {
  right: 50px;
}

.botonCV .icono {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  right: 10px;
  bottom: -12px; /**Posición del botón */
  transform: scale(0.45); /* Centra verticalmente el icon y tambien el tamaño */
  transition: 0.4s ease-in-out all; /*Transición de vuelta*/
  opacity: 0; /** Lo vuelve invisible*/
  color: var(--color-negro);
}

.botonCV:hover .icono {
  transition: 0.4s ease-in-out all; /**Transición al pasar el mouse */
  right: 60px;
  opacity: 1;
}

.verProyectosboton {
  background-color: transparent;
  color: var(--color-negro);
  border: 1px solid var(--color-negro);
  width: 180px;
  padding: 5px;

  border-radius: 15px;
  cursor: pointer;
  margin-right: 15px;
}

.btn-4 {
  scale: 1;
  width: 180px;
  background: var(--color-gris-fondo);
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-4::after,
.btn-4::before {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
}

.btn-4 .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-4 .button-wrapper,
.btn-4 .text,
.btn-4 .icon {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
}

.btn-4 .text {
  font-size: 15px;
  top: 0;
}

.btn-4 .text,
.btn-4 .icon {
  transition: top 0.5s;
}

.btn-4 .icon {
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-4 .icon svg {
  width: 18px;
  height: 18px;
}

.btn-4:hover {
  background: var(--color-gris-fondo);
}

.btn-4:hover .text {
  top: -100%;
}

.btn-4:hover .icon {
  top: 0;
}

.btn-4:hover:before,
.btn-4:hover:after {
  opacity: 1;
  visibility: visible;
}

.btn-4:hover:after {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
}

.btn-4:hover:before {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
}

.lado-derecho {
  display: flex;
  flex-direction: column;
}

.lado-derecho .tituloDerecho {
  font-size: 60px;
  color: var(--color-negro);
}

.tarjetas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.tarjeta {
  padding: 2rem 1.5rem;
  max-width: 300px;
  background-color: var(--color-gris-fondo);
  color: hsl(0, 0%, 90%);
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
}

.tarjeta::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #004e7c, #007f9c);
  clip-path: circle(18.4% at 100% 0);
  transition: clip-path 0.5s ease;
}

.tarjeta:hover::before {
  transform: scale(1);
  z-index: -1; /**Para que no tape la letra y el contenido al pasar el mouse */
}

.tarjeta:hover {
  transform: translateY(0);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.tarjeta-content {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.card-cta {
  width: fit-content;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: hsl(0, 0%, 90%);

  svg {
    padding-left: 0.25rem;
  }

  svg path {
    fill: hsl(0, 0%, 90%);
  }
}

:hover {
  &::before {
    clip-path: circle(150% at 100% 0%);
  }
}

:nth-child(2) {
  &::before {
    background-color: #03624c;
  }
}
:nth-child(3) {
  &::before {
    background-color: hsl(216, 100%, 40%);
  }
}

.icono {
  font-size: 2.5rem;
  color: var(--color-blanco);
  margin-bottom: 1rem;
}

.tarjeta h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-blanco);
  font-weight: bold;
}

.tarjeta h2:hover {
  color: var(--color-blanco);
}

.tarjeta p {
  font-size: 1rem;
  color: var(--color-blanco);
}
</style>
