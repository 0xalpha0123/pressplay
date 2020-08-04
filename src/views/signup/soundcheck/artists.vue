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
                    what are your top 5
                    <span>artists</span> or
                    <span>bands</span>?
                  </h2>
                  <ion-row class="ion-justify-content-center five-col-view">
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue="1" />
                      <span class="genre-card-title">seether</span>
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue="2" />
                      <span class="genre-card-title">coldplay</span>
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue="3" />
                      <span class="genre-card-title">kanye west</span>
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue="4" />
                      <span class="genre-card-title">lumineers</span>
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue="5" />
                      <span class="genre-card-title">beatles</span>
                    </ion-col>
                  </ion-row>
                </div>
                <search-box placeholder="search for an artist or band..." />
                <div class="genre-list">
                  <ion-row class="ion-justify-content-center">
                    <ion-col size="3">
                      <square-with-center-label class="genre-square bg-rock" label="rock" />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                  </ion-row>
                  <ion-row class="ion-justify-content-center">
                    <ion-col size="3">
                      <square-with-center-label class="genre-square bg-hip-hop" label="hip-hop" />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                  </ion-row>
                  <ion-row class="ion-justify-content-center">
                    <ion-col size="3">
                      <square-with-center-label class="genre-square bg-country" label="country" />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                    <ion-col size="2">
                      <square-with-count class="genre-card" countValue />
                    </ion-col>
                  </ion-row>
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
import squareWithCount from "./square-with-count";
import squareWithCenterLabel from "./square-with-center-label";
import searchBox from "./search-box";
export default {
  components: {
    topbar,
    squareWithCount,
    searchBox,
    squareWithCenterLabel
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
  padding-left: 53px;
  padding-right: 53px;
}
.sound-check-content h2 span {
  color: #64edf2;
}
.five-col-view {
  --ion-grid-columns: 10;
}
.sound-check .genre-card {
  height: 58px;
  border-radius: 18px;
  background: #ffffff0f;
  color: #fff;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 24px;
}
.sound-check .genre-card-title {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.genre-list {
  padding: 10px;
}
.genre-list .genre-card {
  height: 50px;
}
.genre-square {
  height: 75px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.bg-rock {
  background: #2e73fb;
}
.bg-hip-hop {
  background: #28caed;
}
.bg-country {
  background: #f2c94c;
}
</style>