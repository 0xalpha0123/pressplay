<template>
  <div class="soundcheck-search-box">
    <input placeholder="search for a genre..." />
  </div>
</template>
<style scoped>
.soundcheck-search-box {
  padding: 10px;
  position: relative;
}
.soundcheck-search-box input {
  width: 100%;
  border-radius: 41px;
  padding: 10px 28px 10px 48px;
  border: none;
  background: #ffffff0f;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-transform: lowercase;
  color: #ffffff;
}
.soundcheck-search-box input::placeholder {
  opacity: 1;
}
.soundcheck-search-box:before {
  background: url(../../../assets/images/md-search.png);
  position: absolute;
  width: 36px;
  height: 36px;
  left: 16px;
  top: 18px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  content: "";
}
</style>