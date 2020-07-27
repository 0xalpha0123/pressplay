<template>
  <ion-page>
    <ion-content :scrollEvents="true">
      <ion-card
        color="white"
        class="main-playing box-shadow content-card max-width"
      >
        <ion-grid class="ion-no-padding">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="full-screen">
                <div class="playing-box">
                  <div class="play-pause-btn">
                    <a href="#">
                      <img src="../../assets/images/play-btn.png" alt="play pause button" />
                    </a>
                  </div>
                  <div class="play-on-off">
                    <label>
                      <span>
                          <img src="../../assets/images/messages-icon.png" alt="play pause button" />
                      </span>
                    </label> 
                  </div>
                  <ion-text color="white">
                    <div class="discography-title">slow dance</div>
                  </ion-text>
                  <div class="">
                    <img src="../../assets/images/sail-away.png" alt="discography image" />
                    <div class="play-record">
                      <a href="#">
                        <img src="../../assets/images/play.png" alt="record image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="view-answer">
                  <div class="title">Caitlin A </div>
                  <div class="sub-title">her first slow dance song: </div>
                  <div class="color-golden">december 2005</div>
                </div>
                <ion-row>
                  <ion-col>
                    <div class="music-body">
                      <ion-list lines="full">
                        <ion-item>
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/blue-checkmark.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize">
                            <h5>Come sail away</h5>
                            <h6>styx</h6>
                          </ion-label>
                          <ion-avatar class="avatar" slot="end">
                            <img
                              src="../../assets/images/play.png"
                              class="small-icon"
                              alt="menu icon"
                            />
                          </ion-avatar>
                        </ion-item>
                        <ion-item>
                          <ion-label class="text-capitalize">
                            <h6>come sail awaaaaay...</h6>
                          </ion-label>
                        </ion-item>
                        <ion-item>
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/pressplay-icon.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize showfull">
                            <ion-text color="medium">
                              <h6>First Slow Dance, Guilty PleasuresBest Guitar Solos</h6>
                            </ion-text>
                          </ion-label>
                          <ion-label>
                            <ion-text class="view-text" color="medium">
                              <h6>VIEW</h6>
                            </ion-text>
                          </ion-label>
                        </ion-item>
                      </ion-list>
                    </div>
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
<style lang="scss" scoped>
.playing-box {
  padding: unset;
}
.play-pause-btn {
  position: absolute;
  left: 15px;
  top: 3px;
  max-width: 30px;
  z-index: 9;
}
.play-record { 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 45px;
}
.play-on-off {
  position: absolute;
  right: 15px;
  top: 3px;
  z-index: 10;
  width: 30px;
  height: 20px;
  cursor: pointer;
}
.view-answer{
  width: 100% !important;
  text-align: center;
  color:#000;
  padding: 0.5rem 0 0.5rem 0rem !important;
}
.title {
  font-weight: 800;
  font-size: 1rem;
  line-height: 27px;
}
.sub-title {
  font-style: normal;
  font-weight: 900;
  line-height: 110%;
  text-align: center;
}
.color-golden {
  color: #f2c94c;
}
.view-text {
  float: right;
  color: #9b51e0;
}
.showfull {
    text-overflow: unset;
    white-space: unset;
}
</style>