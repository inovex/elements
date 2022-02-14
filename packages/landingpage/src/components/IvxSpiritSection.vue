<template>
  <div class="root">
    <div class="built_for_us">
      <img
        class="logo scrum_board"
        src="../assets/scrum_board.svg"
      >
      <div class="built_for_us__desc">
        <h3>We built them for us.</h3>
        <p class="built_for_us__desc__text">
          We did not start with the idea of creating the next design system. What we were looking for instead was a set of components that would express our self-created corporate design, while being flexible enough to be used in Angular, React, Vue and some good old simple JavaScript websites. Thus the elements were born.
        </p>
      </div>
    </div>

    <div class="built_with_love">
      <div class="built_with_love__desc">
        <h3>We built them with love.</h3>
        <p class="built_with_love__desc__text">
          We love software that lasts and work hard to become better at what we do. We maintain, review and update each single component along with its documentation. We take care of it - continuously.
        </p>
      </div>
      <img
        class="logo built_with_love__image"
        src="../assets/deceloper_activity.svg"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'IvxSpiritSection',
  components: {
  }
}
</script>

<style scoped>
.root {
}
.built_for_us, .built_with_love {
  display: flex;
  justify-self: center;
  align-items: center;
  text-align: left;
  margin-bottom: 100px;
}

@media screen and (max-width: 650px) {
.built_for_us, .built_with_love {
  flex-wrap: wrap;
}
.built_for_us {
  flex-wrap: wrap-reverse;
}
}
.logo {
  width: 30%;
  height: 100%;
  margin: 50px 50px 0 50px;
}
@media screen and (max-width: 650px){
  .logo {
    width: 100%;
    margin: 20px 0;
  }
}
h3 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}
</style>
