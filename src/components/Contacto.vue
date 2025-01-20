<template>
  <div class="contenedor-contacto">
    <div class="seccionizquierda">
      <h1 class="tituloSeccion">Contáctame</h1>
      <p class="descseccion">
        Si tienes una idea, un proyecto en mente o simplemente deseas conectar,
        no dudes en escribirme.
      </p>

      <div class="formContacto">
        <form @submit.prevent="enviarFormulario">
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
          <button type="submit" class="btn-enviar">Enviar</button>
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
    <div class="fondo-verde"></div>
  </div>
</template>
<script>
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
        alert("Formulario enviado con éxito");
      } catch (error) {
        console.error("Error:", error);
        alert("Hubo un error al enviar el formulario");
      }
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
  border-color: #007f9c;
  box-shadow: 0 0 5px rgba(0, 127, 156, 0.5);
}

.input-group .icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(168, 168, 168);
  transition: color 0.3s ease;
}

.input-group input:focus ~ .icon,
.input-group textarea:focus ~ .icon {
  color: #007f9c;
}

.formContacto form input {
  border: none;
  padding: 25px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(168, 168, 168);
  background-color: var(--color-blanco);
  outline: none;
}

.formContacto form textarea {
  border: none;
  padding: 25px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(168, 168, 168);
  background-color: var(--color-blanco);
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
  width: 100%;
  padding: 15px;
  background-color: #007f9c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-enviar:hover {
  background-color: #005f7a;
  transform: scale(1.05);
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

@media (max-width: 480px) {
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
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    max-width: 800px; /* Limita el ancho máximo */
    margin: 0 auto; /* Centra horizontalmente dentro del contenedor */
  }

  .formContacto form {
    display: flex;
    width: 30%;
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
    border-color: #007f9c;
    box-shadow: 0 0 5px rgba(0, 127, 156, 0.5);
  }

  .input-group .icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(168, 168, 168);
    transition: color 0.3s ease;
  }

  .input-group input:focus ~ .icon,
  .input-group textarea:focus ~ .icon {
    color: #007f9c;
  }

  .formContacto form input {
    border: none;
    padding: 25px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(168, 168, 168);
    background-color: var(--color-blanco);
    outline: none;
  }

  .formContacto form textarea {
    border: none;
    padding: 25px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(168, 168, 168);
    background-color: var(--color-blanco);
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
    width: 100%;
    padding: 15px;
    background-color: #007f9c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .btn-enviar:hover {
    background-color: #005f7a;
    transform: scale(1.05);
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
}
</style>
