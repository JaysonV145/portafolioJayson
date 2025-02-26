<template>
  <div>
    <div class="principal-container">
      <h1 class="tituloSeccion">Experiencia profesional</h1>
      <div class="card">
        <div class="icon-container">
          <font-awesome-icon icon="fas fa-laptop-code" />
        </div>

        <div class="card-content">
          <h1>Desarrollador Full-Stack</h1>
          <h4>Turit</h4>
          <p class="fecha">Octubre 2024 - Diciembre 2024</p>

          <div class="description">
            <h3>Responsabilidades:</h3>
            <p>
              Desarrollo de interfaces web interactivas y optimización de flujos
              de trabajo internos.
            </p>
            <p>
              Implementación de soluciones no-code/low-code con herramientas
              como Bubble.io, Make, Zapier y Airtable.
            </p>
            <p>Gestión de proyectos y control de versiones con GitHub.</p>
          </div>

          <div class="skills">
            <ul>
              <li><p>Vue.js</p></li>
              <li><p>JavaScript</p></li>
              <li><p>CSS</p></li>
            </ul>
          </div>
          <div class="buttons">
            <button class="botonContactar">
              <a href="#contacto"><span>Conoce mi experiencia</span></a>
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="icon-container">
          <font-awesome-icon icon="fas fa-laptop-code" />
        </div>

        <div class="card-content">
          <h1>Desarrollador de software</h1>
          <h4>Meltec</h4>
          <p class="fecha">Marzo 2024 - Octubre 2024</p>

          <div class="description">
            <h3>Responsabilidades:</h3>
            <p>
              Desarrollo de aplicaciones web e intranet corporativa con Vue.js,
              HTML, CSS y JavaScript, creando interfaces intuitivas y mejorando
              la comunicación interna.
            </p>
            <p>
              Automatización de procesos mediante herramientas de IA (Make) y
              desarrollo de un bot conversacional con Voiceflow para soporte
              técnico automatizado.
            </p>
            <p>Gestión de proyectos y control de versiones con GitHub.</p>
          </div>

          <div class="skills">
            <ul>
              <li><p>Vue.js</p></li>
              <li><p>JavaScript</p></li>
              <li><p>CSS</p></li>
            </ul>
          </div>
          <div class="buttons">
            <button class="botonContactar">
              <a href="#contacto"><span>Conoce mi experiencia</span></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLaptopCode, faPalette } from "@fortawesome/free-solid-svg-icons";

library.add(faLaptopCode, faPalette);

export default {
  name: "Habilidades",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      experiences: [
        {
          title: "Desarrollador Full-Stack",
          company: "Turit",
          duration: "Octubre 2024 - Diciembre 2024",
          description: [
            "🚀 Gestión de procesos internos: Desarrollo y gestión de procesos internos con CRM (GoHighlevel) optimizando flujos y reportes.",
            "💻 Desarrollo web responsivo: Creación de interfaces funcionales con HTML, CSS, JavaScript y Bootstrap.",
            "🔧 Optimización de tareas: Mejora de la productividad mediante Google Apps Script.",
            "🌐 Soluciones no-code/low: Implementación de soluciones no-code/low-code con Bubble.io, Airtable y automatizaciones con Make, Zapier y Pipedream, creando sitios web dinámicos y funcionales.",
            "📝 Documentación y mantenimiento: Gestión de proyectos y control de versiones mediante GitHub.",
          ],
          icon: "fas fa-laptop-code",
          skills: [{ name: "Vue.js" }, { name: "JavaScript" }, { name: "CSS" }],
          expanded: false,
        },
        {
          title: "Desarrollador de Software",
          company: "Meltec Comunicaciones",
          duration: "Marzo 2024 - Octubre 2024",
          description: [
            "🚀 Desarrollo web: Creación de aplicaciones con HTML, CSS, JavaScript, Vue.js y Bootstrap para interfaces intuitivas.",
            "🌐 Intranet: Diseño y desarrollo de una intranet con Vue.js para mejorar la comunicación interna.",
            "🛠️ Aplicación no-code: Implementación de soluciones no-code con AppSheet para optimizar procesos.",
            "🤖 Bot conversacional: Desarrollo de un bot con Voiceflow integrado a APIs externas para mejorar el soporte técnico.",
            "⚙️ Automatización: Uso de herramientas de IA como Make para automatizar tareas manuales y mejorar la eficiencia.",
          ],
          icon: "fas fa-palette",
          skills: [{ name: "Figma" }, { name: "Vue.js" }, { name: "CSS" }],
          expanded: false,
        },
      ],
    };
  },
  methods: {
    showDetails(index) {
      // Mostrar el contenido al pasar el mouse sobre la tarjeta
      this.experiences[index].expanded = true;
    },
    hideDetails(index) {
      // Ocultar el contenido al quitar el mouse
      this.experiences[index].expanded = false;
    },
  },
};
</script>

