<template>
  <div id="app">
    <Header :choose="choose" @chooseChange="handleChooseChange" />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
export default {
  name: "App",
  data() {
    return {
      choose: "首页",
    };
  },
  components: {
    Header,
    Content,
    Footer,
  },
  methods: {
    handleChooseChange(newChoose) {
      this.choose = newChoose;
    },
    wrapListener() {
      let aDoms = document.getElementsByClassName("anchor");
      let len = aDoms.length;

    },
  },
  mounted() {
    this.wrapListener();
  },
};
</script>

<style lang="less">
@import "~@/styles/media.less";
@import "~@/styles/var.less";

html {
  overflow-x: hidden;
  font-size: 20px;
  scroll-behavior: smooth;
  background-color: #fff;
  scroll-behavior: smooth;
}
body {
  font-family: Microsoft YaHei, Tahoma, Arial, Helvetica Neue, Helvetica,
    sans-serif;
  padding: 70px 0 0;
  margin: 0;
}

</style>
