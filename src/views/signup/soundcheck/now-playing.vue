<template>
  <ion-page>
    <ion-content :scrollEvents="!isOpen">
      <subscribe-modal :togglePopup="togglePopup" :isOpen="isOpen" />
      <ion-card class="main-playing box-shadow content-card max-width sound-check">
        <ion-grid class="ion-no-padding visitor">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="full-screen">
                <topbar />
                <div class="sound-check-content">
                  <h2>your current tastes make up your</h2>
                  <h3>Now Playing</h3>
                  <div class="sound-circle" @click="togglePopup">
                    <div>
                      <img src="../../../assets/images/now-playing-bw.png" />
                      <h5>currently on repeat</h5>
                    </div>
                  </div>
                </div>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script>
import topbar from "./topbar";
import subscribeModal from "./subscribe-modal";
export default {
  components: {
    topbar,
    subscribeModal
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    togglePopup() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style scoped>
.sound-check {
  background: radial-gradient(
    81.45% 62.07% at 49.85% 67.49%,
    #7d35f3 0%,
    #471b74 100%
  );
  height: 100vh;
}
.sound-check-content {
  text-align: center;
  padding: 44px;
}
.sound-check-content h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 1.15;
  text-align: center;

  color: #f2c94c;
}
.sound-check-content h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 1.15;
  text-align: center;
  color: #ffffff;
}
.sound-check .sound-circle {
  width: 232px;
  height: 233px;
  background: #471b74;
  border-radius: 50%;
  margin: auto;
  position: relative;
}
.sound-circle > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.sound-circle img {
  width: 75px;
  height: 75px;
  margin: auto;
}
.sound-circle h5 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin: 0;
}
</style>