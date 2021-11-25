<template>
  <div class="highLight-container">
    <h3>公司风采</h3>
    <p class="partial-desc">
      在这里，老板变着法子发奖金，老猎乐衷分享培训，童鞋们“明目张胆”拿老板照片做表情包，HR
      时刻琢磨着下午茶、生日会、中秋节、圣诞节⋯
    </p>
    <Swiper1 class="swiper">
      <template #first>
        <img src="@/assets/pic/0101.png" />
        <img src="@/assets/pic/0102.png" />
        <img src="@/assets/pic/0103.png" />
        <img src="@/assets/pic/0104.png" />
        <img src="@/assets/pic/0105.png" />
        <img src="@/assets/pic/0106.png" />
      </template>
      <template #second>
        <img src="@/assets/pic/0101.png" />
        <img src="@/assets/pic/0102.png" />
        <img src="@/assets/pic/0103.png" />
        <img src="@/assets/pic/0104.png" />
        <img src="@/assets/pic/0105.png" />
        <img src="@/assets/pic/0106.png" />
      </template>
      <template #third>
        <img src="@/assets/pic/0101.png" />
        <img src="@/assets/pic/0102.png" />
        <img src="@/assets/pic/0103.png" />
        <img src="@/assets/pic/0104.png" />
        <img src="@/assets/pic/0105.png" />
        <img src="@/assets/pic/0106.png" />
      </template>
      <template #fourth>
        <img src="@/assets/pic/0101.png" />
        <img src="@/assets/pic/0102.png" />
        <img src="@/assets/pic/0103.png" />
        <img src="@/assets/pic/0104.png" />
        <img src="@/assets/pic/0105.png" />
        <img src="@/assets/pic/0106.png" />
      </template>
    </Swiper1>
  </div>
</template>

<script>
import Swiper1 from "./Swiper1";
export default {
  components: {
    Swiper1,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.highLight-container {
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
  .swiper {
    flex-shrink: 0;
    height: 100%;
    position: relative;
    img {
      width: 260px;
      height: 260px;
      margin: 10px;
      box-sizing: border-box;
      @media (max-width: 1040px) {
        width: 194px;
        height: 194px;
        margin: 6px;
      }
      @media (max-width: 750px) {
        width: 24vw;
        height: 24vw;
        margin: 1vw;
      }
    }
  }
}
</style>