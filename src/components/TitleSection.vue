<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
  <div class="contenedor_padre">
    <div class="titulo-inicio">
      <img
        src="../assets/foto_perfil.jpg"
        alt="Jayson Vargas"
        class="imagen_perfil"
      />
      <p>¡Hola! Soy Jayson Vargas 👋</p>
      <h2 class="texto-gradiente">
        Construyendo, diseñando, y creando experiencias
      </h2>
      <h class="desc_titulo">
        Desarrollador de software con una visión clara: transformar ideas en
        soluciones digitales que realmente resuelvan problemas y mejoren la vida
        de los usuarios. Me apasiona crear aplicaciones que no solo funcionen
        bien, sino que sean intuitivas, innovadoras y visualmente atractivas.
      </h>
      <!--Soy desarrollador de software-->
    </div>
    <div class="botonesInicio">
      <button type="submit" class="botonTicket">
        <div class="icono">
          <font-awesome-icon icon="arrow-left" class="iconoFlecha" />
        </div>
        <span>¡Contáctame!</span>
      </button>
      <button type="submit" class="botonDestino">
        <span>¿Quién soy yo?</span>
        <svg>
          <rect x="0" y="0" fill="none"></rect>
        </svg>
      </button>
    </div>
  </div>

  <div class="scrollVerMas animate__animated animate__bounce">
    <a @click="scrollToSobreMi" class="iconoScrollLink">
      <font-awesome-icon
        icon="angles-down"
        class="iconoScroll"
      ></font-awesome-icon>
    </a>
    <p>Scrollea para ver más</p>
  </div>
  <!--
    <div class="contenedorBotonIniciar">
      <button
        @click="scrollToMedioSection"
        type="submit"
        class="botonIniciar animate__animated animate__swing"
      >
        <div class="icono">
          <font-awesome-icon icon="play" class="iconoFlecha" />
        </div>
        <router-link to="/MedioSection"></router-link>
      </button>
    </div>
-->
  <div class="redesSociales">
    <a href="https://github.com/JaysonV145" target="_blank">
      <i class="fa-brands fa-github"></i
    ></a>
    <a href="https://www.linkedin.com/in/jayson-vargas" target="_blank">
      <i class="fa-brands fa-linkedin-in"></i>
    </a>
    <a href="https://wa.link/8eu07e" target="_blank"
      ><i class="fa-brands fa-whatsapp"></i
    ></a>
    <a href="mailto:vjaison30@gmail.com" target="_blank"
      ><i class="fa-regular fa-envelope"></i
    ></a>
  </div>

  <!--Datalist hace que esten las opciones abajo como del historial
      <input list="planetas" />
      
      <option>saturno</option>
      <option>urano</option>
      <option>marte</option>
      <option>centaurus</option>
    </datalist>-->
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import MainLayout from "./MainLayout.vue";

library.add(faMagnifyingGlass, faArrowLeft, faPlay, faAnglesDown, faGithubAlt);
/*library.add(faArrowLeft);*/

