<template>
  <ion-page>
    <ion-row class="matches_header ion-padding-start ion-padding-end ion-padding-top ion-justify-content-between ion-align-items-center">
      <icon name="c-match-filter" size="large" />
      <h1>65,246 matches</h1>
      <icon name="c-menu" size="large" />
      <div class="notifications">
        2
      </div>
    </ion-row>
    <div class="content">
      <ion-card>
        <div class="song_banner">
          <ion-row class="first_header ion-justify-content-between">
            <ion-row>
              <img src="@/assets/images/color-single.png" />
              <div class="song_details">
                <p>Love Will Find A Way</p>
                <i>Mike Love</i>
              </div>
            </ion-row>
            <ion-row>
              <div class="song_stats">
                <div class="icon-container">
                  <icon name="c-songstory-nowplaying" style="color: white" />
                </div>
                <h3>22</h3>
              </div>
              <div class="song_stats discography">
                <div class="icon-container">
                  <icon name="c-songstory-discography" style="color: white" />
                </div>
                <h3>10</h3>
              </div>
            </ion-row>
          </ion-row>
          <img src="@/assets/images/match_frame.png" class="match_frame" />
          <div class="profile_image">
            <img src="@/assets/images/mira_3.png" />
          </div>
        </div>
        <div class="song_content">
          <ion-row class="content_header ion-justify-content-between">
            <ion-row class="ion-align-items-center">
              <icon name="globe-outline" size="large" style="color: #E0E0E0" />
              <i>43 mi.</i>
            </ion-row>
            <ion-row class="ion-align-items-center">
              <h3>27</h3>
              <div class="gender_icon">
                <icon name="c-gender-female" size="large" color="light" />
              </div>
            </ion-row>
          </ion-row>
          <div class="profile_content">
            <ion-row class="ion-align-items-center">
              <h3>Caitlin A</h3>
              <img src="@/assets/images/verified_user.png" />
              <i><b>last online: </b>2 hrs ago</i>
            </ion-row>
            <p>Single Mom on a Mission who believes, above all, that Love Will Find a Way...</p>
            <div class="play_icon_container">
              <icon name="c-play-filled" size="large" style="color:white" />
            </div>
          </div>
        </div>
      </ion-card>
    </div>
  </ion-page>
</template>
<script>
export default {
  data() {
    return {

    }
  }
};
</script>

<style lang="scss" scoped>
.matches_header{
  position: absolute;
  width: 100%;
  h1 {
    color: #FFFFFF;
    font-size: 20px;
  }
  .notifications{
    background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.13%, #28CAED 100%);
    width: 24px;
    height: 24px;
    border-radius: 12px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 16px;
    right: 8px;
  }
}
.content{
  width: 100%;
  height: 100%;
  background: radial-gradient(61.96% 51.91% at 51.68% 71.93%, #AA2986 0%, #8C3084 14%, #783482 27%, #713682 36%, #471B74 90%);
  padding-top: 80px;
  ion-card{
    border-radius: 15px;
    background: white;
    box-shadow: 0px 1px 8px #333333;
    overflow: initial;
    .song_banner{
      background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.12%, #28CAED 100%);
      border-radius: 15px 15px 51px 51px;
      padding: 16px 8px;
      position: relative;
      .first_header{
        width: 100%;
        img {
          width: 32px;
          height: 32px;
        }
        p{
          margin: 0;
          color: white;
          font-size: 15px;
          line-height: 120%;
        }
        i{
          font-size: 13px;
          color: #F2C94C;
        }
      }
      .match_frame{
        margin-bottom: 40px;
        margin-top: 16px;
      }
      .profile_image{
        width: 164px;
        height: 164px;
        background: #471B74;
        border-radius: 84px;
        padding: 16px;
        position: absolute;
        bottom: -48px;
        left: 50%;
        transform: translateX(-50%);
        img{
          border-radius: 50%;
        }
      }
    }
    .song_stats{
      .icon-container{
        width: 32px;
        height: 32px;
        border-radius: 16px;
        background: #F5DE79;
        display: flex;
        justify-content: center;
        align-items: center;
        &.discography{
          background: #F2C94C;
          h3{
            color: #F2C94C;
          }
        }
      }
      h3{
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.08em;
        font-weight: bold;
        text-align: center;
        color: #F5DE79;
        margin: 0;
      }
    }
    .gender_icon{
      background: #C515E1;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      ion-icon{
        color: white;
      }
    }
    .song_content{
      margin: 8px 20px 56px;
      .content_header{
        h3{
          font-size: 27px;
          margin: 0 4px 0 0;
        }
        i{
          color: #737373;
          margin-left: 4px;
        }
      }
    }
    .profile_content{
      margin-top: 32px;
      padding-bottom: 50px;
      h3{
        margin: 0;
      }
      img {
        width: 32px;
        margin: 0 4px;
        height: auto;
      }
      p{
        font-size: 16px;
        line-height: 19px;
        color: #737373;
      }
    }
    .play_icon_container{
      background: linear-gradient(0deg, #FF26A8 0%, #F2C94C 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 50px;
      height: 50px;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
