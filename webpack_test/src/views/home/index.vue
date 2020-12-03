<template>
  <boxLayout>
    <div class="home_index">
      <div class="animation_box">
        <div class="title_line">
          <section class="line"></section>
          <section class="title_text">静态图形</section>
        </div>
        <staticCanvas />
        <Icon
          :class="
            actived
              ? 'iconfont icon-xiangshangshuangjiantou'
              : 'iconfont icon-xiangxiashuangjiantou'
          "
          @click="actived = !actived"
        ></Icon>
      </div>
      <div class="animation_box">
        <div class="title_line">
          <section class="line"></section>
          <section class="title_text">动态图形</section>
        </div>
      </div>
    </div>
  </boxLayout>
</template>

<script>
import staticCanvas from "../canvas/static_canvas";
export default {
  name: "homeIndex",
  components: { staticCanvas },
  data() {
    return {
      actived: false,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.home_index {
  .title_line {
    display: flex;
    align-items: center;
    .title_text {
      color: #252525;
      font-size: 20px;
      font-weight: 500;
      margin-left: 10px;
    }
    .line {
      height: 20px;
      width: 4px;
      background: #0089ff;
      border-radius: 8px;
    }
  }
  .animation_box {
    position: relative;
    height: 400px;
    overflow: hidden;
    .icon-xiangshangshuangjiantou,
    .icon-xiangxiashuangjiantou {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      font-size: 25px;
      cursor: pointer;
    }
    &:not(:first-of-type) {
      margin-top: 30px;
    }
  }
}
</style>