export default {
  name: "TitleSection",
  components: {
    FontAwesomeIcon,
  },
  methods: {
    scrollToSobreMi() {
      const SobreMi = document.querySelector("#SobreMi");
      if (SobreMi) {
        SobreMi.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.contenedor_padre {
  display: flex;
  justify-content: center; /* Centra horizontalmente el contenedor */
  align-items: center;
  flex-direction: column;
}

@media (max-width: 768px) {
  .contenedor_padre {
    flex-direction: column; /* Mantiene la dirección en columna */
    padding: 10px; /* Reduce el espacio para pantallas pequeñas */
  }
}

/* Ajustes para pantallas aún más pequeñas, como teléfonos */
@media (max-width: 480px) {
  .contenedor_padre {
    height: auto;
    padding: 5px; /* Minimiza aún más el espacio */
  }
}

.titulo-inicio {
  position: relative;
  text-align: center;
  width: 750px;
  bottom: 100px;
  color: #f5efeb; /**c8d9e6**/
}

.titulo-inicio h2 {
  font-size: 65px;
  margin-top: 10px;
  font-weight: 600;
}

.texto-gradiente {
  font-size: 24px;
  font-weight: bold;
  /* background: linear-gradient(
    to right,
    #ffffff,
    rgba(218, 194, 194, 0)
  ); */

  color: var(--color-blanco);

  /*background-clip: text; /**Hace que el fondo (el gradiente) solo sea visible dentro del área del texto. */
  /*-webkit-text-fill-color: transparent; /* Hace que el texto sea transparente */
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

.desc_titulo {
  position: relative;
  bottom: 40px;
}

.imagen_perfil {
  width: 110px; /* Tamaño de la imagen */
  height: 110px; /* Asegura que sea cuadrada para el borde circular */
  border-radius: 50%; /* Hace la imagen circular */
  margin: 0 auto 0 auto; /* Centra la imagen y añade espacio debajo si se quiere */
  object-fit: cover; /* Asegura que la imagen se recorte correctamente si no es cuadrada */
  animation: scaleIn 1s ease-out, rotate 5s linear infinite;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.titulo-inicio .nombreTexto {
  font-size: 50px;
  font-weight: 400;
}

/* Media Queries para pantallas más pequeñas */
@media (max-width: 768px) {
  .titulo-inicio {
    position: relative;
    width: 365px;
    bottom: 120px;
  }

  .titulo-inicio h2 {
    font-size: 50px; /* Reduce el tamaño de la fuente en pantallas medianas */
  }

  .texto-gradiente {
    font-size: 20px; /* Reduce el tamaño del texto en pantallas medianas */
  }

  .imagen_perfil {
    width: 90px; /* Ajusta el tamaño de la imagen para pantallas más pequeñas */
    height: 90px;
  }

  .titulo-inicio .nombreTexto {
    font-size: 40px; /* Ajusta el tamaño del texto del nombre */
  }
}

@media (max-width: 480px) {
  .titulo-inicio {
    position: relative;
    width: 360px;
    bottom: 110px;
  }

  .titulo-inicio h2 {
    position: relative;
    bottom: 10px;
    margin-bottom: 50px;
    font-size: 36px; /* Reduce aún más el tamaño del título en pantallas muy pequeñas */
  }

  .texto-gradiente {
    font-size: 18px; /* Ajusta el tamaño del texto */
  }

  .imagen_perfil {
    width: 80px; /* Ajusta el tamaño de la imagen */
    height: 80px;
  }

  .desc_titulo {
    position: relative;
    bottom: 55px;
  }

  .titulo-inicio .nombreTexto {
    font-size: 30px; /* Ajusta el tamaño del nombre en pantallas pequeñas */
  }
}

.botonesInicio {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 50px;
  position: relative;
  bottom: 120px; /**Posición de botones  */
}

.botonTicket {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #004e7c, #00b8b8); /**PRUEBAS */
  border: none;
  color: var(--color-blanco);
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  overflow: hidden;
}

.botonTicket span {
  transition: 0.4s ease-in-out all;
  font-size: 15px;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  right: 0%;
}

.botonTicket:hover span {
  right: 50px;
}

.botonTicket .icono {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  right: 10px;
  transform: scale(0.45); /* Centra verticalmente el icon y tambien el tamaño */
  transition: 0.4s ease-in-out all; /*Transición de vuelta*/
  opacity: 0; /** Lo vuelve invisible*/
}

.botonTicket:hover .icono {
  transition: 0.4s ease-in-out all; /**Transición al pasar el mouse */
  right: 60px;
  opacity: 1;
}

.botonTicket svg {
  color: var(--color-blanco);
  width: 35px;
  height: 35px;
}

.botonTicket:hover {
  background-color: var(--color-gris-fondo);
  transition: 0.5s;
}

.botonDestino {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-blanco);
  padding: 15px;
  background-color: var(--color-gris-fondo);
  color: var(--color-blanco);
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  transition: 0.3 ease all;
}

.botonDestino span {
  position: relative;
  z-index: 2;
  transition: 0.3s ease all;
}

.botonDestino svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  fill: none;
}

/* Media Queries para pantallas más pequeñas */
@media (max-width: 768px) {
  .botonesInicio {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 500px;
    height: 50px;
    position: relative;
    bottom: 120px; /**Posición de botones  */
  }

  .botonTicket {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 100%;
    height: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #004e7c, #00b8b8); /**PRUEBAS */
    border: none;
    color: var(--color-blanco);
    cursor: pointer;
    margin: 5px 5px 5px 5px;
    overflow: hidden;
  }

  .botonTicket span {
    transition: 0.4s ease-in-out all;
    font-size: 15px;
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
    align-items: center;
    right: 0%;
  }

  .botonTicket:hover span {
    right: 50px;
  }

  .botonTicket .icono {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    right: 10px;
    transform: scale(
      0.45
    ); /* Centra verticalmente el icon y tambien el tamaño */
    transition: 0.4s ease-in-out all; /*Transición de vuelta*/
    opacity: 0; /** Lo vuelve invisible*/
  }

  .botonTicket:hover .icono {
    transition: 0.4s ease-in-out all; /**Transición al pasar el mouse */
    right: 60px;
    opacity: 1;
  }

  .botonTicket svg {
    color: var(--color-blanco);
    width: 35px;
    height: 35px;
  }

  .botonTicket:hover {
    background-color: var(--color-gris-fondo);
    transition: 0.5s;
  }

  .botonDestino {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-blanco);
    padding: 15px;
    background-color: var(--color-gris-fondo);
    color: var(--color-blanco);
    cursor: pointer;
    margin: 5px 5px 5px 5px;
    transition: 0.3 ease all;
  }

  .botonDestino span {
    position: relative;
    z-index: 2;
    transition: 0.3s ease all;
  }

  .botonDestino svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    fill: none;
  }
}

@media (max-width: 480px) {
  .botonesInicio {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 350px;
    height: 50px;
    position: relative;
    bottom: 145px; /**Posición de botones  */
  }

  .botonTicket {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 100%;
    height: 100%;
    padding: 10px;
    background: linear-gradient(135deg, #004e7c, #00b8b8); /**PRUEBAS */
    border: none;
    color: var(--color-blanco);
    cursor: pointer;
    margin: 5px 5px 5px 5px;
    overflow: hidden;
  }

  .botonTicket span {
    transition: 0.4s ease-in-out all;
    font-size: 15px;
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
    align-items: center;
    right: 0%;
    font-size: 12px;
  }

  .botonTicket:hover span {
    right: 50px;
  }

  .botonTicket .icono {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    right: 10px;
    transform: scale(
      0.45
    ); /* Centra verticalmente el icon y tambien el tamaño */
    transition: 0.4s ease-in-out all; /*Transición de vuelta*/
    opacity: 0; /** Lo vuelve invisible*/
  }

  .botonTicket:hover .icono {
    transition: 0.4s ease-in-out all; /**Transición al pasar el mouse */
    right: 60px;
    opacity: 1;
  }

  .botonTicket svg {
    color: var(--color-blanco);
    width: 35px;
    height: 35px;
  }

  .botonTicket:hover {
    background-color: var(--color-gris-fondo);
    transition: 0.5s;
  }

  .botonDestino {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-blanco);
    padding: 10px;
    background-color: var(--color-gris-fondo);
    color: var(--color-blanco);
    cursor: pointer;
    margin: 5px 5px 5px 5px;
    transition: 0.3 ease all;
    font-size: 12px;
  }

  .botonDestino span {
    position: relative;
    z-index: 2;
    transition: 0.3s ease all;
  }

  .botonDestino svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    fill: none;
  }
}

.botonDestino:hover rect {
  stroke-dashoffset: 0.8;
}

.fraseInicial {
  color: var(--color-blanco);
  overflow: hidden;
  display: inline-block;
  position: absolute;
  width: 219px;
  text-align: justify;
  font-size: 12px;
  right: 15px;
  bottom: 1px;
}

.fraseInicial h3 {
  opacity: 0.7;
}

.fraseInicial .botonesFrase {
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  cursor: pointer;
  color: var(--color-blanco);
  opacity: 0.7;
  transition: 0.3 ease all;
  margin-top: 30px;
  margin-bottom: 15px; /*MODIFICAR*/
}

.fraseInicial .botonesFrase ul {
  list-style: none;
  display: flex;
  position: relative;
  padding: 0;
  margin: 0;
}

.scrollVerMas {
  display: flex;
  position: absolute;
  left: 30px;
  cursor: pointer;
  bottom: 10px;
}

.scrollVerMas a {
  color: var(--color-blanco);
}

.scrollVerMas a:hover {
  background-color: transparent;
}

.scrollVerMas .iconoScroll {
  position: relative;
  bottom: -10px; /**Necesario, posición mejor alienada del botón con scrollea para ver más */
  height: 30px;
  margin-right: 15px;
  animation: animacionBotonScroll 2s infinite; /**Duración animacion */
}

@media (max-width: 480px) {
  .scrollVerMas {
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    bottom: 140px;
    margin-left: -30px;
    width: 360px;
  }

  .scrollVerMas a {
    color: var(--color-blanco);
  }

  .scrollVerMas a:hover {
    background-color: transparent;
  }

  .scrollVerMas .iconoScroll {
    position: relative;
    bottom: -10px; /**Necesario, posición mejor alineada del botón con scrollea para ver más */
    height: 30px;
    margin-right: 15px;

    animation: animacionBotonScroll 2s infinite; /**Duración animacion */
  }
}

@keyframes animacionBotonScroll {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(
      0
    ); /**Los porcentajes son como paradas en la animación, en estos momentos el elemento no se moverá y estara en su posición original */
  }
  40% {
    transform: translateY(
      -15px
    ); /**En este punto la animación, el elemento se moverá 10px hacia arriba */
  }
  60% {
    transform: translateY(
      -10px
    ); /**El elemento se moverá hacia arriba 5 pixeles, este es un rebote mas pequeño */
  }
}

