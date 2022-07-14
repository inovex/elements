<template>
    <div class="root">
        <div class="example-container">
          <div class="frameworks-wrapper">
            <div class="framework-container">
              <div class="icon-wrapper">
                <img
                  class="logo react"
                  src="../assets/logos/react-logo.svg"
                >
              </div>
              <a
                :href="exampleProjectReactUrl"
                alt="elements example-project-react"
              >
                <ino-button>
                  View React Example
                </ino-button>
              </a>
            </div>
            <div class="framework-container">
              <div class="icon-wrapper">
                <img
                  class="logo angular"
                  src="../assets/logos/angular-logo.svg"
                >
              </div>
              <a
                :href="exampleProjectAngularUrl"
                alt="elements example-project-angular"
              >
                <ino-button>
                  View Angular Example
                </ino-button>
              </a>
            </div>
            <div class="framework-container">
              <div class="icon-wrapper">
                <img
                  class="logo vue"
                  src="../assets/logos/vue-logo.svg"
                >
              </div>
              <a
                :href="exampleProjectVueUrl"
                alt="elements example-project-vue"
              >
                <ino-button>
                  View Vue Example
                </ino-button>
              </a>
            </div>
          </div>
          <div class="header-wrapper">
            Check out some of our example projects for you!
          </div>

        </div>
    </div>
</template>

<script>
import { InoButton } from "@inovex.de/elements-vue";

export default {
  name: 'IvxExampleProjects',
  components: {
    InoButton,
  },
  data () {
    return {
      exampleProjectReactUrl: '',
      exampleProjectAngularUrl: '',
      exampleProjectVueUrl: '',
    }
  },
  created () {
    const baseUrl = window.location.origin + window.location.pathname
    const exampleProjectReactUrl = baseUrl + 'example-projects/react/index.html/';
    const exampleProjectAngularUrl = baseUrl + 'example-projects/angular/index.html/';
    const exampleProjectVueUrl = baseUrl + 'example-projects/vue/index.html/'; 

    this.exampleProjectReactUrl = exampleProjectReactUrl;
    this.exampleProjectAngularUrl = exampleProjectAngularUrl; 
    this.exampleProjectVueUrl = exampleProjectVueUrl;
  },
  mounted () {
    setTimeout(() => {
      const allFrameworkContainer = this.$el.querySelectorAll('.root .framework-container')
      console.log(allFrameworkContainer)

      allFrameworkContainer.forEach(child => {
        const timeout = Math.random() * 1100
        setTimeout(() => {
          child.style.transform = 'translateY(0)'
          child.style.opacity = 1
        }, timeout)
      })

      setTimeout(() => this.letComponentsFlow(allFrameworkContainer), 1300)
    }, 600)
  },
  methods: {
    letComponentsFlow (FrameworkContainer) {
      FrameworkContainer.forEach(child => {
        child.style['animation-timing-function'] = 'ease-in-out'
        child.style['animation-iteration-count'] = 'infinite'
        child.style['animation-delay'] = Math.random() + 's'
        child.style['animation-duration'] = Math.random() + 3 + 's'
      })
    }
  }
}

</script>

<style scoped>
a {
  text-decoration: none;
}

.example-container {
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
}

.frameworks-wrapper {
  margin-right: 1rem;
  position: relative;
}

.framework-container{
  position: relative;
  left: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 19rem;
  width: 100%;
  box-shadow: 10px 10px 20px rgb(0 0 0 / 25%);
  padding: 1.5rem 2.5rem 1.5rem 2rem;
  background-color: var(--primary-light);
  animation-name: flow;
}

@keyframes flow {
  0% { transform: translateY(-2px); }
  50% {transform: translateY(2px); }
  100% { transform: translateY(-2px); }
}

.framework-container:nth-of-type(2){
  margin: 2.5rem 0;
  left: 0rem;

}

.icon-wrapper {
  max-width: 6rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
}

.icon-wrapper img {
  width: 100%;
}

.vue {
  position: relative;
  top: 0.45rem;
}

.header-wrapper {
  font-size: 42px;
  line-height: 1.3em;
  color: var(--inovex);
  max-width: 25rem;
  width: 100%;
  text-align: right;
  display: flex;
  align-items: center;
}
</style>