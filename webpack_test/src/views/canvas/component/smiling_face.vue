<template>
  <div class="smiling_face">
    <section class="canvas_title">笑脸</section>
    <canvas id="smiling" width="200" height="200"></canvas>
  </div>
</template>

<script>
export default {
  name: "smilingFace",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    DrawSmile() {
      const canvas = document.getElementById("smiling");
      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.strokeRect(0, 0, 200, 200);

        ctx.beginPath(); // 绘制一条新路径
        ctx.arc(100, 100, 50, 0, Math.PI * 2, true); // true: 逆时针 false: 顺时针
        ctx.moveTo(135, 100); // 移动笔触到指定 x y 位置上
        ctx.arc(100, 100, 30, 0, Math.PI, false);
        ctx.moveTo(90, 90);
        ctx.arc(90, 90, 5, 0, Math.PI * 2, true);
        ctx.moveTo(110, 90);
        ctx.arc(110, 90, 5, 0, Math.PI * 2, true);

        ctx.stroke();
      }
    },
  },
  created() {},
  mounted() {
    this.DrawSmile();
  },
};
</script>
<style lang="less" scoped>
</style>
