<template>
  <div class="focus-container">
    <h3>专注领域</h3>
    <p class="partial-desc">
      合作客户均为国内一线大厂、明星独角兽和顶级外资企业，涵盖超过12个细分领域（社交泛娱乐，本地生活，电商新零售，智能出行，无人驾驶，企业服务，新能源汽车，互联网教育，互联网医疗，金融科技，智能硬件，智能安防等）。
    </p>
    <div class="focus-tags">
      <span>AI</span>
      <span>短视频直播</span>
      <span>电商新零售</span>
      <span>无人驾驶</span>
      <span>loT</span>
      <span>共享经济</span>
      <span>互联网教育</span>
      <span>互联网医疗</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.focus-container {
  padding: 120px 0 0;
  // background: linear-gradient(180deg, #fbfbfb, #f5f5f5);
  text-align: center;
  font-size: 16px;
  color: #3f4b62;
  transition: all 0.5s;
  h3 {
    margin: 0;
    font-size: 36px;
    line-height: 50px;
    color: #323649;
    font-weight: 700;
    &::after {
      content: "";
      display: block;
      width: 20px;
      height: 2px;
      background-color: @red;
      margin: 10px auto;
      text-align: left;
      @media (max-width: 750px) {
        height: 1vw;
        width: 10vw;
        margin: 10vw auto;
      }
    }
    @media (max-width: 750px) {
      font-size: 8vw;
      line-height: 2vw;
    }
  }
  .partial-desc {
    margin: 10px auto 40px;
    max-width: 700px;
    font-size: 16px;
    line-height: 28px;
    color: #3f4b62;
    @media (max-width: 750px) {
      font-size: 4vw;
      line-height: 6vw;
      width: 80vw;
      max-width: unset;
    }
  }
  .focus-tags {
    margin: 0 auto 80px;
    max-width: 680px;
    @media (max-width: 750px) {
      max-width: unset;
      margin: 0 auto 10vw;
    }
    span {
      min-width: 80px;
      box-sizing: border-box;
      display: inline-block;
      padding: 0 26px;
      color: #3f4b62;
      font-size: 14px;
      line-height: 44px;
      background-color: #f5f5f5;
      border-radius: 22px;
      margin: 10px;
      font-weight: 700;
      @media (max-width: 750px) {
        min-width: 8vw;
        padding: 0 4vw;
        font-size: 3vw;
        line-height: 9vw;
        border-radius: 4vw;
        margin: 3vw;
        box-sizing: border-box;
      }
    }
  }
}
</style>