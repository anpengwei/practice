<template>
  <div class="snow_flake">
    <section class="canvas_title">雪花</section>
    <canvas id="snow" width="200" height="200"></canvas>
  </div>
</template>

<script>
export default {
  name: "snowFlake",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    DrawSnow() {
      const canvas = document.getElementById("snow");
      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.strokeRect(0, 0, 200, 200);

        for (let i = 0; i < 3; i++) {
          ctx.save();

          ctx.translate(100, 100);
          ctx.rotate((i * Math.PI) / 3);
          ctx.moveTo(0, -50);
          ctx.lineTo(0, 50);
          ctx.stroke();

          ctx.restore();

          ctx.save();
          ctx.translate(100, 75);
          ctx.rotate(Math.PI / 4);
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -25);
          ctx.stroke();

          ctx.restore();

          ctx.save();
          ctx.translate(100, 75);
          ctx.moveTo(0, 0);
          ctx.rotate(-Math.PI / 4);
          ctx.lineTo(0, -25);
          ctx.stroke();

          ctx.restore();
        }
      }
    },
  },
  created() {},
  mounted() {
    this.DrawSnow();
  },
};
</script>
<style lang="less" scoped></style>
