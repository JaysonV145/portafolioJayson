<template>
  <section class="experience-section">
    <h1 class="section-title">Experiencia Profesional</h1>
    <div class="experience-container">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="experience-card"
        @mouseenter="hoverExperience(index)"
        @mouseleave="leaveExperience"
        @click="toggleDetails(index)"
      >
        <div class="card-content">
          <div class="icon-container">
            <i :class="experience.icon"></i>
          </div>
          <h2 class="experience-title">{{ experience.title }}</h2>
          <p class="experience-company">{{ experience.company }}</p>
          <p class="experience-duration">
            <i class="fas fa-calendar-alt"></i> {{ experience.duration }}
          </p>
          <ul class="experience-description">
            <li v-for="(desc, index) in experience.description" :key="index">
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRightLong,
  faBolt,
  faCogs,
  faDesktop,
  faFileAlt,
  faFontAwesome,
  faMagnifyingGlass,
  faNetworkWired,
  faPuzzlePiece,
  faRobot,
  faRocket,
  faSquareUpRight,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faMagnifyingGlass,
  faArrowLeft,
  faPlay,
  faAnglesDown,
  faGithubAlt,
  faArrowRight,
  faMinus,
  faArrowRightLong,
  faLaptopCode,
  faRocket,
  faSquareUpRight,
  faCogs,
  faDesktop,
  faBolt,
  faPuzzlePiece,
  faFileAlt,
  faNetworkWired,
  faTools,
  faRobot
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
      experiences: [
        {
          title: "Desarrollador Full-Stack",
          company: "Turit",
          duration: "Octubre 2024 - Diciembre 2024",
          description: [
            "🚀 Gestión de procesos internos: Implementación de CRM (GoHighlevel) y automatización (Make, Zapier) para mejorar flujos y reportes.",
            "💻 Desarrollo web responsivo: Creación de interfaces funcionales con HTML, CSS, JavaScript y Bootstrap.",
            "🔧 Optimización de tareas: Mejora de la productividad mediante Google Apps Script.",
            "🌐 Soluciones no-code: Implementación de WordPress, Bubble.io y Shopify para el desarrollo y lanzamiento de sitios web dinámicos.",
            "📝 Documentación y mantenimiento: Gestión de proyectos y control de versiones mediante GitHub.",
          ],
          icon: "fas fa-laptop-code",
          skills: [{ name: "Vue.js" }, { name: "JavaScript" }, { name: "CSS" }],
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
        },
      ],
      hoveredIndex: null,
    };
  },
  methods: {
    hoverExperience(index) {
      this.hoveredIndex = index;
    },
    leaveExperience() {
      this.hoveredIndex = null;
    },
  },
  toggleDetails(index) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  },
};
</script>

<style scoped>
.experience-section {
  padding: 2rem;
  background: #f9f9f9;
}

.section-title {
  text-align: center;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  margin-left: -20px;
  color: #333;
}

.experience-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.experience-card {
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  border-radius: 15px;
  padding: 1.5rem;
  width: 400px;

  transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.3s ease;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.experience-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #009688;
}

.experience-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.experience-card:hover::after {
  opacity: 1;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease;
}

.icon-container {
  font-size: 3rem;
  background: linear-gradient(135deg, #004e7c, #007f9c);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 5px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  transform: rotate(15deg) scale(1.2);
}

.experience-title {
  font-size: 1.5rem;
  color: #333;
}

.experience-company {
  margin: 0.5rem 0;
  color: #666;
}
.experience-description {
  position: relative;
  padding: 1rem;
  background-color: #f0f4f7;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #666;
  margin-bottom: 1rem;
  height: 450px;
}

.experience-description li {
  list-style: none;
  margin-bottom: 0.8rem; /* Espaciado entre los elementos de la lista */
  padding-left: 1rem; /* Espaciado izquierdo para alinear con el texto */
  position: relative;
  font-weight: 400;
  line-height: 1.5;
}

.experience-description::before {
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 2rem;
}
.experience-duration {
  font-style: italic;
  color: #999;
  margin-top: 0.5rem;
}

.experience-skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: var(--color-gris-fondo);
  font-weight: bold;
}

.spanSkills span {
  font-size: 15px;
  color: #666;
}

.skill i {
  font-size: 15px;
  color: #009688;
  transition: transform 0.3s ease;
}

.skill {
  margin: 0.5rem;
  font-size: 0.9rem;
}

.skill i {
  margin-right: 5px;
}

.skill:hover i {
  color: #009688;
}

.skill:hover {
  text-decoration: underline;
}

.experience-card:hover .icon-container {
  transform: rotate(0deg) scale(1.2);
}

@media (max-width: 480px) {
  .experience-section {
    padding: 2rem;
    background: #f9f9f9;
  }

  .section-title {
    text-align: start;
    font-size: 4rem;
    margin-bottom: 1.5rem;
    margin-left: -20px;
    color: #333;
  }

  .experience-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .experience-card {
    background: linear-gradient(135deg, #ffffff, #f0f0f0);
    border-radius: 15px;
    padding: 1.5rem;
    width: 400px;
    transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.3s ease;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }

  .experience-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #009688;
  }

  .experience-card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .experience-card:hover::after {
    opacity: 1;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: opacity 0.3s ease;
  }

  .icon-container {
    font-size: 3rem;
    background: linear-gradient(135deg, #004e7c, #007f9c);
    background-clip: initial;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 5px;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
    transform: rotate(15deg) scale(1.2);
  }

  .experience-title {
    font-size: 1.5rem;
    color: #333;
  }

  .experience-company {
    color: #666;
  }
  .experience-description {
    position: relative;
    padding: 1rem;
    background-color: #f0f4f7;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: #666;
    margin-bottom: 1rem;
    height: 680px;
  }

  .experience-description li {
    list-style: none;
    margin-bottom: 0.8rem; /* Espaciado entre los elementos de la lista */
    padding-left: 1rem; /* Espaciado izquierdo para alinear con el texto */
    position: relative;
    font-weight: 400;
    line-height: 1.5;
  }

  .experience-description::before {
    position: absolute;
    top: -10px;
    left: 10px;
    font-size: 2rem;
  }
  .experience-duration {
    font-style: italic;
    color: #999;
    margin-top: 0.5rem;
  }

  .experience-skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: var(--color-gris-fondo);
    font-weight: bold;
  }

  .spanSkills span {
    font-size: 15px;
    color: #666;
  }

  .skill i {
    font-size: 15px;
    color: #009688;
    transition: transform 0.3s ease;
  }

  .skill {
    margin: 0.5rem;
    font-size: 0.9rem;
  }

  .skill i {
    margin-right: 5px;
  }

  .skill:hover i {
    color: #009688;
  }

  .skill:hover {
    text-decoration: underline;
  }

  .experience-card:hover .icon-container {
    transform: rotate(0deg) scale(1.2);
  }
}
</style>
