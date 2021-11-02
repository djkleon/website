<template>
  <swiper class="swiper-container" :options="swiperOption">
    <swiper-slide>
      <slot name="first"></slot>
    </swiper-slide>
    <swiper-slide>
      <slot name="second"></slot>
    </swiper-slide>
    <swiper-slide>
      <slot name="third"></slot>
    </swiper-slide>
    <swiper-slide>
      <slot name="fourth"></slot>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "swiper-example-space-between",
  title: "Space between slides",
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: true,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        loop: true,
      },
    };
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 1000px;
  margin: 0 auto;
  font-size: 0;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  @media (max-width: 1040px) {
    width:678px;
  }
  @media (max-width: 750px){
    width:80vw;
  }
}
</style>