<template>
  <div class="container">
    <div class="header">
      <img src="../../assets/logo.svg">

      <h1>{{ msg }}</h1>

      <h3>Your last interoperable UI library for any framework.</h3>
    </div>

    <div class="body">
      <div class="content">
        <statement-card statement="Blazing fast">
          <template slot="icon">
            <i class="icon offline_bolt"></i>
          </template>
        </statement-card>

        <statement-card statement="Component based">
          <template slot="icon">
            <i class="icon view_module"></i>
          </template>
        </statement-card>

        <statement-card statement="Developer friendly">
          <template slot="icon">
            <i class="icon code"></i>
          </template>
        </statement-card>
      </div>
    </div>

    <div class="cta">
      <ino-button @click="$emit('start')">Get started</ino-button>
    </div>

    <div class="footer">
      <div>Crafted with <span class="heart">&#10084;</span> by <a href="https://inovex.de/" target="_blank">inovex GmbH</a></div>
    </div>

    <div class="intro-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import StatementCard from './StatementCard.vue'

export default {
  name: 'WelcomeIndex',
  components: { StatementCard },
  props: {
    logo: String
  },
  data () {
    return {
      msg: 'inovex elements'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("//fonts.googleapis.com/css?family=Material+Icons");

.icon {
  display: inline-block;
  width: 96px;
  height: 96px;
  background-repeat: no-repeat;
  background-size: contain;
}

.icon.offline_bolt {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEyIDIuMDJjLTUuNTEgMC05Ljk4IDQuNDctOS45OCA5Ljk4czQuNDcgOS45OCA5Ljk4IDkuOTggOS45OC00LjQ3IDkuOTgtOS45OFMxNy41MSAyLjAyIDEyIDIuMDJ6TTExLjQ4IDIwdi02LjI2SDhMMTMgNHY2LjI2aDMuMzVMMTEuNDggMjB6Ii8+PC9zdmc+');
}

.icon.view_module {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICA8cGF0aCBkPSJNNCAxMWg1VjVINHY2em0wIDdoNXYtNkg0djZ6bTYgMGg1di02aC01djZ6bTYgMGg1di02aC01djZ6bS02LTdoNVY1aC01djZ6bTYtNnY2aDVWNWgtNXoiLz4NCiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+DQo8L3N2Zz4NCg==');
}

.icon.code {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4NCiAgICA8cGF0aCBkPSJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHoiLz4NCjwvc3ZnPg0K');
}

h1,
h2,
h3 {
  font-weight: normal;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  text-align: center;
  padding-top: 150px;
}

.body {
  flex: 1;
  padding-top: 75px;
  display: flex;
  justify-content: center;
}

.cta {
  text-align: center;
  margin-top: 100px;
}

.footer {
  padding-top: 100px;
  -webkit-font-smoothing: antialiased;
  color: black;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.footer > div {
  padding: 10px;
}

.footer a {
  color: #1f3a5d;
  text-decoration: underline;
}

.footer a:hover {
  text-decoration: none;
}

.heart {
  color: red;
}

.content {
  width: 600px;
  display: flex;
  justify-content: space-between;
}
</style>
