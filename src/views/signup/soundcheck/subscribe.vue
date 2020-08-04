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
                    let’s begin building your
                    <span>SongStory</span>
                  </h2>
                  <div class="sound-circle"></div>
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
export default {
  components: {
    topbar
  }
};
</script>
<style scoped>
.sound-check {
  background: radial-gradient(
    61.96% 51.91% at 51.68% 71.93%,
    #aa2986 0%,
    #8c3084 14%,
    #783482 27%,
    #713682 36%,
    #471b74 90%
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
.sound-check-content h2 span {
  color: #ffffff;
}
.sound-check .sound-circle {
  width: 232px;
  height: 233px;
  background: #471b74;
  border-radius: 50%;
  margin: auto;
  margin-top: 60px;
}
</style>