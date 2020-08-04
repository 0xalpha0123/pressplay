<template>
  <common-modal :isOpen="isOpen">
    <div class="modal-content">
      <img class="top-left-icon" src="../../../assets/images/slow.png" />
      <img class="top-right-icon reverse-img" src="../../../assets/images/slow.png" />
      <div class="grey-eclipse"></div>
      <h3>you like it, you love it</h3>
      <p>The rest of your top 10 songs and many more Now Playing questions are available with a subscription</p>
      <div class="footer-button" @click="togglePopup">I want some more of it</div>
    </div>
  </common-modal>
</template>

<script>
import commonModal from "./common-modal";
export default {
  components: {
    commonModal
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    togglePopup: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
.modal-content {
  height: 100%;
  width: 100%;
  padding: 22px 10px 11px;
  position: relative;
}
.grey-eclipse {
  margin: auto;
  width: 232px;
  height: 233px;
  background: #e0e0e0;
  border-radius: 50%;
}
.top-left-icon,
.top-right-icon {
  height: 40px;
  position: absolute;
  top: 10px;
}
.top-left-icon {
  left: 10px;
}
.top-right-icon {
  right: 10px;
}
.reverse-img {
  transform: rotate(180deg);
}
h3 {
  font-style: normal;
  font-weight: 900;
  font-size: 29px;
  line-height: 1.1;
  text-align: center;
  color: #333333;
}
p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #737373;
  padding: 13px;
}
.footer-button {
  background: linear-gradient(270deg, #ff26a8 0%, #f2c94c 100%);
  border-radius: 36px;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 0.08em;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 1.4;
  padding: 18px 20px;
  text-align: center;
}
</style>