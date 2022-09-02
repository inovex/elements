<template>
  <div class="container">
    <ivx-header />

    <ivx-content-block class="components_content_block">
      <ivx-ui-components-section />
    </ivx-content-block>

    <ivx-hero-banner class="hero_banner framework_banner">
      <template v-slot:headline>
        <div class="framework">
          The last interoperable UI library you’ll need.<br>
          For any framework.
        </div>
      </template>

      <template v-slot:description>
        <div class="framework">
          <p>
            The elements are built to run on every major Framework.<br>
            Or just any HTML Website.<br>
            <br>
            Learn how to start with Angular, React or plain JavaScript.
          </p>
          <ivx-framework-logos class="framework_logos" />
        </div>
      </template>
    </ivx-hero-banner>

    <ivx-content-block>
      <ivx-facts-section />
    </ivx-content-block>

    <ivx-hero-banner class="hero_banner">
      <template v-slot:headline>
        <div class="from_scratch">
          <img
            class="from_scratch__image"
            src="../assets/rocket.svg"
          >
          <div class="from_scratch__headline">
            Don’t start from scratch every time you create a new project.
          </div>
        </div>
      </template>

      <template v-slot:description>
        <div class="from_scratch">
          <div class="from_scratch__desc">
            It’s hard to build and maintain UI components — don’t waste time with components you only use in one project. Build them once, run them everywhere!
          </div>
        </div>
      </template>
    </ivx-hero-banner>

    <ivx-content-block>
      <ivx-install-section />
    </ivx-content-block>

    <ivx-content-block>
      <ivx-example-projects-section />
    </ivx-content-block>

    <ivx-hero-banner class="hero_banner">
      <template v-slot:headline>
        <div class="proven_tools">
          <div class="proven_tools__headline">
            Built with reliable tools.
          </div>
          <img
            class="proven_tools__image"
            src="../assets/skateboard.svg"
          >
        </div>
      </template>

      <template v-slot:description>
        <div class="proven_tools">
          <div class="proven_tools__desc">
            Stencil and Google Material Design for Web are the main building blocks of our components. That’s the solid foundation we build upon!
          </div>
        </div>
      </template>
    </ivx-hero-banner>

    <ivx-content-block>
      <ivx-tools-section />
    </ivx-content-block>

    <ivx-hero-banner class="hero_banner">
      <template v-slot:headline>
        Upcoming Events.
      </template>

      <template v-slot:description>
        Meet the people behind the elements. Join our Meetup Sessions.
      </template>
    </ivx-hero-banner>

    <ivx-content-block>
      <ivx-events-section />
    </ivx-content-block>

    <ivx-hero-banner class="hero_banner">
      <template v-slot:headline>
        Our Spirit.
      </template>

      <template v-slot:description>
        Not the technology counts, the people do. We use technology to make our
        customers happy. And ourselves.
      </template>
    </ivx-hero-banner>

    <ivx-content-block>
      <ivx-spirit-section />
    </ivx-content-block>

    <ivx-footer />
  </div>
</template>

<script>
import IvxHeader from '@/components/IvxHeader.vue'
import IvxHeroBanner from '@/components/IvxHeroBanner.vue'
import IvxFooter from '@/components/IvxFooter.vue'
import IvxContentBlock from '@/components/IvxContentBlock.vue'
import IvxUiComponentsSection from '@/components/IvxUiComponentsSection.vue'
import IvxFrameworkLogos from '@/components/IvxFrameworkLogos.vue'
import IvxFactsSection from '@/components/IvxFactsSection.vue'
import IvxInstallSection from '@/components/IvxInstallSection.vue'
import IvxExampleProjectsSection from '@/components/IvxExampleProjectsSection.vue'
import IvxToolsSection from '@/components/IvxToolsSection.vue'
import IvxEventsSection from '@/components/IvxEventsSection.vue'
import IvxSpiritSection from '@/components/IvxSpiritSection.vue'

export default {
  name: 'WelcomeIndex',
  components: {
    IvxHeader,
    IvxHeroBanner,
    IvxFooter,
    IvxContentBlock,
    IvxUiComponentsSection,
    IvxFrameworkLogos,
    IvxFactsSection,
    IvxInstallSection,
    IvxExampleProjectsSection,
    IvxToolsSection,
    IvxEventsSection,
    IvxSpiritSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1,
h2,
h3 {
  font-weight: normal;
}

h1 {
  margin-bottom: 12px;
}

ino-button {
  margin: 0 4px;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.container .hero_banner:nth-child(4n + 3) {
  border-left: 10px solid var(--ivx-primary);
}
.container .hero_banner:nth-child(4n + 5) {
  border-right: 10px solid var(--ivx-primary);
}

.components_content_block {
  overflow-x: hidden;
}

.framework {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
@media screen and (max-width: 650px) {
  .framework_banner {
    overflow-x: hidden;
  }
}
.framework_logos {
  grid-column: 2 / 2;
  position: absolute;
  transform: translate(0, -45%);
}
@media screen and (max-width: 650px) {
  .framework_logos {
    display: none;
  }
}

.from_scratch {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.from_scratch__headline, .from_scratch__desc {
  grid-column: 2 / 2;
}
.from_scratch__image {
  position: absolute;
  width: 30%;
  height: auto;
  transform: translate(0, -30%);
}
@media screen and (max-width: 650px) {
  .from_scratch {
    grid-template-columns: 1fr;
  }
  .from_scratch__image {
    display: none;
    /* width: 33%;
    transform: translate(0, 150%); */
  }
}

.proven_tools {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.proven_tools__headline, .proven_tools__desc {
  grid-column: 1 / 1;
}
.proven_tools__image {
  position: absolute;
  right: 0;
  top: 0;
  width: 30%;
}
@media screen and (min-width: 1600px) {
  .proven_tools__image {
    transform: translateY(-35px);
  }
}
@media screen and (max-width: 996px) {
  .proven_tools__image {
    width: 33%;
    transform: translate(30%, 40%);
  }
}
@media screen and (max-width: 650px) {
  .proven_tools {
    grid-template-columns: 1fr;
  }
  .proven_tools__image {
    display: none;
    /* width: 33%;
    transform: translate(30%, 150%); */
  }
}
</style>
