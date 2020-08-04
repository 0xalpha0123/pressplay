<template>
  <div class="soundcheck-square" :class="className">
    <span>{{ label }}</span>
  </div>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      required: false
    },
    label: {
      type: [String, Number],
      required: false
    }
  }
};
</script>
<style scoped>
.soundcheck-square {
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
}
</style>