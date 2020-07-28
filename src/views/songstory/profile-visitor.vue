<template>
  <ion-page>
    <ion-content :scrollEvents="true">
      <ion-card color="white" class="main-playing box-shadow content-card max-width">
        <ion-grid class="ion-no-padding visitor">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="full-screen">
                <div class="profile-main-section">
                  <aspect-ratio
                    class="profile-banner"
                    ratio="16:9"
                    ratio-md="16:5"
                    ref="profileBanner"
                  ></aspect-ratio>
                  <div class="profile-header">
                    <div>
                      <div class="album-img">
                        <img src="../../assets/images/mira_3.png" />
                      </div>
                      <div class="profile-text">
                        <ion-text color="warning">
                          <h3>
                            52%
                            <br />Match
                          </h3>
                        </ion-text>
                        <div class="ion-justify-content-evenly profile-sub-text">
                          <ion-text color="warning">
                            <div class="profile-text-count">
                              22
                              <img src="../../assets/images/Now Playing Icon.png" />
                            </div>
                          </ion-text>
                          <ion-text color="warning">
                            <div class="profile-text-count">
                              10
                              <img src="../../assets/images/Discography.png" />
                            </div>
                          </ion-text>
                        </div>
                      </div>
                    </div>
                    <div class="profile-arrow-dropdown">
                      <a href="#">
                        <img src="../../assets/images/md-arrow-dropdown.png" alt="arrow dropdown" />
                      </a>
                    </div>
                    <div class="profile-title">
                      <ion-text color="white">
                        <h4>Caitlin A</h4>
                        <ion-text color="warning">last online: 2hr ago</ion-text>
                      </ion-text>
                    </div>
                    <div class="profile-verified-user">
                      <label>
                        <span>
                          <img
                            src="../../assets/images/Verified User.png"
                            alt="verified user button"
                          />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center profile-content">
            <ion-col>
              <ion-text
                color="dark"
              >Single Mom on a Mission who believes, above all, that Love Will Find a Way. Designer, Developer, Damn Good Dancer. Send me your ‘change the world’ music!</ion-text>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center border-top-profile row-divider">
            <ion-col size="6">
              <div class="ion-text-center rockstart-title">
                <img src="../../assets/images/rock-star.png" />
                Rockstar
              </div>
            </ion-col>
            <ion-col size="6">
              <div class="ion-text-center gender-detail">
                <img src="../../assets/images/Group 29.png" />
                <div>
                  <h2>
                    27
                    <small>yrs old</small>
                  </h2>
                  <h2>Denver, CO</h2>
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
.profile-arrow-dropdown {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 8px;
  top: 7px;
}
.profile-verified-user {
  position: absolute;
  width: 32px;
  right: 8px;
  top: 6px;
}
.profile-title {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  text-align: center;
}
.profile-title h4 {
  margin-bottom: 0;
}
.album-img {
  background: url("../../assets/images/Artboard 3 2.png"),
    url("../../assets/images/Ellipse 1.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.album-img img {
  padding: 1.5rem;
}

.profile-text {
  position: absolute;
  right: 0;
  left: 50%;
  bottom: -50%;
  text-align: center;
  margin-bottom: 15px;
}
.profile-sub-text {
  display: flex;
}
.profile-text-count {
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.profile-content {
  margin-top: 6rem;
  padding: 7%;
  font-size: 18px;
  line-height: 21px;
  color: #737373;
}
.border-top-profile {
  border: 1px solid #d5d5d5;
}
.rockstart-title {
  font-weight: bold;
  font-size: 16px;
  border-right: 1px solid #d5d5d5;
}
.gender-detail,
.rockstart-title {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 22px;
  color: #828282;
}
.rockstart-title img,
.gender-detail img {
  height: 50px;
  width: auto;
  margin-right: 15px;
}
.gender-detail h2 {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
}
</style>