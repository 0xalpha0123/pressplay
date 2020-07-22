<template>
  <ion-page>
    <ion-content :scrollEvents="true">
      <ion-card
        color="white"
        class="main-playing box-shadow content-card max-width"
      >
        <ion-grid class="ion-no-padding visitor">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="full-screen">
                <div class="playing-box">
                  <div class="play-pause-btn">
                    <a href="#">
                      <img src="./demo/assets/images/play-btn.png" alt="play pause button" />
                    </a>
                  </div>
                  <div class="play-on-off">
                    <label>
                        <input type="checkbox" />
                        <span>
                            <img src="../../assets/images/songstory/nowplaying.png" alt="play pause button" />
                        </span>
                    </label> 
                  </div>
                  <ion-text color="white">
                    <div class="discography-title">now playing</div>
                  </ion-text>
                  <div class="discography-sub-title">caitlin’s currently on repeat</div>
                  <div class="discography-img">
                    <img src="./demo/assets/images/playing-img.png" alt="discography image" />
                  </div>
                  <div class="discography-ans">
                    <ion-text color="white">
                      <div class="album-img">
                        <img src="../../assets/images/songstory/profile.png" />
                      </div>
                      <h3>10 answers</h3>
                    </ion-text>
                  </div>
                </div>
                <div class="view-answer">
                  <p>view matches only</p>
                </div>
                <ion-row>
                  <ion-col>
                    <div class="music-body">
                        <div class="album_body">
                            <h4>favorites</h4>
                            
                            <div class="album_body_list">
                                <a href="#">
                                    <img src="../../assets/images/songstory/album1.png" />
                                </a>
                                <a href="#">
                                    <img src="../../assets/images/songstory/album.png" />
                                </a>
                                <a href="#">
                                    <img src="../../assets/images/songstory/album.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="album_body">
                        <h4>least favorites</h4>
                        
                        <div class="album_body_list">
                            <a href="#">
                                <img src="../../assets/images/songstory/album.png" />
                            </a>
                            <a href="#">
                                <img src="../../assets/images/songstory/album.png" />
                            </a>
                            <a href="#">
                                <img src="../../assets/images/songstory/album.png" />
                            </a>
                        </div>
                    </div>
                    <div class="album_body">
                        <h4>moods</h4>
                        
                        <div class="album_body_list">
                            <a href="#">
                                <img src="../../assets/images/songstory/moods.png" />
                                <h5>high school</h5>
                            </a>
                            <a href="#">
                                <img src="../../assets/images/songstory/moods.png" />
                                <h5>childhood</h5>
                            </a>
                            <a href="#">
                                <img src="../../assets/images/songstory/moods.png" />
                                <h5>college</h5>
                            </a>
                        </div>
                    </div>
                    <div class="album_body">
                        <h4>genres</h4>
                        
                        <div class="album_body_list">
                            <a href="#">
                                <img src="../../assets/images/songstory/moods.png" />
                                <h5>high school</h5>
                            </a>
                            <a href="#">
                                <img src="../../assets/images/songstory/moods.png" />
                                <h5>childhood</h5>
                            </a>
                            <a href="#">
                                <img src="../../assets/images/songstory/moods.png" />
                                <h5>college</h5>
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