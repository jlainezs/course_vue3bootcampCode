<template>
  <div class="modal" :style="{ display: show ? 'block' : 'none' }">
    <div class="modal-dialog" style="z-index: 2000">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Awesome Title</h5>
          <button type="button" class="close" @click="close">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Awesome content.</p>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    show: {
      required: true,
    },
    scrollable: {
      default: false,
    }
  },
  methods: {
    close() {
      this.$emit("hide");
    },
    handler(e) {
      if (e.code == "Escape" && this.show) {
        this.close();
      }
    }
  },
  watch: {
    show: {
      immediate: true,
      handler(newVal) {
        if (newVal && !this.scrollable) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  created() {
    document.addEventListener('keydown', this.handler);
  },
  onUnmounted() {
    document.removeEventLister('keydown', this.handler);
  },
};
</script>
