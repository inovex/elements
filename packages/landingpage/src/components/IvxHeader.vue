<template>
  <nav class="header">
    <div class="logo-container">
      <img
        class="logo"
        src="../assets/logos/elements.svg"
      >
      <div class="title">
        elements
      </div>
    </div>

    <div class="versions">
      <ino-select
        v-if="versions.length > 0"
        fill="outline"
        v-model="selectedVersionURL"
      >
        <ino-option
          v-for="(version, i) in versions"
          :key="version.name"
          :value="version.url"
          :selected="i === 0"
        >
          {{ version.name }} {{ i === 0 ? "(latest)" : "" }}
        </ino-option>
      </ino-select>

      <a
        :href="selectedVersionURL + '/'"
        alt="elements documentation"
      >
        <ino-button>
          Get started
        </ino-button>
      </a>
    </div>
  </nav>
</template>

<script>
import { InoButton, InoOption, InoSelect } from "@inovex.de/elements-vue";

export default {
  name: 'IvxHeader',
  components: { InoSelect, InoButton, InoOption },
  props: {
    logo: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedVersionURL: '',
      versions: []
    }
  },
  created () {
    const baseUrl = window.location.origin + window.location.pathname
    const versionsUrl = baseUrl + 'example-project-react'; // hier den pfad generieren für die jeweiligen versionen

    fetch(`${baseUrl}hosted-versions.json`)
      .then(d => d.json())
      .then(availableVersions => {
        this.versions = availableVersions
          .sort((a, b) => b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' }))
          .map(v => ({ url: versionsUrl + v, name: v }))

        if(this.versions.length > 0) {
          this.selectedVersionURL = this.versions[0]['url']
        }
      })
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px var(--container-padding-horizontal);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 992px) {
  .header {
    padding: 20px;
  }
}
.logo-container {
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 200;
  color: var(--dark);
}

.logo-container .logo {
  height: 50px;
  margin-right: 5px;
}

.versions {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 650px) {
  .versions {
    margin: 0;
  }
  ino-select {
    display: none;
  }
  ino-button button {
    padding: 10px;
  }
}

.versions ino-select {
  margin-right: 20px;
}
</style>
