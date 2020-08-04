<template>
  <div class="modal-popover-overlay" v-show="isOpen">
    <div :class="{'modal-popover' : true, visible: isOpen}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
.modal-popover-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000084;
  z-index: 99;
}
.modal-popover-overlay .modal-popover {
  background: #ffffff;
  box-shadow: 0px 1px 8px #333333;
  border-radius: 25px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  transition: all ease;
  transition-duration: 0.5s;
}
.modal-popover-overlay .modal-popover.visible {
  top: 50%;
}
</style>