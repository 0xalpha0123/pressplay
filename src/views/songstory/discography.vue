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
                <div class="discography-box">
                  <div class="play-pause-btn">
                    <a href="#" class="d-block">
                      <img
                        src="../../assets/images/play-btn.png"
                        alt="play pause button"
                      />
                    </a>
                  </div>
                  <ion-text color="white">
                    <div class="discography-title">discography</div>
                  </ion-text>
                  <div class="discography-sub-title">your musical autobiography</div>
                  <div class="discography-img">
                    <img src="../../assets/images/discography-img.png" alt="discography image" />
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
                        <li class="active">
                          <a href="#">firsts</a>
                        </li>
                        <li>
                          <a href="#">milestones</a>
                        </li>
                        <li>
                          <a href="#">eras</a>
                        </li>
                        <li>
                          <a href="#">summary</a>
                        </li>
                        <li>
                          <a href="#">moods</a>
                        </li>
                      </ul>
                      <ion-list lines="full">
                        <ion-item>
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/search-purple.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize">
                            <h5>first musical memory</h5>
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
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/blue-checkmark.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize">
                            <h5>first musical purchase</h5>
                            <h6>flyleaf</h6>
                            <ion-text color="medium" class="text-small">flyleaf</ion-text>
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
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/search-gray.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize" color="medium">
                            <h5>first slow dance</h5>
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
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/search-gray.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize" color="medium">
                            <h5>first car</h5>
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
                          <ion-avatar class="avatar" slot="start">
                            <img
                              src="../../assets/images/search-gray.png"
                              class="small-icon"
                              alt="search icon"
                            />
                          </ion-avatar>
                          <ion-label class="text-capitalize" color="medium">
                            <h5>first date</h5>
                          </ion-label>
                          <ion-avatar class="avatar" slot="end">
                            <img
                              src="../../assets/images/play.png"
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
