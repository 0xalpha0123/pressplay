<template>
  <ion-page>
    <ion-content :scrollEvents="true">
      <ion-card color="white" class="main-playing box-shadow content-card max-width">
        <ion-grid class="ion-no-padding">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
              <div class="full-screen">
                <ion-row class="top_rect"></ion-row>
                <ion-row class="cover-wrapper">
                  <img v-bind:class="coverObject" :src="current.cover" />
                </ion-row>
                <img src="../../assets/images/white_wave.png" class="white_wave" />
                <ion-row class="song-details">
                  <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding">
                    <div class="song-info">
                      <div class="left">
                        <h2 class="song-title">{{ current.title }}</h2>
                        <p class="artist">{{ current.artist }}</p>
                      </div>
                      <div class="right">
                        <h2 class="like-count">2</h2>
                        <img src="../../assets/images/like.png" />
                      </div>
                    </div>
                    <div class="music_progress">
                      <div class="music_progress_outer">
                        <div
                          class="music_progress_inner"
                          v-bind:style="'width: '+current.percent+'%'"
                        ></div>
                        <div
                          class="music_progress_circle"
                          v-bind:style="'left: calc('+current.percent+'% - 9px)'"
                        ></div>
                      </div>
                    </div>
                    <div class="timer">
                      <p class="start">{{ currentlyTimer }}</p>
                      <p class="end">- {{ remainingTimer }}</p>
                    </div>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col size="12" size-md="6" size-xl="4" class="ion-no-padding controls">
                    <button class="prev" @click="prev" v-if="songs.length > 1">
                      <img src="../../assets/images/prev.png" />
                    </button>
                    <button class="prev" @click="prev" v-if="songs.length > 1">
                      <img src="../../assets/images/slow.png" />
                    </button>
                    <button class="play" v-if="!isPlaying" @click="play">
                      <img src="../../assets/images/play.png" />
                    </button>
                    <button class="pause" v-else @click="pause">
                      <img src="../../assets/images/pause.png" />
                    </button>
                    <button class="next" @click="next" v-if="songs.length > 1">
                      <img src="../../assets/images/fast.png" />
                    </button>
                    <button class="next" @click="next" v-if="songs.length > 1">
                      <img src="../../assets/images/next.png" />
                    </button>
                  </ion-col>
                </ion-row>
                <section class="playlist">
                  <h3>
                    Now Playing
                    <span>🎵</span>
                  </h3>
                  <ul>
                    <li v-for="song in songs" :key="song.src" class="song">
                      <div class="cover-playlist">
                        <img class="cover" src="../../assets/images/play.png" />
                      </div>
                      <div class="details" @click="play(song)">
                        <h2 class="song-title">{{ song.title }}</h2>
                        <p class="artist">{{ song.artist }}</p>
                      </div>
                      <div class="music_progress_small music_progress" v-if="song.isPlaying">
                        <div class="music_progress_outer">
                          <div
                            class="music_progress_inner"
                            v-bind:style="'width: '+song.percent+'%'"
                          ></div>
                          <div
                            class="music_progress_circle"
                            v-bind:style="'left: calc('+song.percent+'% - 9px)'"
                          ></div>
                        </div>
                      </div>
                      <div class="actions">
                        <button @click="removeSongFromPlaylist(song)" class="delete">x</button>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { formatTimer } from "./helpers/timer";
import { deleteElement, threatSongs, shuffleArray } from "./helpers/utils";
import songs from "./mocks/songs";

export default {
  data() {
    return {
      current: {},
      coverObject: { cover: true, animated: false },
      index: 0,
      isPlaying: false,
      currentlyTimer: "00:00",
      remainingTimer: "00:00",
      songs: shuffleArray(songs),
      player: new Audio()
    };
  },
  methods: {
    listenersWhenPlay() {
      this.player.addEventListener("timeupdate", () => {
        var playerTimer = this.player.currentTime;
        this.currentlyTimer = formatTimer(playerTimer);
        this.remainingTimer = formatTimer(
          this.current.seconds - this.player.currentTime
        );
        this.current.percent = (playerTimer * 100) / this.current.seconds;
        this.current.isPlaying = true;
      });
      this.player.addEventListener(
        "ended",
        function() {
          this.next();
        }.bind(this)
      );
    },
    setCover() {
      this.coverObject.animated = true;

      setTimeout(() => {
        this.coverObject.animated = false;
      }, 1000);
    },
    setCurrentSong() {
      this.current = this.songs[this.index];
      this.play(this.current);
      this.setCover();
    },
    play(song) {
      if (typeof song.src !== "undefined") {
        this.current.isPlaying = false;
        this.index = this.songs.indexOf(this.current);
        this.current = song;
        this.player.src = this.current.src;
      }

      this.player.play();
      this.isPlaying = true;

      this.setCover();
      this.listenersWhenPlay();
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.current.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.setCurrentSong();
    },
    prev() {
      this.current.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.setCurrentSong();
    },
    removeSongFromPlaylist(song) {
      if (this.songs.length > 1) {
        if (this.index > 0) {
          this.index--;
        }
        this.current.isPlaying = false;
        this.songs = deleteElement(this.songs, song);
        this.setCurrentSong();
      }
    }
  },
  mounted() {
    this.songs = threatSongs(this.songs);
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }
};
</script>

