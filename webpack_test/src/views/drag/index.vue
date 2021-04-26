<template>
  <div class="drag_class">
    <div class="droppable">
      <div class="draggable" draggable="true"></div>
    </div>
    <div class="droppable"></div>
    <div class="droppable"></div>
    <div class="droppable"></div>
    <div class="droppable"></div>
  </div>
</template>

<script>
export default {
  name: "dragIndex",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      const draggable = document.querySelector(".draggable");
      const droppables = document.querySelectorAll(".droppable");

      // * 监听 draggable的相关事件
      draggable.addEventListener("dragstart", dragStart);
      draggable.addEventListener("dragend", dragEnd);
      function dragStart() {
        this.className += " dragging";
        setTimeout(() => {
          this.className = "invisible";
        }, 0);
      }
      function dragEnd() {
        this.className = "draggable";
      }
      // * 监听droppable的相关事件
      for (let droppable of droppables) {
        droppable.addEventListener("dragover", dragOver);
        droppable.addEventListener("dragleave", dragLeave);
        droppable.addEventListener("dragenter", dragEnter);
        droppable.addEventListener("drag", dragDrop);
      }
      function dragOver(e) {
        e.preventDefault();
      }
      function dragLeave(e) {
        this.className = "droppable";
      }
      function dragEnter(e) {
        e.preventDefault();
        this.className += " drag-over";
      }
      function dragDrop(e) {
        this.className = "droppable";
        this.append(draggable);
      }
    },
  },
  created() {},
  mounted() {
    this.init();
  },
};
</script>
<style lang="less" scoped>
.draggable {
  background-image: url("../../assets/image/backgroud.jpg");
  position: relative;
  height: 150px;
  width: 150px;
  top: 5px;
  left: 5px;
  cursor: pointer;
}
.droppable {
  display: inline-block;
  height: 160px;
  width: 160px;
  margin: 10px;
  border: 3px salmon solid;
  background-color: white;
}
.dragging {
  border: 4px yellow solid;
}
.invisible {
  display: none;
}
.drag-over {
  background-color: #f4f4f4;
  border-style: dashed;
}
</style>