.contenedorBotonIniciar {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  bottom: 10px;
  left: 50%;
}

.botonIniciar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 30px;
  background-color: var(--color-blanco);
  color: var(--color-gris-fondo);
  cursor: pointer;
  text-align: center;
  width: 50px; /* Ajusta el ancho del botón */
  height: 50px; /* Ajusta la altura del botón */
  border-radius: 50%; /* Hace que el botón sea circular */
  overflow: hidden;
}

.botonIniciar:hover {
  animation: jello-horizontal 0.9s both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

.botonIniciar:hover span {
  right: 50px;
}

.botonIniciar .icono {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  transform: scale(0.45); /* Centra verticalmente el icon y tambien el tamaño */
}

.botonIniciar svg {
  /**Tamaño icono */
  color: var(--color-gris-fondo);
  width: 35px;
  height: 35px;
}

.botonIniciar:hover {
  background-color: var(--color-verde-hover);
  transition: 0.5s;
}

.redesSociales {
  display: flex;
  position: absolute;
  justify-content: end;
  bottom: 12px;
  right: 10px;
}

.redesSociales i {
  color: var(--color-blanco);
  opacity: 0.7;
  margin-right: 25px;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;
}

.redesSociales i:hover {
  transform: rotate(360deg);
  color: #00b8b8;
}

.redesSociales a {
  background-color: transparent;
}

@media (max-width: 480px) {
  .redesSociales {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    bottom: 115px;
    width: 400px;
  }

  .redesSociales i {
    color: var(--color-blanco);
    opacity: 0.7;

    font-size: 20px;
    cursor: pointer;
  }

  .redesSociales a {
    background-color: transparent;
  }
}
</style>
