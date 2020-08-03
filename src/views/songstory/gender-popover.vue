<template>
  <div class="gender-popover-overlay" v-show="isOpen">
    <div :class="{'gender-popover' : true, visible: isOpen}">
      <h3>
        <ion-text color="dark">Caitlin’s Identity Makeup</ion-text>
      </h3>
      <div class="img-container">
        <img src="../../assets/images/gender-indicators.png" class="indicator-img" />
        <img src="../../assets/images/Group 29.png" class="gender-img" />
        <h5 class="top-left-heading">Identifies as female</h5>
        <h5 class="top-right-heading">Heterosexual (attracted to men)</h5>
        <h5 class="bottom-left-heading">Expresses 60% Fem</h5>
      </div>
      <div class="popover-buttons">
        <a href="#" class="more-info-button">more info</a>
        <a href="#" class="play-on-button" @click="togglePopup">Play On</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
<style scoped>
.gender-popover-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000084;
  z-index: 99;
}
.gender-popover-overlay .gender-popover {
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
.gender-popover-overlay .gender-popover.visible {
  top: 50%;
}
.gender-popover-overlay .gender-popover h3 {
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #4f4f4f;
}
.gender-popover .img-container {
  text-align: center;
  padding: 2rem 0;
  position: relative;
}
.gender-popover .indicator-img {
  position: absolute;
  left: 50%;
  transform: translateX(-45%);
}
.gender-popover h5 {
  font-weight: normal;
  font-size: 15px;
  line-height: 1.1;
  color: #737373;
  width: 100px;
}
.gender-popover .top-left-heading {
  position: absolute;
  top: 0;
  left: 25%;
  transform: translateX(-60%);
}
.gender-popover .bottom-left-heading {
  position: absolute;
  bottom: 0;
  left: 25%;
  transform: translate(-65%, -40%);
}
.gender-popover .top-right-heading {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-10%, 70%);
}
.gender-popover .popover-buttons {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
}
.popover-buttons .more-info-button {
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: lowercase;
  color: #5d148c;
  text-decoration: none;
}
.popover-buttons .play-on-button {
  font-weight: 800;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(
    175.6deg,
    #471b74 0.35%,
    #713682 80.95%,
    #aa2986 98.89%
  );
  text-decoration: none;
  border-radius: 98px;
  padding: 5px 40px;
}
</style>