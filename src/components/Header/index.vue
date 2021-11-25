<template>
  <div class="header-container">
    <div class="header">
      <img class="headerImg" src="../../assets/chang.png" title="海诗咨询" />
      <ul class="headerList">
        <li
          class="headerList-item"
          v-for="(n, i) in wordsObj.name"
          :key="i"
          @click="handleClick(n)"
          :class="{ 'headerList-item-active': choose === n }"
        >
          <a :href="wordsObj.src[i]">{{ n }}</a>
        </li>
      </ul>
      <div class="hamburger">
        <!-- <input class="hidden-checkbox" type="checkbox" /> -->
        <div class="dash" @click="turnChange()">
          <span :class="{ becomeX: opened }"></span>
          <span :class="{ becomeX: opened }"></span>
          <span :class="{ becomeX: opened }"></span>
        </div>
        <ul class="menu" :class="{ 'menu-opened': !opened }">
          <li
            class="headerList-item"
            v-for="(n, i) in wordsObj.name"
            :key="i"
            @click="handleClick(n)"
          >
            <a :href="wordsObj.src[i]">{{ n }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
      wordsObj: {
        name: [
          "首页",
          "关于我们",
          "专注领域",
          "服务范围",
          "公司风采",
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
      // if (newChoose === this.choose) {
      //   return;
      // }
      this.$emit("chooseChange", newChoose);
      this.turnChange();
    },
    turnChange() {
      this.opened = !this.opened;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
// @import "~@/styles/media.less";

.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 1px 0 0 #ededed;
  font-size: 14px;
  font-weight: 700;
  color: #323649;
  z-index: 99;
  background-color: @white;
  @media (max-width: 750px) {
    padding: 0 1vw;
  }
  .header {
    height: 70px;
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    .headerImg {
      width: 120px;
      max-height: 100%;
    }
    .headerList {
      display: block;
      list-style: none;
      padding: 0 20px 0 0;
      margin-left: auto;
      @media (max-width: 750px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        display: none; //链接如果小于750px，display设为none
      }
      .headerList-item {
        cursor: pointer;
        margin: 0 20px;
        display: inline-block;
        @media (max-width: 1040px) {
          margin: 0 10px;
          @media (max-width: 750px) {
            font-size: 14px;
            margin: 1vw 10px;
          }
        }
        &:hover {
          color: @pointer;
        }
        &.headerList-item-active {
          color: @pointer;
        }
      }
      a {
        display: inline-block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: unset;
      }
    }
    .hamburger {
      // display: none;
      margin-left: auto;
      @media (max-width: 750px) {
        display: block;
        position: relative;
        width: 6vw;
        height: 5vw;
      }
      .dash {
        display: none;
        position: relative;
        width: 20px;
        height: 26px;
        right: 5vw;
        @media (max-width: 750px) {
          display: block;
        }
        span {
          position: absolute;
          // transform: translateY(-50%);
          box-sizing: border-box;
          width: 6vw;
          max-width: 35px;
          min-width: 25px;
          height: 2px;
          background-color: #323549;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        :nth-child(2) {
          top: 50%;
          &.becomeX {
            display: none;
          }
        }
        :nth-child(1) {
          top: 10%;
          &.becomeX {
            top: 50%;
            transform: rotate(45deg);
          }
        }
        :nth-child(3) {
          top: 90%;
          &.becomeX {
            top: 50%;
            transform: rotate(-45deg);
          }
        }
      }
      .menu {
        position: fixed;
        left: 0;
        top: 70px;
        display: flex;
        flex-direction: column;
        text-align: center;
        box-sizing: border-box;
        width: 100vw;
        margin: 0;
        padding: 5vw;
        list-style: none;
        font-weight: 400;
        font-size: 3vw;
        line-height: 3vw;
        background-color: #fff;
        box-shadow: 0 1px 0 0 #ededed;
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s;
        z-index: 8;
        @media (max-width: 750px) {
          visibility: visible;
          opacity: 1;
          &.menu-opened {
            visibility: hidden;
            opacity: 0;
          }
        }

        .headerList-item {
          cursor: pointer;
          margin: 0 20px;
          display: inline-block;
          line-height: 5vw;
          @media (max-width: 1040px) {
            margin: 0 10px;
            @media (max-width: 750px) {
              font-size: 14px;
              margin: 1vw 10px;
            }
          }
          &:hover {
            color: @pointer;
          }
          a {
            display: inline-block;
            height: 100%;
            width: 100%;
            text-decoration: none;
            color: unset;
          }
        }
      }
    }
  }
}
</style>
