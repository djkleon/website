<template>
  <div class="content-container">
    <a class="anchor" id="banner"></a>
    <Banner />
    <a class="anchor" id="about"></a>
    <About />
    <a class="anchor" id="focus"></a>
    <Focus />
    <a class="anchor" id="area"></a>
    <Area />
    <a class="anchor" id="highlight"></a>
    <HighLight />
    <a class="anchor" id="join"></a>
    <Join />
  </div>
</template>

<script>
import Banner from "./Banner";
import About from "./About";
import Focus from "./Focus";
import Area from "./Area";
import HighLight from "./HighLight";
import Join from "./Join";

export default {
  components: {
    Banner,
    About,
    Focus,
    Area,
    HighLight,
    Join,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.conent-container {
  display: block;
}
.anchor {
  display: block;
  position: relative;
  top: -70px;
  visibility: hidden;
}
</style>