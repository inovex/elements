<template>
  <div class="root">
    <div class="stencil">
      <img
        class="logo stencil__image"
        src="../assets/stencil.jpg"
      >
      <div class="stencil__desc">
        <h3>Stencil</h3>
        <p class="stencil__desc__text">
          The elements are based on the Stencil toolchain, allowing our components to run in every browser: They support TypeScript, standard-based Web Components bundling, data-binding and many many more features. <br><br>
          Stencil was created to power the components for the Ionic Framework - a cross-platform mobile development technology stack used by more than 5M developers. We don’t want to create the build tools, we want to create something new, so we rely on the Ionic team to provide you a better component system that doesn’t rely on any major web framework.
        </p>
      </div>
    </div>

    <div class="storybook">
      <div class="storybook__desc">
        <h3>Storybook</h3>
        <p class="storybook__desc__text">
          One of the key challenges in providing a future-proof open source library is its documentation. It is very challenging to create the showcases and technical documentation that a developer wants to see. And it's even more difficult to build the website around the documentation. <br><br>
          We want to concentrate on the documentation part and use Storybook as a host for the components we build. This way you, as a developer, will get an easy-to-navigate documentation with all API details, some demo use cases, a textual description and the code you need for the component.
        </p>
      </div>
      <img
        class="logo storybook__image"
        src="../assets/storybook_give_back.svg"
      >
    </div>

    <div class="google">
      <img
        class="logo google__image"
        src="../assets/google_mdc.png"
      >
      <div class="google__desc">
        <h3>Google MDC Web</h3>
        <p class="google__desc__text">
          We focus on the UI design and use a very solid foundation for the components we build. The Google Material Design Components for the Web. <br><br>
          This is one of the few component collections that offer fine granular adjustment for so many components. It’s highly configurable and the architecture behind is well thought out. It provides us the defaults for accessibility, interactions, states and many more.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IvxToolsSection',
  components: {
  }
}
</script>

<style scoped>
.root {
}
.stencil, .storybook, .google {
  display: flex;
  justify-self: center;
  align-items: center;
  text-align: left;
  margin-bottom: 100px;
}

@media screen and (max-width: 650px) {
.stencil, .storybook, .google {
  flex-wrap: wrap;
}
.storybook {
  flex-wrap: wrap-reverse;
}
}
.logo {
  width: 40%;
  height: 100%;
  margin: 50px 50px 0 50px;
}
.logo.storybook__image {
  width: 30%;
}
@media screen and (max-width: 650px){
  .logo {
    width: 100%;
    margin: 20px 0;
  }
  .logo.storybook__image {
    width: 100%;
  }
}
h3 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}
</style>
