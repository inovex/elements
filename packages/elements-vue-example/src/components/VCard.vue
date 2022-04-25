<template>
<ino-card>
  <div slot="header">
    <ino-header ino-title="Header" />
    <div class="flex-content">
      <ino-img
          class="my-avatar"
          ino-rounded
          width="200"
          alt="blank profile photo"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      />
      <h1>Marc Sutton</h1>
    </div>
  </div>
  <div slot="content">
    <ino-header ino-title="Content" />
    <ino-table>
      <tr>
        <td>ID</td>
        <td>Column A</td>
        <td>Column B</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Cell A1</td>
        <td>Cell B1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Cell A2</td>
        <td>Cell B2</td>
      </tr>
    </ino-table>
  </div>
  <div slot="footer">
    <ino-header ino-title="Footer" />
    <ino-button>Click me!</ino-button>
  </div>
</ino-card>
</template>

<script>
import {
  InoButton,
  InoCard,
  InoHeader,
  InoImg,
  InoTable,
} from "@inovex.de/elements-vue";

export default {
  name: "VCard",
  components: {
    InoTable,
    InoHeader,
    InoButton,
    InoCard,
    InoImg,
  }
}
</script>

<style scoped>
.flex-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

ino-header {
  margin: .5rem 0;
  display: block;
}
</style>
