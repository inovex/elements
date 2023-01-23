<template>
  <ino-card>
    <div slot="header">
      <div class="header-h1">
        Header
      </div>
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
      <div class="header-h1">
        Content
      </div>>
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
      <div class="header-h1">
        Footery
      </div>
      <ino-button>Click me!</ino-button>
    </div>
  </ino-card>
</template>

<script>
import {
  InoButton,
  InoCard,
  InoImg,
  InoTable,
} from "@inovex.de/elements-vue";

export default {
  name: "VCard",
  components: {
    InoTable,
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

.header-h1 {
  margin: .5rem 0;
  display: block;
}
</style>