<style scoped>
.principal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 750px;
  background-color: var(--color-blanco);
  flex-wrap: wrap;
  gap: 40px;
  position: relative;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.tituloSeccion {
  font-size: 60px;
  color: var(--color-negro);

  text-align: center;
  position: absolute;
  top: -10px; /* Ajusta la posición hacia arriba */

  margin-bottom: 15px;
  animation: pulse 2s infinite;
}

.card {
  width: 500px;
  height: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.card-content {
  padding: 24px;
  text-align: center;
}

.icon-container {
  font-size: 3rem;
  color: #2c8480;
  margin-bottom: -10px;
  margin-top: 15px;
  transition: transform 0.3s ease;
}

.card:hover .icon-container {
  transform: rotate(15deg);
}

.description {
  margin-top: 15px;
  font-size: 14px;
  color: #777;
}

.card-content h1 {
  color: #555;
  margin: 0;
  font-size: 1.5rem;
}

.card-content h4 {
  color: #555;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
}

.card-content p {
  font-size: 15px;
  color: #555;
  margin-bottom: 15px;
  margin: 10px 0;
}
.card-content .fecha {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 16px;
}

.card-content span {
  font-size: 15px;
  color: #555;
  padding: 15px;
}

.skills {
  margin-top: 20px;
  padding: 5px;
  border-radius: 5px;
  display: flex; /* Usamos flexbox para centrar */
  justify-content: center; /* Centrar horizontalmente */
  align-items: center;
  text-align: center;
}

.skills ul {
  list-style: none;
  display: flex; /* Disposición en fila */
  padding: 0;
  margin: 0;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.skills li {
  width: 100px;
  background-color: var(--color-negro); /* Fondo oscuro */
  padding: -10px;
  border-radius: 5px;
  color: white; /* Color de texto blanco para resaltar sobre fondo oscuro */
  margin: 0 1px; /* Espaciado entre las habilidades */
}

.skills p {
  color: var(--color-blanco);
  font-size: 13px;
}

.buttons {
  margin-top: 10px;
}

.buttons p:hover {
  color: var(--color-blanco);
}

.botonContactar {
  background-color: transparent;
  border: 1px solid var(--color-negro);
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.botonContactar a {
  text-decoration: none;
  color: var(--color-negro);
}

.botonContactar:hover {
  background-color: var(--color-negro);
  transition: 0.5s;
}

.botonContactar span {
  color: var(--color-negro);
  transform: translateY(-3px);
}
.botonContactar:hover a span {
  color: var(--color-blanco);
}

@media (max-width: 480px) {
  .principal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: var(--color-blanco);
    gap: 10px;
  }

  .tituloSeccion {
    display: flex;
    text-align: start;
    margin-left: 15px;
    margin-bottom: 10px;
    position: relative; /* Asegúrate de que el título tenga un contexto de apilamiento */
    z-index: 2; /* Un valor mayor que el de las LSA cards */
  }

  .card {
    width: 320px;
    height: 100%;
    margin-bottom: 20px;
  }
}
</style>
