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
                  <ion-text color="white">
                    <div class="discography-title">now playing</div>
                  </ion-text>
                  <div class="discography-sub-title">your currently on repeat</div>
                  <div class="discography-img">
                    <img src="../../assets/images/playing-img.png" alt="discography image" />
                  </div>
                  <div class="discography-ans">
                    <ion-text color="white">
                      <h3>10 answers</h3>
                    </ion-text>
                  </div>
                  <div class="round-record">
                    <a href="#">
                      <img src="../../assets/images/round.png" alt="record image" />
                    </a>
                  </div>
                </div>
                <div class="view-answer">
                  <p>view unanswered only</p>
                </div>
                <ion-row>
                  <ion-col>
                    <div class="music-body">
                      <ul class="music-tab-menu">
                        <li>
                          <a href="#">all</a>
                        </li>
                        <li class="active">
                          <a href="#">favorites</a>
                        </li>
                        <li>
                          <a href="#">least favorites</a>
                        </li>
                        <li>
                          <a href="#">moods</a>
                        </li>
                      </ul>
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
                          </ion-label>
                          <ion-avatar class="avatar" slot="end">
                            <img
                              src="../../assets/images/play-icon.png"
                              class="small-icon"
                              alt="menu icon"
                            />
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
                            <img
                              src="../../assets/images/play-icon.png"
                              class="small-icon"
                              alt="menu icon"
                            />
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
                            <ion-text
                              color="medium"
                              class="text-small"
                            >mika love, brandi carlile, dustin trans</ion-text>
                          </ion-label>
                          <ion-avatar class="avatar" slot="end">
                            <img
                              src="../../assets/images/play-icon.png"
                              class="small-icon"
                              alt="menu icon"
                            />
                          </ion-avatar>
                        </ion-item>
                        <ion-item>
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/search-purple.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize">
                            <h5>favorite albums</h5>
                          </ion-label>
                          <ion-avatar class="avatar" slot="end">
                            <img
                              src="../../assets/images/play-icon.png"
                              class="small-icon"
                              alt="menu icon"
                            />
                          </ion-avatar>
                        </ion-item>
                        <ion-item>
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/search-gray.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize">
                            <ion-text color="medium">
                              <h5>air guitar worthy</h5>
                            </ion-text>
                          </ion-label>
                          <ion-avatar class="avatar" slot="end">
                            <img
                              src="../../assets/images/play-icon.png"
                              class="small-icon"
                              alt="menu icon"
                            />
                          </ion-avatar>
                        </ion-item>
                        <ion-item>
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/search-gray.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize">
                            <ion-text color="medium">
                              <h5>sing-along songs</h5>
                            </ion-text>
                          </ion-label>
                          <ion-avatar class="avatar" slot="end">
                            <img
                              src="../../assets/images/play-icon.png"
                              class="small-icon"
                              alt="menu icon"
                            />
                          </ion-avatar>
                        </ion-item>
                      </ion-list>
                      <div class="visitor-box-btn">
                        <a href="#" class="visitor-btn">
                          <ion-text color="white">view as visitor</ion-text>
                        </a>
                      </div>
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