<style lang="scss" scoped>
@keyframes "gradient" {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes "scale-up-center" {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes "flip-in-hor-bottom" {
  0% {
    -webkit-transform: rotateX(80deg);
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
}
@keyframes "appear-smoothly" {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
ul {
  list-style: none;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.top_rect {
  background: linear-gradient(0deg, rgba(97, 20, 147, 0) 0%, #5d148c 80.73%);
  width: 100%;
  height: 72px;
  position: absolute;
}
main {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0px 1px 8px #333333;
  overflow: hidden;
  position: relative;
}
button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
}
.song-details {
  z-index: 99;
  position: relative;
  margin-top: -40px;
}
.song-info {
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  .left {
    text-align: left;
    h2 {
      font-family: Nunito;
      font-size: 20px;
      color: #333333;
      margin: 0;
    }
    p {
      margin: 5px 0;
      font-size: 16px;
      font-weight: bold;
      color: #f2c94c;
    }
  }
  .right {
    display: flex;
    align-items: flex-start;
    h2 {
      font-size: 27px;
      opacity: 0.5;
      margin: 3px 10px 0 0;
      color: #737373;
    }
    img {
      width: 42px;
    }
  }
}
.playlist {
  ul {
    padding: 0;
  }
  background-color: #fff;
  overflow-y: auto;
  max-height: 622px;
  border-radius: 5px;
  h3 {
    color: #212121;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  .song {
    position: relative;
    display: flex;
    padding: 10px;
    &:hover {
      background-color: #ededed;
      transition: box-shadow 0.2s, background-color 0.3s;
    }
  }
}
.music_progress {
  padding: 0 24px;
  margin-top: 12px;
}
.music_progress_small {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0;
}
.music_progress_outer {
  width: 100%;
  height: 5px;
  background: #e0e0e0;
  border-radius: 5px;
  position: relative;
}
.music_progress_inner {
  height: 5px;
  background: linear-gradient(270deg, #f5de79 0%, #f2c94c 35.94%, #e49062 100%);
  border-radius: 5px;
}
.music_progress_circle {
  width: 23px;
  height: 23px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.42);
  position: absolute;
  top: -9px;
}
.cover-playlist {
  height: 50px;
  width: 50px;
  > .cover {
    margin-right: 15px;
    width: 50px;
  }
}
.cover-wrapper {
  width: 100%;
  text-align: center;
}
.cover {
  height: 100%;
  width: 100%;
}
.white_wave {
  width: 100%;
  margin-top: -100px;
  position: absolute;
  z-index: 2;
}
.details {
  margin-left: 10px;
  width: 100%;
  > .song-title {
    color: #585858;
    font-size: inherit;
    text-align: left;
  }
  > .artist {
    color: #5d5555;
    text-align: left;
  }
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
}
.play {
  width: 80px;
  height: 80px;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.pause {
  width: 80px;
  height: 80px;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.next {
  img {
    max-width: 100%;
    max-height: 100%;
  }
  border: 0;
  border-radius: 50%;
  font-size: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
}
.prev {
  img {
    max-width: 100%;
    max-height: 100%;
  }
  border: 0;
  border-radius: 50%;
  font-size: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
}
.actions {
  > .delete {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    justify-content: center;
    cursor: pointer;
    font-size: 30px;
    color: #ba83ca;
  }
}
.timer {
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
}
.k-progress-outer {
  margin-top: 15px !important;
  padding-right: 0 !important;
}
.footer {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  > a {
    cursor: pointer;
    color: #d4d4d4;
    position: relative;
    top: -10px;
    font-size: 25px;
  }
}
#app {
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 768px) {
  #app {
    grid-template-columns: 1fr;
  }
  body {
    height: 100%;
    margin-top: 10px;
  }
  .playlist {
    max-height: 200px;
  }
}
</style>
