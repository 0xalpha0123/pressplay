<template>
  <div class="soundcheck-square" :class="className">
    <span>{{ countValue }}</span>
  </div>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      required: false
    },
    countValue: {
      type: [String, Number],
      required: false
    }
  }
};
</script>
<style scoped>
.soundcheck-square {
  border-radius: 0px;
  position: relative;
}
.soundcheck-square span {
  position: absolute;
  top: 3px;
  left: 8px;
}
</style>