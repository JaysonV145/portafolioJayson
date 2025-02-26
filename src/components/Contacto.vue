<template>
  <div class="contenedor-contacto">
    <ParticlesBackground />
    <div class="seccionizquierda">
      <h1 class="tituloSeccion">Contáctame</h1>
      <p class="descseccion">
        Si tienes una idea, un proyecto en mente o simplemente deseas conectar,
        no dudes en escribirme.
      </p>

      <div class="formContacto">
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <input v-model="Nombre" type="text" placeholder="Nombre" required />
            <span class="icon"><font-awesome-icon icon="user" /></span>
          </div>
          <div class="input-group">
            <input v-model="Email" type="email" placeholder="Email" required />
            <span class="icon"><font-awesome-icon icon="envelope" /></span>
          </div>
          <div class="input-group">
            <textarea
              v-model="Mensaje"
              placeholder="Mensaje"
              required
            ></textarea>
            <span class="icon"><font-awesome-icon icon="comment" /></span>
          </div>
          <button type="submit" class="btn-enviar"><span>Enviar</span></button>
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
      </div>
    </div>
  </div>
</template>
<script>
import ParticlesBackground from "@/components/ParticlesBackground.vue";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faComment,
  faEnvelope,
  faEnvelopeOpen,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faMagnifyingGlass,
  faArrowLeft,
  faEnvelopeOpen,
  faPhone,
  faUser,
  faEnvelope,
  faComment
);
export default {
  name: "Habilidades",
  components: {
    FontAwesomeIcon,
    ParticlesBackground,
  },
  props: {
    showContent: Object,
  },

  data() {
    return {
      Nombre: "",
      Email: "",
      Mensaje: "",
    };
  },
  methods: {
    async submitForm() {
      if (!this.Nombre || !this.Email || !this.Mensaje) {
        Swal.fire({
          icon: "warning",
          title: "¡Oops!",
          text: "Por favor, completa todos los campos.",
        });
        return;
      }
      const apiKey =
        "patrUhgNVRedcpNpZ.b6ff194640dd41f5654f830a1fffabe9a2b23332ba0080add924a6eb8e5fcba0";
      const baseId = "appri9AFq9NWfIjRw";
      const tableName = "contactosPortafolio";

      const data = {
        records: [
          {
            fields: {
              Nombre: this.Nombre,
              Email: this.Email,
              Mensaje: this.Mensaje,
            },
          },
        ],
      };

      try {
        const response = await axios.post(
          `https://api.airtable.com/v0/${baseId}/${tableName}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Success:", response.data);
        Swal.fire({
          icon: "success",
          title: "¡Formulario enviado!",
          text: "Tu mensaje ha sido enviado correctamente. ¡Estaré encantado de conocerte!",
        });

        // Resetear los campos del formulario
        this.Nombre = "";
        this.Email = "";
        this.Mensaje = "";
      } catch (error) {
        console.error("Error:", error);
        // Alerta de error
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "Hubo un error al enviar el formulario, inténtalo nuevamente.",
        });
      }
    },
  },
};
</script>

<style scoped>
/* Estilos Generales */

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Fondo debajo del formulario */
  pointer-events: none; /* Desactiva la interacción del usuario */
}
.contenedor-contacto {
  position: relative; /* Necesario para posicionar elementos absolutos dentro */
  padding: 2rem;
  background-color: var(--color-blanco);
  color: var(--color-negro);
  text-align: start;
  width: 100%;
  height: 600px;
  overflow: hidden;
  z-index: 1;
}

.seccionizquierda {
  margin-left: 180px;
}

.descseccion {
  width: 650px;
  font-size: 18px;
  color: var(--color-gris-fondo);
}

.contenedor-info-contacto {
  position: absolute; /* Permite posicionarlo dentro del contenedor */
  top: 50%; /* Centrado verticalmente */
  right: 0; /* Pegado a la derecha */
  transform: translateY(-80px); /* Ajusta la posición al centro exacto */
  display: flex;
  flex-direction: column; /* Si deseas organizar contenido vertical */
  align-items: start;
  background-color: var(--color-negro);
  padding: 30px;
  color: var(--color-blanco);
  width: 35%;
  height: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease; /**Movimiento de tarjeta */
  transform: translateY(-50px); /**Posición */
  z-index: 2;
  border-radius: 15px;
  animation: movCard 1.5s infinite;
}

@keyframes movCard {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px); /* El botón sube y baja */
  }
}

.contenedor-info-contacto:hover {
  transform: translateY(-90px);
}

.contenedor-info-contacto h1 {
  font-size: 2rem;
  transition: transform 0.3s ease;
}

.contenedor-info-contacto span {
  font-size: 25px;
  margin-right: 10px;
}

/* Iconos dentro de la tarjeta */
.contenedor-info-contacto p span {
  margin-right: 12px;
  font-size: 1.3rem;
  color: #2c8480; /* Color verde para los iconos */
  transition: transform 0.3s ease;
}

.contenedor-info-contacto .icon:hover {
  transform: rotate(360deg);
  color: #1d8a6d; /* Color verde más oscuro al hacer hover */
}

.fondo-verde {
  position: absolute;
  top: 50%; /* Posición relativa al contenedor principal */
  right: 0; /* Pegado al lado derecho */
  transform: translateY(-50%); /* Centrado vertical */
  background: #2c8480;
  width: 20%; /* Ocupa el 10% del ancho */
  height: 100%; /* Asegúrate de que coincida con la altura del contenedor negro */
  animation: moverFondo 8s infinite alternate;
  z-index: 1; /* Colocado detrás del contenedor negro */
}

@keyframes moverFondo {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Título */
.tituloSeccion {
  font-size: 4rem;
  margin-bottom: 2rem;
  color: var(--color-negro);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.formContacto form {
  display: flex;
  width: 30%;
  flex-direction: column;
  animation: slideIn 1s ease-out; /* Animación de deslizamiento desde la derecha */
}

@keyframes focusAnimation {
  0% {
    transform: scale(1);
    border-color: rgb(168, 168, 168);
  }
  50% {
    transform: scale(1.05);
    border-color: #007f9c;
  }
  100% {
    transform: scale(1);
    border-color: rgb(168, 168, 168);
  }
}

.input-group {
  position: relative;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 15px 40px 15px 15px;
  border: 1px solid rgb(168, 168, 168);
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  border-color: #2c8480;
  box-shadow: 0 0 5px #2c8480;
  animation: focusAnimation 0.5s ease; /* Animación al hacer foco */
}

.input-group .icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  transition: color 0.3s ease;
}

.input-group input:focus ~ .icon,
.input-group textarea:focus ~ .icon {
  color: #2c8480;
}

.formContacto form input {
  border: none;
  padding: 25px;
  margin-bottom: 10px;
  border-bottom: 2px solid rgb(168, 168, 168);
  background-color: var(--color-blanco);
  outline: none;
}

.formContacto form textarea {
  border: none;
  padding: 25px;
  margin-bottom: 10px;
  border-bottom: 2px solid rgb(168, 168, 168);
  background-color: var(--color-blanco);
  outline: none;
}

.formContacto form textarea:focus {
  border: none;
  border-bottom: 3px solid #2c8480; /* Cambia el color al hacer foco */
  transition: border-bottom-color 0.3s ease-in-out; /* Transición suave */
}

.formContacto form input:focus {
  border: none;
  border-bottom: 3px solid #2c8480; /* Cambia el color al hacer foco */
  transition: border-bottom-color 0.3s ease-in-out; /* Transición suave */
}

.formContacto form ::placeholder {
  font-size: 15px;
}

.formContacto form button {
  margin: 0 auto;
  width: 470px;
  padding: 15px;
  background-color: #2c8480;
  color: #fff; /* Texto blanco */
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra inicial */
  position: relative; /* Necesario para el efecto glow */
  overflow: hidden; /* Oculta el "glow" que sobresale */
  z-index: 1;
}
@keyframes bounce {
  0% {
    transform: translateY(5px) scale(1); /* Movimiento ligero hacia abajo */
  }
  50% {
    transform: translateY(-5px) scale(1.02); /* Movimiento hacia arriba y aumento de tamaño */
  }
  100% {
    transform: translateY(5px) scale(1); /* Regresa a la posición inicial */
  }
}

.formContacto form button::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 80%
  );
  animation: pulsar 2.5s infinite;
  z-index: -1; /* Detrás del botón */
  transition: opacity 0.3s;
}

/* Animación pulsante */
@keyframes pulsar {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

.btn-enviar:hover {
  background-color: #2c8480;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4), 0 0 15px; /* Brillo adicional */
  transform: translateY(-3px) scale(1.03); /* Eleva y agranda ligeramente */
}

.btn-enviar:active {
  transform: translateY(0) scale(1); /* Vuelve a la posición inicial */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* Reduce la sombra */
}

.btn-enviar span {
  display: inline-block;
  position: relative;
}

.btn-enviar:hover span {
  animation: wave 0.6s infinite;
}

/* Animación de onda en el texto */
@keyframes wave {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .contenedor-contacto {
    position: relative; /* Necesario para posicionar elementos absolutos dentro */
    padding: 2rem;
    background-color: var(--color-blanco);
    color: var(--color-negro);
    text-align: start;
    width: 300px;
    height: 590px;
  }

  .seccionizquierda {
    margin-left: -20px;
  }

  .descseccion {
    width: 100%;
    font-size: 18px;
  }

  .contenedor-info-contacto {
    display: none;
    position: relative; /* Permite posicionarlo dentro del contenedor */
    top: 20%; /* Centrado verticalmente */
    right: 0; /* Pegado a la derecha */
    transform: translateY(10%); /* Ajusta la posición al centro exacto */
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
    background: #2c8480;
    width: 0; /* Ocupa el 10% del ancho */

    z-index: 1; /* Colocado detrás del contenedor negro */
  }

  /* Título */
  .tituloSeccion {
    font-size: 4rem;
    margin-bottom: 2rem;
    color: var(--color-negro);
  }

  .formContacto form {
    display: flex;
    width: 280px;
    flex-direction: column;
  }

  .input-group {
    position: relative;
  }

  .input-group input,
  .input-group textarea {
    width: 100%;
    padding: 15px 40px 15px 15px;
    border: 1px solid rgb(168, 168, 168);
    border-radius: 5px;
    outline: none;
    transition: all 0.3s ease;
  }

  .input-group input:focus,
  .input-group textarea:focus {
    border-color: #2c8480;
    box-shadow: 0 0 5px #2c8480;
  }

  .input-group .icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-gris-fondo);
    transition: color 0.3s ease;
  }

  .input-group input:focus ~ .icon,
  .input-group textarea:focus ~ .icon {
    color: #2c8480;
  }

  .formContacto form input {
    border: none;
    padding: 25px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(168, 168, 168);
    background-color: #f5efeb;
    outline: none;
  }

  .formContacto form textarea {
    border: none;
    padding: 25px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(168, 168, 168);
    background-color: #f5efeb;
    outline: none;
  }

  .formContacto form textarea:focus {
    border: none;
    border-bottom: 1px solid rgb(126, 126, 126); /* Cambia el color al hacer foco */
    transition: border-bottom-color 0.3s ease-in-out; /* Transición suave */
  }

  .formContacto form input:focus {
    border: none;
    border-bottom: 1px solid rgb(126, 126, 126); /* Cambia el color al hacer foco */
    transition: border-bottom-color 0.3s ease-in-out; /* Transición suave */
  }

  .formContacto form button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    padding: 15px;
    background-color: #2c8480;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin: 0 auto; /* Esto centra el botón horizontalmente */
  }

  .btn-enviar:hover {
    background-color: #2c8480;
    transform: scale(1.05);
  }

  .formContacto form ::placeholder {
    font-size: 15px;
  }
}
</style>
