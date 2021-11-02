<template>
  <div class="box-container">
    <img :src="url" />
    <h1>{{ boxTitle }}</h1>
    <p>{{ boxContent }}</p>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    boxTitle: {
      type: String,
      required: true,
    },
    boxContent: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.box-container {
  flex: 1 0 260px;
  max-width: 380px;
  min-height: 414px;
  box-sizing: border-box;
  padding: 40px;
  margin: 10px;
  box-shadow: 0 2px 10px 0 #ededed;
  border-radius: 4px;
  background-color: @white;
  transition: all 0.5s;
  img {
    width: 80px;
    max-height: 100%;
  }
  h1 {
    margin: 20px 0 10px;
    color: #323649;
    font-weight: 700;
    font-weight: 600;
    line-height: 28px;
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #3f4b62;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
  }
  @media (max-width: 1040px) {
      max-width: 260px;
      min-height: 470px;
  }
  @media (max-width: 750px) {
      width: 80vw;
      max-width: unset;
      min-height: 60vw;
      flex: 0 0 auto;
    
  }
}
</style>