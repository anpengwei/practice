<template>
  <div class="dialogue_bubble">
    <section class="canvas_title">二次贝塞尔曲线（对话气泡）</section>
    <canvas id="bubble" width="200" height="200"></canvas>
  </div>
</template>

<script>
export default {
  name: "dialogueBubble",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    DrawBubble() {
      const canvas = document.getElementById("bubble");
      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.strokeRect(0, 0, 200, 200);

        // 二次贝塞尔曲线
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
        ctx.stroke();
      }
    },
  },
  created() {},
  mounted() {
    this.DrawBubble();
  },
};
</script>
<style lang="less" scoped></style>
