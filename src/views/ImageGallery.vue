<template>
  <div class="flex justify-center items-center">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="w-2/4 text-2xl"
    >
      <b-carousel-slide
        text="The fearless honey badger surveys his wide territory for his morning meal."
        img-src="http://www.peopleg2.com/wp-content/uploads/2014/11/Depositphotos_75652851_xl-2015-scaled-1.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        text="There is almost nothing that can deter the ferocious honey badger."
        img-src="https://assets-jpcust.jwpsrv.com/thumbnails/nhl2y5zm-640.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        text="While known as one of the meanest animals on earth, the honey
        badger is a solid parent for its blind babies."
        img-src="https://facts.net/wp-content/uploads/2020/08/honey-badger-with-cub.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        text="In partnership with the WWF, we have been able to foster a successful
        breeding program at our zoo."
        img-src="https://www.zooborns.com/.a/6a010535647bf3970b0147e1812bd9970b-500wi"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.carousel-caption p {
  color: white !important;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
