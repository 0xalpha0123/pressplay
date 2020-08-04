<template>
  <div class="soundcheck-topbar">
    <h1>
      <img src="../../../assets/images/rewind-outline.png" />
      sound check
    </h1>
  </div>
</template>
<style scoped>
.soundcheck-topbar {
  background: url("../../../assets/backgrounds/soundcheck-header.svg");
  height: 108px;
  padding: 10px;
  background-size: contain;
  background-repeat: repeat-x;
}
.soundcheck-topbar h1 {
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin: 0;
  text-align: center;
  color: #5d148c;
}
.soundcheck-topbar h1 img {
  position: absolute;
  left: 1.94%;
  top: 0.63%;
  width: 40px;
  fill: red;
}
</style>