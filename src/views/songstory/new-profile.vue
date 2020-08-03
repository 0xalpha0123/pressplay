<template>
  <ion-page>
    <ion-content :scrollEvents="true">
      <ion-card color="white" class="main-playing box-shadow content-card max-width">
        <ion-grid class="ion-no-padding visitor">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="">
                <div class="profile-pic-box">
                  <img src="../../assets/images/image 1.png" />
                  <div class="profile-close-btn">
                    <img src="../../assets/images/md-close2.png" />
                  </div>
                  <div class="profile-follow-btns">
                    <img src="../../assets/images/heart-empty-with-bg.png" />
                    <img src="../../assets/images/md-msg-alt.png" />
                  </div>
                  <h4 class="profile-score-bar">
                    <label>
                      <ion-text color="white">52% match</ion-text>
                    </label>
                    <img src="../../assets/images/Verified User.png" />
                  </h4>
                </div>
                <ion-row class="profile-empty-box">
                  <ion-col size="6"></ion-col>
                  <ion-col size="6"></ion-col>
                </ion-row>
                <div class="profile-details">
                  <h4 class="profile-title">
                    <ion-text color="dark">Caitlin Alexander</ion-text>
                    <img src="../../assets/images/md-star-outline.png" />
                  </h4>
                  <div class="profile-content">
                    <ion-text>Single Mom on a Mission who believes, above all, that Love Will Find a Way. Designer, Developer, Damn Good Dancer. Send me your ‘change the world’ music!</ion-text>
                  </div>
                </div>
                <ion-row class="ion-justify-content-center border-top-profile row-divider">
                  <ion-col size="6">
                    <div class="ion-text-left age-gender-detail">
                      <img src="../../assets/images/Group 29.png" />
                      27
                    </div>
                  </ion-col>
                  <ion-col size="6">
                    <div class="ion-text-right address-detail">Denver, CO</div>
                  </ion-col>
                </ion-row>
                <div class="now-playing-div">
                  <img src="../../assets/images/now-playing-bg.png" />
                  <div class="now-playing-popup">
                    <h4 class="popup-header">FAVORITE SONG</h4>
                    <div class="popup-content">
                      <img src="../../assets/images/md-play.png" />
                    </div>
                    <div class="popup-footer">
                      <h5>Wake, Rise, Shine</h5>
                      <label>Dustin Thomas</label>
                    </div>
                  </div>
                  <div class="now-playing-footer">
                    <div>
                      <img src="../../assets/images/Now Playing.png" />
                      <div>
                        <ion-text color="white">
                          <h4>now playing</h4>
                        </ion-text>
                        <ion-text>
                          <label>22 Matches</label>
                        </ion-text>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="../../assets/images/Group 10.png" />
                <div class="now-playing-div">
                  <img src="../../assets/images/discography-bg-3.png" />
                  <div class="now-playing-footer">
                    <div>
                      <img src="../../assets/images/Discography.png" />
                      <div>
                        <ion-text color="white">
                          <h4>Discography</h4>
                        </ion-text>
                        <ion-text color="warning">
                          <span>10 Matches</span>
                        </ion-text>
                      </div>
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
<style scoped>
.profile-pic-box,
.now-playing-div {
  position: relative;
}
.profile-pic-box .profile-close-btn {
  position: absolute;
  width: 50px;
  height: 50px;
  right: 6px;
  top: 6px;
}
.profile-pic-box .profile-follow-btns {
  position: absolute;
  width: 50px;
  left: 6px;
  top: 6px;
}
.profile-pic-box .profile-score-bar {
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 32px;
  color: #828282;
  font-size: 27px;
  width: 100%;
  z-index: 1;
}
.profile-score-bar label {
  background: linear-gradient(
    270deg,
    #cf9bff 7.94%,
    #9b51e0 46.78%,
    #5d148c 100%
  );
  flex-wrap: nowrap;
  word-wrap: unset;
  border-radius: 0px 62px 62px 0px;
  flex: auto;
  padding-left: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.profile-score-bar img {
  width: auto;
  height: 40px;
  margin: 0 25px;
}
.profile-empty-box ion-col {
  border-bottom: 1px solid #d5d5d5;
}
.profile-empty-box ion-col:first-child {
  border-right: 1px solid #d5d5d5;
  height: 75px;
}
.profile-details {
  padding: 0 36px 20px;
}
.profile-details .profile-title {
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
}
.profile-title img {
  width: 50px;
  height: 50px;
}
.profile-details .profile-content {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #737373;
}
.border-top-profile ion-col {
  border-top: 1px solid #d5d5d5;
}
.border-top-profile ion-col:first-child {
  border-right: 1px solid #d5d5d5;
}
.border-top-profile .age-gender-detail {
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 32px;
  color: #73737380;
  padding: 5px;
}
.age-gender-detail img {
  width: auto;
  height: 47px;
  margin: 0 10px;
}
.border-top-profile .address-detail {
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  color: #737373;
  height: 100%;
  padding: 15px;
  display: flex;
  align-content: center;
  justify-content: flex-end;
}
.now-playing-div .now-playing-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  background: #f3f4f4;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 40%;
  color: #807b80;
}
.now-playing-div .now-playing-popup .popup-header {
  font-weight: bold;
  background: #ffffff;
  margin: 0;
  border-radius: 16px 16px 0px 0px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 13px;
  line-height: 15px;
}
.now-playing-div .now-playing-popup .popup-content {
  display: flex;
  padding: 25px;
  justify-content: center;
  align-content: center;
}
.now-playing-div .now-playing-popup .popup-content img {
  width: auto;
}
.now-playing-div .now-playing-popup .popup-footer {
  line-height: 100%;
  line-height: 100%;
  padding: 10px;
}
.now-playing-div .now-playing-popup .popup-footer h5 {
  margin: 0;
  font-size: 14px !important;
  font-weight: 500;
}
.now-playing-div .now-playing-popup .popup-footer label {
  font-size: 12px;
  font-style: italic;
  font-weight: 300;
}
.now-playing-footer {
  position: absolute;
  bottom: 10px;
  padding: 15px;
}
.now-playing-footer > div {
  display: flex;
  align-items: center;
}
.now-playing-footer h4 {
  margin: 0;
  font-weight: 500;
  font-size: 23px;
  text-transform: capitalize;
  line-height: 27px;
}
.now-playing-footer label {
  color: #9b51e0;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
}
.now-playing-footer img {
  width: 41px;
  height: 41px;
  margin-right: 15px;
}
</style>