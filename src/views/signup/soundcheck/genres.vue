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
                    what are your top 3 favorite
                    <span>genres</span>?
                  </h2>
                  <ion-row class="ion-justify-content-center">
                    <ion-col size="4">
                      <square-with-count class="genre-card" countValue="1" />
                    </ion-col>
                    <ion-col size="4">
                      <square-with-count class="genre-card" countValue="2" />
                    </ion-col>
                    <ion-col size="4">
                      <square-with-count class="genre-card" countValue="3" />
                    </ion-col>
                  </ion-row>
                </div>
                <search-box placeholder="search for a genre..." />
                <div class="genre-list">
                  <ion-row class="ion-justify-content-center">
                    <ion-col>
                      <square-with-center-label class="genre-square bg-rock" label="rock" />
                    </ion-col>
                    <ion-col>
                      <square-with-center-label class="genre-square bg-hip-hop" label="hip-hop" />
                    </ion-col>
                  </ion-row>
                  <ion-row class="ion-justify-content-center">
                    <ion-col>
                      <square-with-center-label
                        class="genre-square bg-electronic"
                        label="electronic"
                      />
                    </ion-col>
                    <ion-col>
                      <square-with-center-label class="genre-square bg-country" label="country" />
                    </ion-col>
                  </ion-row>
                  <ion-row class="ion-justify-content-center">
                    <ion-col>
                      <square-with-center-label class="genre-square bg-soul" label="soul" />
                    </ion-col>
                    <ion-col>
                      <square-with-center-label class="genre-square bg-folk" label="folk" />
                    </ion-col>
                  </ion-row>
                </div>
                <h3 class="load-more-button">load more</h3>
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
  padding: 60px;
}
.sound-check-content h2 {
  font-style: normal;
  font-weight: 900;
  font-size: 29px;
  line-height: 1.1;
  text-align: center;
  color: #ffffff;
  margin-bottom: 35px;
}
.sound-check-content h2 span {
  color: #64edf2;
}
.sound-check .genre-card {
  width: 75px;
  height: 75px;
  background: #ffffff0f;
  color: #fff;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 24px;
}
.genre-list {
  padding: 10px 38px;
}
.genre-square {
  height: 150px;
  text-align: center;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.bg-rock {
  background: #2e73fb;
}
.bg-hip-hop {
  background: #28caed;
}
.bg-electronic {
  background: #ff26a8;
}
.bg-country {
  background: #f2c94c;
}
.bg-soul {
  background: #7d35f3;
}
.bg-folk {
  background: #81abff;
}
.load-more-button {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.08em;
  color: #f5de79;
  text-transform: uppercase;
}
</style>