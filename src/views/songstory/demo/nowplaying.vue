<template>
  <div id="app">
    <main>
      <section class="player">
        <div class="top_rect"></div>
        <div class="cover-wrapper">
          <img v-bind:class="coverObject" :src="current.cover" />
        </div>
        <img src="./assets/images/white_wave.png" class="white_wave" />
        <div class="song-details">
          <div class="song-info">
            <div class="left">
              <h2 class="song-title">
                {{ current.title }}
              </h2>
              <p class="artist">{{ current.artist }}</p>
            </div>
            <div class="right">
              <h2 class="like-count">2</h2>
              <img src="./assets/images/like.png" />
            </div>
          </div>
          <div class="music_progress">
            <div class="music_progress_outer">
              <div class="music_progress_inner" v-bind:style="'width: '+current.percent+'%'"></div>
              <div class="music_progress_circle" v-bind:style="'left: calc('+current.percent+'% - 9px)'"></div>
            </div>
          </div>
          <div class="timer">
            <p class="start">{{ currentlyTimer }}</p>
            <p class="end">
              - {{ remainingTimer }}
            </p>
          </div>
        </div>
        <div class="controls">
          <button class="prev" @click="prev" v-if="songs.length > 1">
            <img src="./assets/images/prev.png" />
          </button>
          <button class="prev" @click="prev" v-if="songs.length > 1">
            <img src="./assets/images/slow.png" />
          </button>
          <button class="play" v-if="!isPlaying" @click="play">
            <img src="./assets/images/play.png" />
          </button>
          <button class="pause" v-else @click="pause">
            <img src="./assets/images/pause.png" />
          </button>
          <button class="next" @click="next" v-if="songs.length > 1">
            <img src="./assets/images/fast.png" />
          </button>
          <button class="next" @click="next" v-if="songs.length > 1">
            <img src="./assets/images/next.png" />
          </button>
        </div>
      </section>
    </main>
    <section class="playlist">
      <h3>Now Playing <span> 🎵 </span></h3>
      <ul>
        <li v-for="song in songs" :key="song.src" class="song">
          <div class="cover-playlist">
            <img class="cover" src="./assets/images/play.png" />
          </div>
          <div class="details" @click="play(song)">
            <h2 class="song-title">
              {{ song.title }}
            </h2>
            <p class="artist">{{ song.artist }}</p>
          </div>
          <div class="music_progress_small music_progress" v-if="song.isPlaying">
            <div class="music_progress_outer">
              <div class="music_progress_inner" v-bind:style="'width: '+song.percent+'%'"></div>
              <div class="music_progress_circle" v-bind:style="'left: calc('+song.percent+'% - 9px)'"></div>
            </div>
          </div>
          <div class="actions">
            <button @click="removeSongFromPlaylist(song)" class="delete">
              <font-awesome-icon icon="times" />
            </button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { formatTimer } from "./helpers/timer";
import { deleteElement, threatSongs, shuffleArray } from "./helpers/utils";
import songs from "./mocks/songs";

export default {
  name: "App",
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
        this.remainingTimer = formatTimer(this.current.seconds - this.player.currentTime);
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

<style>
@import "./player.css";
</style>
