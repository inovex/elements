<template>
  <div>
    <div class="header-h1">My Pictures</div>
    <ino-img-list enclose-label :key="Date.now()">
      <ino-img
          v-for="(img, i) in images" :key="i"
          :src="img.url"
          :alt="img.label"
          :label="img.label"
          img-list-item
          rounded
      >
      </ino-img>
    </ino-img-list>
    <div class="header-h1">My Pictures in a carousel</div>
    <ino-carousel
        class="my-carousel"
        value="0"
        autoplay
        animated
        infinite
        intermission="5000"
        hide-buttons
    >
      <ino-carousel-slide
          v-for="(img, i) in images" :key="i"
          :value="i" :src="img.url"
      />
    </ino-carousel>
  </div>
</template>

<script>
import {
  InoCarousel,
  InoCarouselSlide,
  InoImg,
  InoImgList
} from "@inovex.de/elements-vue";

export default {
  name: "ImageGallery",
  components: {
    InoCarousel, InoCarouselSlide, InoImg, InoImgList
  },
  data: () => ({
    images: [
      { url: 'https://elements.inovex.de/version/v5.1.0/static/media/beach.1432d4b3..jpg', label: 'Dummy Label'},
      { url: 'https://elements.inovex.de/version/v5.1.0/static/media/liberty.ab8cbdf5..jpg', label: 'Test Label'},
      { url: 'https://elements.inovex.de/version/v5.1.0/static/media/forrest.0452b993..jpg', label: 'Nice Image'},
      { url: 'https://elements.inovex.de/version/v5.1.0/static/media/trondheim.7a9953d8..jpg', label: 'Foo Bar'},
    ]
  })
}
</script>

<style scoped>
ino-img-list {
  --ino-img-list-cols: 4;
}

.header-h1 {
  margin: 1.5rem 0 .5rem 0;
  display: block;
}

.my-carousel {
  --ino-carousel-width: 100%;
}
</style>
