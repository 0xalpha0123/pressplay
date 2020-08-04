<template>
  <ion-page>
    <ion-content :scrollEvents="true">
      <ion-card class="main-playing box-shadow content-card max-width sound-check">
        <ion-grid class="ion-no-padding visitor">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="full-screen">
                <topbar showRightIcon="true" />
                <div class="sound-check-content">
                  <h2>Discography</h2>
                  <span> answers form this timeline:</span>
                </div>
                <div class="round-record">
                    <img src="../../../assets/images/two-circles.png" alt="record image" />
                </div>
                <div class="line-stroke"></div>
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
                  src="../../../assets/images/blue-checkmark.png"
                  class="small-icon"
                  alt="search icon"
                />
              </ion-avatar>
              <ion-label class="text-capitalize">
                <h5>first musical memory</h5>
                <h6 class="text-capitalize">I Love You</h6>
                <ion-text color="medium" class="text-small">Friends</ion-text>
              </ion-label>
              <ion-avatar class="avatar" slot="end">
                <img src="../../../assets/images/play.png" class="small-icon" alt="menu icon" />
              </ion-avatar>
            </ion-item>
            <ion-item>
              <ion-avatar class="avatar" slot="start">
                <img
                  src="../../../assets/images/search-purple.png"
                  class="small-icon"
                  alt="search icon"
                />
              </ion-avatar>
              <ion-label class="text-capitalize">
                <h5>Best day of your life song</h5>
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
                <h5>First Kiss</h5>
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
.round-record {
    position: absolute;
    left: 100px;
    bottom: 90px;
    max-width: 22px;
}
.line-stroke {
    height: 3px;
    width: 70%;
    margin-top:5px;
    margin-left: 50px;
    background: #FFFFFF;
    /* background: linear-gradient(rgba(255, 255, 255, 0) 0%, #FFFFFF 53.13%, rgba(255, 255, 255, 0) 100%); */
}
.sound-check {
  height: 100vh;
  background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.13%, #28CAED 100%);
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
.sound-check-content span {
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 1.15;
  text-align: center;
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