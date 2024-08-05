import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue';
import SobreMi from '../views/SobreMi.vue';
import Experiencia from '../views/Experiencia.vue';
import Habilidades from '../views/Habilidades.vue';
import Proyectos from '../views/Proyectos.vue';
import Contacto from '../views/Contacto.vue';

const routes = [ //Aquí se crean las rutas para el router-link
    { path: '/', component: Inicio },
    { path: '/sobreMi', component: SobreMi },
    { path: '/experiencia', component: Experiencia },
    { path: '/habilidades', component: Habilidades },
    { path: '/proyectos', component: Proyectos },
    { path: '/contacto', component: Contacto },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router