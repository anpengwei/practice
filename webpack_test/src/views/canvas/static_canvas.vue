<template>
  <div class="static_canvas">
    <smilingFace />
    <dialogueBubble />
    <snowFlake />
  </div>
</template>

<script>
import smilingFace from "./component/smiling_face";
import dialogueBubble from "./component/dialogue_bubble";
import snowFlake from "./component/snow_flake";
export default {
  name: "staticCanvas",
  components: { smilingFace, dialogueBubble, snowFlake },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.static_canvas {
  padding: 20px;
  display: flex;
  align-items: center;
}
</style>
