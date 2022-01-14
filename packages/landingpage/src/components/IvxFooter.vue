<template>
  <div class="footer-container">
    <div class="social-and-legal">
      <div class="social-links">
        <a
          class="twitter"
          href="https://twitter.com/inovexgmbh"
          target="_blank"
        >
          <img src="../assets/logos/twitter.svg">
        </a>

        <a
          class="github"
          href="https://github.com/inovex/elements"
          target="_blank"
        >
          <img src="../assets/logos/github64.png">
        </a>
      </div>

      <div class="legal-links">
        <a
          href="https://www.inovex.de/en/legal-notice"
          target="_blank"
        >
          Imprint
        </a>

        &bull;

        <a
          href="https://www.inovex.de/en/data-protection"
          target="_blank"
        >
          Privacy
        </a>
      </div>
    </div>

    <div class="company">
      <a
        class="company__link"
        href="https://inovex.de"
        target="_blank"
      >
        <img
          class="company__image"
          src="../assets/logos/inovex.svg"
        >
      </a>

      <div class="company__subtitle">
        Crafted at inovex GmbH
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IvxFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  height: 180px;
  background-color: var(--primary-contrast);
}

.social-and-legal {
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
}

.legal-links {
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
}

.legal-links a {
  text-decoration: none;
  color: var(--light);
}

.legal-links a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  margin: auto;
  width: 80px;
  justify-content: space-between;
}

.social-links a {
  display: inline-block;
  height: 32px;
}

.social-links a img {
  transition: transform .2s;
}

.social-links a.github:hover img {
  transform: scale(1.2);
}
.social-links a.twitter:hover img {
  transform: scale(1.8); /* align the padding within the svg to the github mark */
}

.social-links .twitter {
  height: 32px;
  width: 32px;
}

.social-links .twitter img {
  transform: scale(1.6);
}

.social-links .github {
  height: 32px;
}

.social-links .github img {
  width: 32px;
  height: 32px;
}

.company {
  grid-column: 3 / 3;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
}

.company__link {
  display: block;
}

.company__image {
  width: 64px;
}

.company__subtitle {
  margin-top: 10px;
  color: var(--light);
}
</style>
