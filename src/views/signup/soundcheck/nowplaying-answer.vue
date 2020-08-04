<template>
  <ion-page>
    <ion-content :scrollEvents="true">
      <ion-card class="main-playing box-shadow content-card max-width sound-check">
        <ion-grid class="ion-no-padding visitor">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="full-screen">
                <topbar showRightIcon="true"/>
                <div class="sound-check-content">
                  <h2>Now Playing</h2>
                  <h3> answers form this chart:</h3>
                </div>
                <!-- <div class="round-record">
                    <img src="../../../assets/images/two-circles.png" alt="record image" />
                </div> -->
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
                <a href="#">
                  <span class="play-list-song">3</span>
                </a>
              </ion-avatar>
              <ion-label class="text-capitalize">
                <h5>favorite genres</h5>
                <h6>folk, bluegrass, electronic</h6>
                <ion-text color="medium" class="text-small">Friends</ion-text>
              </ion-label>
              <ion-avatar class="avatar" slot="end">
                <img src="../../../assets/images/three-dots-small.png" class="small-icon" alt="menu icon" />
              </ion-avatar>
            </ion-item>
            <ion-item>
              <ion-avatar class="avatar" slot="start">
                <a href="#">
                  <span class="play-list-song">5</span>
                </a>
              </ion-avatar>
              <ion-label class="text-capitalize">
                <h5>favorite artists</h5>
                <h6>amber lily, tubby love, dust</h6>
              </ion-label>
              <ion-avatar class="avatar" slot="end">
                <img src="../../../assets/images/three-dots-small.png" class="small-icon" alt="menu icon" />
              </ion-avatar>
            </ion-item>
            <ion-item>
              <ion-avatar class="avatar" slot="start">
                <a href="#">
                  <span class="play-list-song">10</span>
                </a>
              </ion-avatar>
              <ion-label class="text-capitalize">
                <h5>favorite songs</h5>
                <h6>love will find a way, the matrix</h6>
              </ion-label>
              <ion-avatar class="avatar" slot="end">
                <img src="../../../assets/images/play.png" class="small-icon" alt="menu icon" />
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
.play-list-song {
    display: block;
    width: 24px;
    height: 24px;
    background: linear-gradient(163.44deg, #471b74 0.36%, #5d148c 56.93%, #aa2986 100%);
    border-radius: 100%;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    overflow: hidden;
}
.sound-check {
  height: 100vh;
    background: radial-gradient(
    81.45% 62.07% at 49.85% 67.49%,
    #7d35f3 0%,
    #471b74 100%
  );
  max-height: 380px;
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
.sound-check-content h3 {
  color: #f2c94c;
}
.music-list img.small-icon {
    width: auto;
    max-width: 36px;
    max-height: 36px;
    border-radius: 0;
    margin: auto 0;
}
</style>