<template>
  <div class="footer-container">
    <div class="footer">
      <ul class="footerList">
        <li
          class="footerList-item"
          v-for="(n, i) in wordsObj.name"
          :key="i"
          @click="handleClick(n)"
        >
          <a :href="wordsObj.src[i]">{{ n }}</a>
        </li>
      </ul>
      <div class="copyright">
        © Copyright Bo-Zhou.com. All Rights Reserved
        <a href="https://beian.miit.gov.cn">沪ICP备12044840号-1</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wordsObj: {
        name: [
          "首页",
          "关于我们",
          "专注领域",
          "服务领域",
          "海诗风采",
          "加入我们",
        ],
        src: ["#banner", "#about", "#focus", "#area", "#highlight", "#join"],
      },
    };
  },
  props: {
    choose: {
      type: String,
      default: "首页",
    },
  },
  methods: {
    handleClick(newChoose) {
      if (newChoose === this.choose) {
        return;
      } else {
        this.choose = newChoose;
      }
      this.$emit("chooseChange", newChoose);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
// @import "~@/styles/media.less";

.footer-container {
  color: #3f4b62;
  font-size: 14px;
  border-top: 1px solid #ededed;
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    .footerList {
      display: block;
      list-style-type: disc;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
      margin: 30px 0;
      padding: 0;
      list-style: none;
      font-weight: 600;
      @media (max-width: 750px) {
        margin: 5vw 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      li {
        display: inline-block;
        margin: 0 20px;
        min-width: 50px;
        @media (max-width: 750px) {
          margin: 2vw 3vw;
          line-height: 4vw;
          min-width: 6vw;
          font-size:4vw;
        }
      }
    }
    .copyright {
      font-weight: 300;
      padding-bottom: 100px;
      text-align: center;
      margin: 0;
      line-height: 20px;
      a {
        color: #333;
        text-decoration: none;
      }
    }
  }
}

.footerList-item {
  cursor: pointer;
  margin: 0 20px;
  display: inline-block;
  @media (max-width: 1040px) {
    margin: 0 10px;
    @media (max-width: 750px) {
      display: none;
    }
  }
  &:hover {
    color: @pointer;
  }
}

.footerList a {
  display: inline-block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: unset;
}
</style>
