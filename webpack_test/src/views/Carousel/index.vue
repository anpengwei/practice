<template>
  <boxLayout>
    <div class="virtual_scrolling">
      <div
        class="wrapper"
        ref="wrapper"
        @scroll="handleScroll"
        :style="{ height: height + 'px' }"
      >
        <div ref="w">
          <div :style="{ height: `${shimTopOffset}px` }"></div>
          <div
            class="item"
            v-for="item in showList"
            :key="item.index"
            :style="{
              height: `${itemHeight}px`,
              color: item.color,
            }"
          >
            {{ item.index }}
          </div>
          <div :style="{ height: `${shimBottomOffset}px` }"></div>
        </div>
      </div>
    </div>
  </boxLayout>
</template>

<script>
export default {
  name: "carouselIndex",
  components: {},
  data() {
    return {
      height: 500,
      itemHeight: 50,
      data: Array.from({ length: 6000 }).map((_, index) => ({
        index,
        color: `#${Math.random()
          .toString(16)
          .substr(2, 6)}`,
      })),
      showList: [],
      shimTopOffset: 0,
      shimBottomOffset: 0,
    };
  },
  computed: {},
  watch: {
    data: {
      handler(newVal, oldVal) {
        if (oldVal) {
          this.$nextTick(() => {
            this.$refs.wrapper.scrollTop = 0;
            this.handleScroll();
          });
        }
      },
      immediate: true,
    },
    itemHeight() {
      this.handleScroll();
    },
  },
  methods: {
    handleScroll() {
      const scrollTop = this.$refs.wrapper.scrollTop;
      if (scrollTop >= 0 && scrollTop + this.height <= this.maxHeight) {
        window.requestAnimationFrame(() => {
          this.update(scrollTop);
        });
      }
    },
    update(scrollTop) {
      const visibleStart = scrollTop;
      const visibleEnd = scrollTop + this.height;
      this.showList = this.getShowList(visibleStart, visibleEnd, this.data);
    },
    getShowList(start, end, data) {
      if (start < end) {
        const lo = this.getStartIndex(start, this.itemHeight);
        const hi = this.getEndIndex(end, this.itemHeight);
        this.shimTopOffset = lo >= 0 ? lo * this.itemHeight : 0;
        this.shimBottomOffset =
          hi >= 0 ? (data.length - hi) * this.itemHeight : 0;
        return data.slice(lo, hi);
      } else {
        this.shimTopOffset = 0;
        this.shimBottomOffset = 0;
        return [];
      }
    },
    getStartIndex(s, itemHeight) {
      const startIndex = ~~(s / itemHeight);
      return startIndex >= 0 ? startIndex : 0;
    },
    getEndIndex(e, itemHeight) {
      const endIndex = Math.ceil(e / itemHeight);
      return endIndex <= this.data.length ? endIndex : this.data.length;
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs);
      this.maxHeight = this.$refs.w.offsetHeight;
    });
    this.update(0);
  },
};
</script>
<style lang="less" scoped>
.virtual_scrolling {
  width: 300px;
  .wrapper {
    height: 100%;
    overflow: auto;
  }

  .item {
    height: 50px;
    padding-left: 50px;
  }
}
</style>
