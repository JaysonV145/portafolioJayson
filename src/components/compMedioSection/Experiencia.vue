<template>
  <transition name="fade">
    <ul
      v-if="showContent.experiencia"
      class="experiencia"
      :class="{ expand: showContent.experiencia }"
    >
      <li>
        <img
          class="logoHTML"
          src="@/assets/html_logo.png"
          style="display: flex; justify-content: center; height: 50px"
        />
      </li>
      <li>
        Javascript
        <img
          class="logoJS"
          src="@/assets/js_logo.png"
          style="display: flex; justify-content: center; height: 50px"
        />
      </li>
      <li>
        Css
        <img
          class="logoCSS"
          src="@/assets/css_logo.png"
          style="display: flex; justify-content: center; height: 50px"
        />
      </li>
      <li>
        Vue.js
        <img
          class="logoJS"
          src="@/assets/vue_logo.png"
          style="display: flex; justify-content: center; height: 50px"
        />
      </li>
      <li>
        Bootstrap
        <img
          class="logoBootstrap"
          src="@/assets/bootstrap_logo.png"
          style="display: flex; justify-content: center; height: 50px"
        />
      </li>
      <li>Voiceflow</li>
    </ul>
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
.descripcion {
  display: flex;
  flex-direction: row;
  position: absolute;
  margin-top: 50px;
  right: -800px;
  list-style: none;
}

.descripcion ul li h1 {
  font-family: "Gupter", serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 80px;
  margin-bottom: -60px;
}

.descripcion.expand {
  transform: scale(1.6);
  max-height: 500px;
}
</style>
