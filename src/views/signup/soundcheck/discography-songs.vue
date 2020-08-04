<template>
  <ion-page>
    <ion-content :scrollEvents="true">
      <ion-card class="main-playing box-shadow content-card max-width sound-check">
        <ion-grid class="ion-no-padding visitor">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="full-screen">
                <topbar :showRightIcon="true" />
                <div class="sound-check-content">
                  <h2>press play on any question to answer</h2>
                </div>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
      <ion-row class="music-list">
        <ion-col>
          <ion-list lines="full">
            <ion-item>
              <ion-avatar class="avatar" slot="start">
                <img
                  src="../../../assets/images/search-purple.png"
                  class="small-icon"
                  alt="search icon"
                />
              </ion-avatar>
              <ion-label class="text-capitalize">
                <h5>best day of your life song</h5>
              </ion-label>
              <ion-avatar class="avatar" slot="end">
                <img src="../../../assets/images/play.png" class="small-icon" alt="menu icon" />
              </ion-avatar>
            </ion-item>
            <ion-item>
              <ion-avatar class="avatar" slot="start">
                <img
                  src="../../../assets/images/search-gray.png"
                  class="small-icon"
                  alt="search icon"
                />
              </ion-avatar>
              <ion-label class="text-capitalize">
                <h5>first kiss</h5>
              </ion-label>
              <ion-avatar class="avatar" slot="end">
                <img src="../../../assets/images/paly-purple.png" class="small-icon" alt="menu icon" />
              </ion-avatar>
            </ion-item>
            <ion-item>
              <ion-avatar class="avatar" slot="start">
                <img
                  src="../../../assets/images/search-gray.png"
                  class="small-icon"
                  alt="search icon"
                />
              </ion-avatar>
              <ion-label class="text-capitalize">
                <h5>first musical memory</h5>
              </ion-label>
              <ion-avatar class="avatar" slot="end">
                <img src="../../../assets/images/paly-purple.png" class="small-icon" alt="menu icon" />
              </ion-avatar>
            </ion-item>
          </ion-list>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>
<script>
import topbar from "./topbar";
export default {
  components: {
    topbar
  }
};
</script>
<style scoped>
.sound-check {
  height: 100vh;
  background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.13%, #28CAED 100%);
  max-height: 350px;
  border-radius: 0px 0px 50px 50px;
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
  color: #fff;
}
.music-list img.small-icon {
    width: auto;
    max-width: 36px;
    max-height: 36px;
    border-radius: 0;
    margin: auto 0;
}
</style>