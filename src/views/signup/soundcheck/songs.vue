<template>
  <ion-page>
    <ion-content :scrollEvents="true">
      <ion-card class="main-playing box-shadow content-card max-width sound-check">
        <ion-grid class="ion-no-padding visitor">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="full-screen">
                <topbar />
                <div class="sound-check-content">
                  <h2>
                    yo, put that record on! tell us your
                    <span>favorite songs</span>
                  </h2>
                </div>
                <ion-row class="soundcheck-list song-list">
                  <ion-col>
                    <ion-item class="ion-justify-content-center" lines="full">
                      <ion-avatar class="avatar start-avatar" slot="start">
                        <img src="../../../assets/images/eject-outline.png" />
                      </ion-avatar>
                      <ion-label class="text-capitalize">
                        <h5>Come Sail Away</h5>
                        <h6>Styx</h6>
                      </ion-label>
                      <ion-avatar class="avatar" slot="end">
                        <img src="../../../assets/images/play-outline.png" />
                      </ion-avatar>
                    </ion-item>
                  </ion-col>
                </ion-row>
                <search-box placeholder="search for a song..." />
                <ion-row class="soundcheck-list artist-list">
                  <ion-col>
                    <ion-item class="ion-justify-content-center" lines="none">
                      <ion-avatar class="avatar start-avatar" slot="start"></ion-avatar>
                      <ion-label class="text-capitalize">
                        <h5>seether</h5>
                      </ion-label>
                    </ion-item>
                  </ion-col>
                </ion-row>
                <ion-row class="soundcheck-list song-list">
                  <ion-col>
                    <ion-item class="ion-justify-content-center" lines="full">
                      <ion-avatar class="avatar start-avatar" slot="start">
                        <img src="../../../assets/images/eject-outline.png" />
                      </ion-avatar>
                      <ion-label class="text-capitalize">
                        <h5>Come Sail Away</h5>
                        <h6>Seether</h6>
                      </ion-label>
                      <ion-avatar class="avatar" slot="end">
                        <img src="../../../assets/images/play-outline.png" />
                      </ion-avatar>
                    </ion-item>
                    <ion-item class="ion-justify-content-center" lines="full">
                      <ion-avatar class="avatar start-avatar" slot="start">
                        <img src="../../../assets/images/eject-outline.png" />
                      </ion-avatar>
                      <ion-label class="text-capitalize">
                        <h5>Come Sail Away</h5>
                        <h6>Seether</h6>
                      </ion-label>
                      <ion-avatar class="avatar" slot="end">
                        <img src="../../../assets/images/play-outline.png" />
                      </ion-avatar>
                    </ion-item>
                  </ion-col>
                </ion-row>
                <ion-row class="soundcheck-list artist-list">
                  <ion-col>
                    <ion-item class="ion-justify-content-center" lines="none">
                      <ion-avatar class="avatar start-avatar" slot="start"></ion-avatar>
                      <ion-label class="text-capitalize">
                        <h5>coldplay</h5>
                      </ion-label>
                    </ion-item>
                    <ion-item class="ion-justify-content-center" lines="none">
                      <ion-avatar class="avatar start-avatar" slot="start"></ion-avatar>
                      <ion-label class="text-capitalize">
                        <h5>kanye west</h5>
                      </ion-label>
                    </ion-item>
                    <ion-item class="ion-justify-content-center" lines="none">
                      <ion-avatar class="avatar start-avatar" slot="start"></ion-avatar>
                      <ion-label class="text-capitalize">
                        <h5>lumineers</h5>
                      </ion-label>
                    </ion-item>
                    <ion-item class="ion-justify-content-center" lines="none">
                      <ion-avatar class="avatar start-avatar" slot="start"></ion-avatar>
                      <ion-label class="text-capitalize">
                        <h5>beatles</h5>
                      </ion-label>
                    </ion-item>
                  </ion-col>
                </ion-row>
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
import searchBox from "./search-box";
export default {
  components: {
    topbar,
    searchBox
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
}
.sound-check-content {
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 60px;
  padding-bottom: 20px;
}
.sound-check-content h2 {
  font-style: normal;
  font-weight: 900;
  font-size: 29px;
  line-height: 1.1;
  text-align: center;
  color: #ffffff;
  margin-bottom: 35px;
  padding-left: 30px;
  padding-right: 30px;
}
.sound-check-content h2 span {
  color: #64edf2;
}
.soundcheck-list {
  margin-bottom: 25px;
}
.soundcheck-list ion-item {
  --background: none;
}
.soundcheck-list ion-item ion-avatar.start-avatar {
  background: rgba(255, 255, 255, 0.15);
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.soundcheck-list ion-item ion-label {
  padding-left: 10px;
  padding-right: 10px;
}
.soundcheck-list ion-item ion-label h5 {
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 1.2;
  color: #ffffff;
}
.song-list ion-item ion-label h6 {
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 14px;
  color: #f2c94c;
}
.artist-list {
  margin-top: 25px;
}
.artist-list ion-avatar {
  --border-radius: 18px;
  width: 59px;
  height: 58px;
}
.artist-list ion-item {
  padding: 9px 0;
}
</style>