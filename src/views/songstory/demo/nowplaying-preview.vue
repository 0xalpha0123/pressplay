<template>
  <ion-page>
    <ion-content class="purple-vertical-gradient" fullscreen>
      <ion-grid>
        <ion-row>
          <ion-col size="2">
            <ion-button fill="clear">
              <img src="./assets/figma/rewind.png" />
            </ion-button>
          </ion-col>
          <ion-col size="8">
            <div class="header-text">
              <h5>Now Playing</h5>
              <p>your currently on repeat</p>
            </div>
          </ion-col>
          <ion-col size="2">
            &nbsp;
          </ion-col>
        </ion-row>
      </ion-grid>
      <div class="preview-wrapper">
        <div class="music-item">
          <div class="heading">Slow Dance</div>
          <span class="song-title">Come Sail Away</span>
          <span class="song-author">STYX</span>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<style lang="scss" scoped>
  .header-text {
    text-align: center;
    font-weight: bold;
    h5 {
      font-size: 24px;
      line-height: 33px;
      color: #fff;
      margin: 0;
    }
    p {
      font-size: 16px;
      line-height: 22px;
      color: #F2C94C;
      margin: 0;
    }
  }
  .preview-wrapper {
    background: url("./assets/figma/preview-bg.png") 0 100px no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 100%;
    position: relative;

    .music-item {
      display: inline-block;
      width: 134px;
      height: 134px;
      border-radius: 16px;
      background: url("./assets/figma/come-sail-away.jpeg") 0 0 no-repeat;
      background-size: cover;
      box-shadow: 0px 0px 11px #FFFFFF;
      position: absolute;
      left: 40px;
      top: 50%;
      overflow: hidden;

      .heading {
        background-color: #28CAED;
        text-align: right;
        text-decoration: uppercase;
        font-style: italic;
        font-weight: 800;
        font-size: 16px;
        line-height: 25px;
        padding-right: 10px;
        height: 25px;
        color: #FFFFFF;
      }
      .song-title, .song-author {
        position: absolute;
        left: 9px;
        bottom: 30px;
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        color: #FFFFFF;
      }
      .song-author {
        bottom: 15px;
        font-weight: 300;
      }
    }
  }
</style>
